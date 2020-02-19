module.exports = {
  entry: 'index.tsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.tsx$/, loader: 'awesome-typescript-loader' },
    ],
  }
}
