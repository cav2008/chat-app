import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import FormInput from './form-input';

// Mock spies.
const spyKeyPressCallback = sinon.spy();
const spyKeyPressCallback2 = sinon.spy();

// Test component.
const compWithCallback = shallow(<FormInput callback={spyKeyPressCallback} />);
const compNoCallback = shallow(<FormInput callback={spyKeyPressCallback2} />);

test('should mount', () => {
  expect(compWithCallback.find('input')).to.have.length(1);
});

test('should call callback function on Enter key press', () => {
  compWithCallback.find('input').simulate('keyPress', { key: 'Enter' });
  // eslint-disable-next-line
  expect(spyKeyPressCallback.called).to.be.true;
});

test('should NOT call callback function', () => {
  compNoCallback.find('input').simulate('keyPress', { key: 'a' });
  // eslint-disable-next-line
  expect(spyKeyPressCallback2.called).to.be.false;
});
