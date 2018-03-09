import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Button from './button';

// Create mock spies.
const spyClickCallback = sinon.spy();

// Create test component.
const comp = shallow(<Button text="click me" styles={{ floatRight: true }} click={spyClickCallback} />);

test('should mount', () => {
  expect(comp.find('button')).to.have.length(1);
});

test('should have btn--float-right classname', () => {
  expect(comp.find('.btn--float-right')).to.have.length(1);
});
