const path = require("path");

module.exports = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "assets.aceternity.com" }, // Aceternity Avatar
      { protocol: "https", hostname: "pbs.twimg.com" }, // Twitter Profile Picture
      { protocol: "https", hostname: "api.microlink.io" }, // Microlink Image Preview
    ],
  },
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [
      {
        source: "/boxshadows",
        destination: "/",
        permanent: true,
      },
      {
        source: "/test",
        destination: "/",
        permanent: true,
      },
      {
        source: "/playground",
        destination: "/",
        permanent: true,
      },
      {
        source: "/demos",
        destination: "/",
        permanent: true,
      },
      {
        source: "/demos/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/friday",
        destination: "/",
        permanent: true,
      },
      {
        source: "/snippets",
        destination: "/",
        permanent: true,
      },
      {
        source: "/snippets/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/resources",
        destination: "/",
        permanent: true,
      },
      {
        source: "/links",
        destination: "/",
        permanent: true,
      },
      {
        source: "/freelance",
        destination: "/",
        permanent: true,
      },
      {
        source: "/design-inspiration",
        destination: "/",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/",
        permanent: true,
      },
      {
        source: "/freecodecamp",
        destination: "/",
        permanent: true,
      },
      {
        source: "/api/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/feed.xml",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
