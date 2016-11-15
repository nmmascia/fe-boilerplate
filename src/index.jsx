import debug from 'debug';
import React from 'react';
import { render } from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import Root from './Root';

import 'global/styles/global.css';

import isDevelopment from 'utils/isDevelopment';

if (isDevelopment()) {
  debug.enable('rr');
}

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  document.getElementById('root')
);

if (isDevelopment() && module.hot) {
  module.hot.accept('./Root', () => {
    const NextRoot = require('./Root').default; // eslint-disable-line global-require

    render(
      <AppContainer>
        <NextRoot />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
