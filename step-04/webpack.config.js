const { BannerPlugin } = require('webpack')

module.exports = {
  entry: './entry.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new BannerPlugin('hello world')
  ]
}
