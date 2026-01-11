import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "tsx"],
  experimental: {},
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
