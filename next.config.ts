import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  env: {
    NEXT_TELEMETRY_DISABLED: "1",
  },
};

export default nextConfig;
