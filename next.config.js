const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
  },
  async headers() {
    return [
      {
        source: '/.well-known/brave-rewards-verification.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
        ],
      },
    ]
  },
  images: {
    domains: [
      'emojicdn.elk.sh',
      'avatars.githubusercontent.com',
      'images.unsplash.com',
      'avatars.dicebear.com',
      'lh3.googleusercontent.com',
    ],
  },
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
})
