import { build } from "esbuild";

build({
  entryPoints: ["src/index.ts"],
  outfile: "dist/index.mjs",
  bundle: true,
  platform: "node",
  target: "node18",

  // 🔥 FIXES
  minify: true,
  sourcemap: false,
  treeShaking: true,

  // 🚀 reduce bundle size
  external: ["pino", "pino-pretty", "thread-stream"],

}).catch(() => process.exit(1));
