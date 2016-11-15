import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { describe, it } from 'mocha';

import Hello from './Hello';

describe('test', () => {
  it('should work', () => {
    const wrapper = shallow(<Hello />);

    expect(wrapper.find('div').length).to.equal(0);
  });
});
