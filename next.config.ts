import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias["@dt"] = require("path").resolve(__dirname, "app/components");
    return config;
  },
};

export default nextConfig;
