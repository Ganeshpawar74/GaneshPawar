import { Component, Suspense, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

class WebGLErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch() {
    // Silently swallow WebGL errors so the app degrades gracefully.
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

function detectWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return Boolean(gl);
  } catch {
    return false;
  }
}

function FloatingBlob({
  position,
  color,
  speed = 1,
  scale = 1,
  distort = 0.45,
  wireframe = false,
}: {
  position: [number, number, number];
  color: string;
  speed?: number;
  scale?: number;
  distort?: number;
  wireframe?: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.0015 * speed;
    meshRef.current.rotation.y += 0.0022 * speed;
    const t = state.clock.elapsedTime;
    meshRef.current.position.y = position[1] + Math.sin(t * speed) * 0.25;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 6]} />
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={1.2}
          roughness={0.25}
          metalness={0.6}
          wireframe={wireframe}
        />
      </mesh>
    </Float>
  );
}

function TorusKnot({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.003;
    meshRef.current.rotation.y += 0.004;
  });
  return (
    <Float speed={0.8} rotationIntensity={1.2} floatIntensity={1.6}>
      <mesh ref={meshRef} position={position} scale={0.6}>
        <torusKnotGeometry args={[1, 0.32, 220, 32]} />
        <meshStandardMaterial
          color={color}
          metalness={0.85}
          roughness={0.2}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(1600 * 3);
    for (let i = 0; i < 1600; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    ref.current.rotation.x = state.clock.elapsedTime * 0.012;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.85}
      />
    </Points>
  );
}

function ParallaxRig() {
  useFrame((state) => {
    const { camera, pointer } = state;
    const targetX = pointer.x * 0.6;
    const targetY = pointer.y * 0.4;
    camera.position.x += (targetX - camera.position.x) * 0.04;
    camera.position.y += (targetY - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function CSSFallback() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[55vw] h-[55vw] rounded-full bg-primary/20 blur-[140px] animate-pulse" />
      <div
        className="absolute -bottom-32 -right-32 w-[55vw] h-[55vw] rounded-full bg-cyan-500/15 blur-[140px] animate-pulse"
        style={{ animationDelay: "1.2s" }}
      />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40vw] h-[40vw] rounded-full bg-blue-500/10 blur-[120px] animate-pulse"
        style={{ animationDelay: "2.4s" }}
      />
    </div>
  );
}

export default function Scene3D() {
  const [supported, setSupported] = useState<boolean | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setSupported(!reduceMotion && detectWebGL());
  }, []);

  if (supported === null) return null;
  if (!supported) return <CSSFallback />;

  return (
    <WebGLErrorBoundary>
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 55 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance", failIfMajorPerformanceCaveat: false }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
          }}
          fallback={<CSSFallback />}
        >
          <fog attach="fog" args={["#000", 8, 18]} />
          <ambientLight intensity={0.45} />
          <directionalLight position={[5, 5, 5]} intensity={1.1} color="#60a5fa" />
          <pointLight position={[-4, -3, 4]} intensity={1.4} color="#3b82f6" />
          <pointLight position={[4, 3, -2]} intensity={0.8} color="#22d3ee" />

          <Suspense fallback={null}>
            <ParticleField />
            <FloatingBlob position={[-3.4, 1.2, -1]} color="#3b82f6" speed={0.8} scale={1.1} />
            <FloatingBlob position={[3.6, -1.4, -2]} color="#1d4ed8" speed={1.1} scale={1.4} distort={0.55} />
            <FloatingBlob position={[2.4, 2.2, -3]} color="#0ea5e9" speed={0.6} scale={0.7} distort={0.35} wireframe />
            <FloatingBlob position={[-2.6, -2.2, -3]} color="#22d3ee" speed={0.9} scale={0.6} distort={0.4} wireframe />
            <TorusKnot position={[0, 0, -5]} color="#60a5fa" />
          </Suspense>

          <ParallaxRig />
        </Canvas>
      </div>
    </WebGLErrorBoundary>
  );
}
