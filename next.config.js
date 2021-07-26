const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
})
module.exports = withMDX({
    rehypePlugins: [rehypePrism],
    pageExtensions: ['js', 'jsx', 'mdx'],
})