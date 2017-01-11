const path = require('path');
const webpack = require('webpack');

const autoprefixer = require('autoprefixer');
const precss = require('precss');
const cssValues = require('postcss-modules-values');

const dir = path.resolve('.');
const src = path.join(dir, 'src');

module.exports = {
  devtool: 'sourcemap',
  entry: [
    'react-hot-loader/patch',
    'babel-polyfill',
    'eventsource-polyfill',
    'webpack-hot-middleware/client',
    './src/index',
  ],
  output: {
    path: path.join(dir, 'dist', 'dev'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify('development'),
        },
      },
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
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[path][name]___[hash:base64:5]!postcss-loader!',
      },
      {
        test: /\.(jpg|png|mp3|wav|ogg)$/,
        loader: 'url-loader',
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
  externals: {
    cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
};
