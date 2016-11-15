import React from 'react';
import Router from 'react-router/BrowserRouter';
import { Provider } from 'react-redux';

import AppView from 'views/AppView';

import store from 'store';

import DevTools from 'utils/components/DevTools';
import isDevelopment from 'utils/isDevelopment';

const RootContainer = () => (
  <Provider store={store}>
    <Router>
      <div>
        <AppView />
        {isDevelopment() ? <DevTools store={store} /> : null}
      </div>
    </Router>
  </Provider>
);

export default RootContainer;
