const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',  // Enable tree shaking by setting mode to "production"
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        test: /\.js(\?.*)?$/i,  // Only minify JavaScript files
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin()  // Clean the output directory before building
  ]
};
