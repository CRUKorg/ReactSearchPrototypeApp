var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool:"eval",
  context:path.join(__dirname),
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react')
    },
    extensions:[".js", ".jsx", ".webpack.js", ".web.js",""]
  },
  resolveLoader: {
    root: path.join(__dirname, "node_modules")
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: [
            require.resolve('babel-preset-es2015'),
            require.resolve('babel-preset-react')
          ]
        }
      },
      {
        test: /\.css$/,
        exclude: [path.resolve('./node_modules/searchkit/release/theme.css')],
        loaders: ["css"]
      },
      {
        test: /\.scss$/,
        exclude: [path.resolve('./node_modules/searchkit/release/theme.css')],
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loaders: ['file']
      },
      {
        test: /\.json$/,
        loader: 'json'
      }/*,
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      }*/
    ]
  }
};
