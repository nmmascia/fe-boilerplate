const path = require('path');
const webpack = require('webpack');

const autoprefixer = require('autoprefixer');
const precss = require('precss');
const cssValues = require('postcss-modules-values');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const dir = path.resolve('.');
const src = path.join(__dirname, 'src');

module.exports = {
  devtool: 'sourcemap',
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
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
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
        loaders: [
          'babel-loader',
        ],
        include: src,
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => ([
                autoprefixer,
                precss,
                cssValues,
              ]),
            },
          },
        ],
        include: src,
      },
      {
        test: /\.(jpg|png|mp3|wav|ogg)$/,
        loaders: [
          'url-loader',
        ],
        include: src,
      },
      {
        test: /\.json$/,
        loaders: [
          'json5-loader',
        ],
        include: src,
      },
    ],
  },
  resolve: {
    modules: [
      src,
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
  },
};
