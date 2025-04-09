import type { NextConfig } from "next";
import path from "path";
// import WithVideos from "next-videos";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */

  sassOptions: {
    sourceMap: true,
    includePaths: [path.join(__dirname, "src/styles")],
    silenceDeprecation: ["legacy-js-api"],
  },
};

export default nextConfig;
