import { describe, it } from 'mocha';
import { expect } from 'chai';

import helloReducer from './hello';

describe('helloReducer', () => {
  it('should say hello more emphatically on SAY_HELLOO', () => {
    const action = { type: 'SAY_HELLOO' };
    const output = helloReducer({ text: 'Hello' }, action);

    expect(output.text).to.equal('Helloo');
  });
});
