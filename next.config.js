module.exports = {
  swcMinify: true,
  removeConsole: {
    exclude: ["error"],
  },
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/.well-known/brave-rewards-verification.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain",
          },
        ],
      },
    ];
  },
  images: {
    domains: [
      "emojicdn.elk.sh",
      "avatars.githubusercontent.com",
      "images.unsplash.com",
      "avatars.dicebear.com",
      "lh3.googleusercontent.com",
    ],
  },
};
