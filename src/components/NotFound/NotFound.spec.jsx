import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { describe, it } from 'mocha';

import NotFound from './NotFound';

describe('<NotFound />', () => {
  it('should render default text without any props', () => {
    const wrapper = shallow(<NotFound />);

    expect(wrapper.text()).to.equal('Not found!');
  });

  it('should render prop text when given props', () => {
    const text = 'rly this aint found, people';
    const wrapper = shallow(<NotFound text={text} />);

    expect(wrapper.text()).to.equal(text);
  });
});
