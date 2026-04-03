const path = require("path");

module.exports = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "assets.aceternity.com" }, // Aceternity Avatar
      { protocol: "https", hostname: "i.scdn.co" }, // Spotify Album Art
      { protocol: "https", hostname: "pbs.twimg.com" }, // Twitter Profile Picture
      { protocol: "https", hostname: "api.microlink.io" }, // Microlink Image Preview
      { protocol: "https", hostname: "avatars.githubusercontent.com" }, // GitHub avatars
    ],
  },
  outputFileTracingRoot: path.join(__dirname),
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      require("./scripts/generate-sitemap");
    }

    return config;
  },
  async redirects() {
    return [
      {
        source: "/boxshadows",
        destination: "https://ui.aceternity.com/tools/box-shadows",
        permanent: true,
      },
    ];
  },
};
