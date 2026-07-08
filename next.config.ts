import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactCompiler: true,
  outputFileTracingRoot: projectRoot,
  turbopack: {
    // Prevent Next from picking C:\Users\micha as root when a parent package-lock.json exists
    root: projectRoot,
  },
};

export default nextConfig;
