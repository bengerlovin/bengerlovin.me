const { withContentlayer } = require('next-contentlayer');


const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withContentlayer(withBundleAnalyzer({
  reactStrictMode: true,
  typescript: {
    tsconfigPath: './tsconfig.json'
  },
}
)); 
