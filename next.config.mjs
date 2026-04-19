/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/uncategorized/beetroot",
        destination: "/blog/beetroot",
        permanent: true
      },
      {
        source: "/uncategorized/milk-recovery-drink",
        destination: "/blog/milk-recovery-drink",
        permanent: true
      },
      {
        source: "/cucumber-juice",
        destination: "/blog/cucumber-juice",
        permanent: true
      },
      {
        source: "/water-melon-juice-recipe",
        destination: "/blog/watermelon-juice",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
