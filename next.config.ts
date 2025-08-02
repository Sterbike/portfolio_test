import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
basePath: isProd ? "/portfolio_test" : "",
assetPrefix: isProd ? "/portfolio_test/" : "",
output: "export",
distDir: "dist",
images: {
  unoptimized: true,
},
};

export default nextConfig;
