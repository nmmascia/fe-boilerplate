import createLogger from 'redux-logger';

export default createLogger({
  colors: {
    title: () => 'magenta',
    prevState: () => 'blue',
    action: () => 'magenta',
    nextState: () => 'blue',
    error: () => 'red',
  },
});
