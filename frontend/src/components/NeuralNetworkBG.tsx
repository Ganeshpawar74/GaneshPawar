import { useEffect, useRef } from "react";
import * as THREE from "three";

export function NeuralNetworkBG() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Standard Three.js initialization
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a0f, 0.015);

    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    camera.position.z = 250;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Particle nodes properties
    const particleCount = 120;
    const positions = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];
    const sizes = new Float32Array(particleCount);

    const minRange = -200;
    const maxRange = 200;

    for (let i = 0; i < particleCount; i++) {
      // Random coordinates inside a bounding box
      positions[i * 3] = Math.random() * (maxRange - minRange) + minRange;
      positions[i * 3 + 1] = Math.random() * (maxRange - minRange) + minRange;
      positions[i * 3 + 2] = Math.random() * (maxRange - minRange) + minRange;

      // Random velocities
      velocities.push({
        x: (Math.random() - 0.5) * 0.4,
        y: (Math.random() - 0.5) * 0.4,
        z: (Math.random() - 0.5) * 0.4,
      });

      sizes[i] = Math.random() * 2 + 1;
    }

    // Geometry & material for particles
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Custom shader/canvas point texture for soft glowing particles
    const canvas = document.createElement("canvas");
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 16, 16);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 4,
      map: texture,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
      color: 0x00d4ff, // Electric blue
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Line connections setup
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x7c3aed, // Violet
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    });

    const linePositions = new Float32Array(particleCount * particleCount * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Interactive mouse trackers
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.targetX = (event.clientX - width / 2) * 0.15;
      mouse.targetY = -(event.clientY - height / 2) * 0.15;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Handle viewport resize
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      camera.position.x += (mouse.x - camera.position.x) * 0.05;
      camera.position.y += (mouse.y - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      const positionsAttr = particles.geometry.attributes.position as THREE.BufferAttribute;
      const linePositionsAttr = lines.geometry.attributes.position as THREE.BufferAttribute;

      let lineCount = 0;

      // Update particle positions
      for (let i = 0; i < particleCount; i++) {
        let x = positionsAttr.getX(i);
        let y = positionsAttr.getY(i);
        let z = positionsAttr.getZ(i);

        // Add velocity
        x += velocities[i].x;
        y += velocities[i].y;
        z += velocities[i].z;

        // Bounce borders
        if (x < minRange || x > maxRange) velocities[i].x *= -1;
        if (y < minRange || y > maxRange) velocities[i].y *= -1;
        if (z < minRange || z > maxRange) velocities[i].z *= -1;

        positionsAttr.setXYZ(i, x, y, z);
      }
      positionsAttr.needsUpdate = true;

      // Update lines based on distance threshold
      const connectionDistance = 65;
      for (let i = 0; i < particleCount; i++) {
        const x1 = positionsAttr.getX(i);
        const y1 = positionsAttr.getY(i);
        const z1 = positionsAttr.getZ(i);

        for (let j = i + 1; j < particleCount; j++) {
          const x2 = positionsAttr.getX(j);
          const y2 = positionsAttr.getY(j);
          const z2 = positionsAttr.getZ(j);

          const dx = x1 - x2;
          const dy = y1 - y2;
          const dz = z1 - z2;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < connectionDistance) {
            // Draw line segment
            linePositionsAttr.setXYZ(lineCount * 2, x1, y1, z1);
            linePositionsAttr.setXYZ(lineCount * 2 + 1, x2, y2, z2);
            lineCount++;
          }
        }
      }

      // Reset coordinates for unused segments
      const maxLines = particleCount * particleCount;
      for (let k = lineCount; k < maxLines; k++) {
        linePositionsAttr.setXYZ(k * 2, 0, 0, 0);
        linePositionsAttr.setXYZ(k * 2 + 1, 0, 0, 0);
      }
      linePositionsAttr.needsUpdate = true;

      // Slow orbital rotate
      scene.rotation.y += 0.0008;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup resources
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      texture.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 pointer-events-none bg-[#0a0a0f]"
      style={{ overflow: "hidden" }}
    />
  );
}
