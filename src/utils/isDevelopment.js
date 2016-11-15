// @flow

const isDevelopment = (): bool => {
  return process.env.NODE_ENV === 'development';
};

export default isDevelopment;
