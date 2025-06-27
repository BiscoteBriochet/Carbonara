import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    basePath: "/creepmobilites",
    output: "export",
    reactStrictMode: true,
    experimental: {
        optimizePackageImports: ["@mantine/core"]
    }
};

export default nextConfig;
