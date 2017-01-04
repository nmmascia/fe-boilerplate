import React from 'react';
import renderer from 'react-test-renderer';

import NotFound from '../NotFound';

test('renders default text', () => {
  const tree = renderer.create(<NotFound />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders prop text', () => {
  const tree = renderer.create(
    <NotFound
      text="Not Found!!"
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
