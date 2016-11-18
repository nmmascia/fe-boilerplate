import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { sayHelloo } from 'reducers/hello';

class HelloContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    hello: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.handleSayHelloo = this.handleSayHelloo.bind(this);
  }

  handleSayHelloo() {
    const { dispatch } = this.props;
    dispatch(sayHelloo());
  }

  render() {
    const { hello } = this.props;

    return (
      <div>
        <h1>{hello}</h1>

        <button onClick={this.handleSayHelloo}>Say {`${hello}o`}</button>
      </div>
    );
  }
}

export default connect((state, props) => {
  return {
    hello: state.hello.text,
  };
})(HelloContainer);
