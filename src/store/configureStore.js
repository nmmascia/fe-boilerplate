// Redux
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

// Logging
import logger from 'utils/configureLogger';

// Reducers
import rootReducer from 'reducers';

// DevTools
import DevTools from 'utils/components/DevTools';
import { persistState as devToolsPersist } from 'redux-devtools';

import isDevelopment from 'utils/isDevelopment';

const getDebugSessionKey = () => {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
};

const configureStore = (initialState) => {
  const composedCreateStore = isDevelopment() ? (
        compose(
            applyMiddleware(thunk, logger),
            DevTools.instrument(),
            devToolsPersist(getDebugSessionKey()),
        )(createStore)
    ) : (
        compose(
            applyMiddleware(thunk),
        )(createStore)
    );

  const store = composedCreateStore(rootReducer, initialState);

  if (isDevelopment() && module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
