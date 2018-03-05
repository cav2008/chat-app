import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Button from './button';

// Create mock spies.
const spyClickCallback = sinon.spy();

// Create test component.
const comp = shallow(<Button text="click me" click={spyClickCallback} />);

test('should mount', () => {
  expect(comp.find('button')).to.have.length(1);
});
