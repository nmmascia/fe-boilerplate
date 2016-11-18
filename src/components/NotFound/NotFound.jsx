import React, { PropTypes } from 'react';

const NotFound = (props) => {
  return (
    <div>{props.text}</div>
  );
};

NotFound.propTypes = {
  text: PropTypes.string,
};

NotFound.defaultProps = {
  text: 'Not found!',
};

export default NotFound;
