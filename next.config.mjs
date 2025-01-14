/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["github.com"],
  },
  generateEtags: true, // Ensure ETag headers are used for caching
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [{ key: "Cache-Control", value: "no-store, must-revalidate" }],
      },
    ];
  },
};

export default nextConfig;
