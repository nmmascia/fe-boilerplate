const path = require('path');
const webpack = require('webpack');

const autoprefixer = require('autoprefixer');
const precss = require('precss');
const cssValues = require('postcss-modules-values');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const dir = path.resolve('.');
const src = path.join(dir, 'src');

module.exports = {
  devtool: 'sourcemap',
  progress: true,
  entry: [
    'babel-polyfill',
    './src/index',
  ],
  output: {
    path: path.join(dir, 'dist', 'prod'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify('production'),
        },
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'My Application',
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: src,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[hash:base64:5]!postcss-loader!',
      },
      {
        test: /\.(jpg|png|mp3|wav|ogg)$/,
        loader: 'file-loader',
        include: src,
      },
      {
        test: /\.json$/,
        loader: 'json5-loader',
        include: src,
      },
    ],
    postcss: () => {
      return [
        autoprefixer,
        precss,
        cssValues,
      ];
    },
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules'],
    root: src,
  },
};
