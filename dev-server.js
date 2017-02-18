const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');

const app = express();
const compiler = webpack(config);
const rootDirectory = path.resolve('.');
const port = process.env.PORT || 3000;

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(rootDirectory, 'src', 'index.html'));
});

app.listen(port, 'localhost', err => {
    /* eslint-disable */
    if (err) console.log(err);
    else console.log(`Port: ${port}`);
    /* eslint-enable */
});
