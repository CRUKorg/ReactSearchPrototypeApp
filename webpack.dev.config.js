var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool:"eval",
  context:path.join(__dirname),
  entry: [
    'webpack-hot-middleware/client?reload=true',
    'babel-polyfill',
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
      react: path.resolve('./node_modules/react'),
    },
    extensions:[".js", ".jsx", ".webpack.js", ".web.js",""]
  },
  resolveLoader: {
    root: path.join(__dirname, "node_modules")
  },
  eslint: {
    configFile: './.eslintrc'
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, './node_modules/cruk-searchkit/src/components'),
          path.resolve(__dirname, './src/index.jsx')
        ],
        loader: 'babel',
        query: {
          plugins: [
            "transform-class-properties",
            "transform-es2015-object-super",
            "transform-proto-to-assign",
            "transform-es2015-block-scoping",
            ["transform-es2015-classes", { "loose": true }]
          ],
          presets: ["react", "es2015", "stage-0"]
        }
      },
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, './node_modules/cruk-searchkit/index.js')
        ],
        loader: 'babel',
        query: {
          plugins: [
            "transform-class-properties",
            "transform-es2015-object-super",
            "transform-proto-to-assign",
            "transform-es2015-block-scoping",
            ["transform-es2015-classes", { "loose": true }]
          ],
          presets: ["react", "es2015", "stage-0"]
        }
      },
      {
        test: /\.css$/,
        loaders: ["css"]
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loaders: ['file']
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};
