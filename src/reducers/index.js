import { combineReducers } from 'redux';

import hello from 'reducers/hello';

const rootReducer = combineReducers({
  hello,
});

export default rootReducer;
