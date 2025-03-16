const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://info-indol-nu.vercel.app/api/:path*",
      },
    ];
  },
};

export default nextConfig;
