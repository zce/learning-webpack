module.exports = {
  entry: './entry.js',
  output: {
    filename: './bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loaders: ['style', 'css?module'] }
    ]
  }
}
