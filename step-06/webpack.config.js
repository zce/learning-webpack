module.exports = {
  entry: './entry.js',
  output: {
    filename: '[id]-[name]-[hash].js',
    path: 'dist',
    publicPath: 'dist'
  }
}
