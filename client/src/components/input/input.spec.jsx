/* eslint no-unused-expressions: 0 */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Input from './input';

// Mock spies.
const spyKeyPressCallback = sinon.spy();
const spyKeyPressCallback2 = sinon.spy();

// Test component.
const compWithCallback = shallow(<Input callback={spyKeyPressCallback} />);
const compNoCallback = shallow(<Input callback={spyKeyPressCallback2} />);

test('should mount', () => {
  expect(compWithCallback.find('input')).to.have.length(1);
});

test('should call callback function on Enter key press', () => {
  compWithCallback.find('input').simulate('keyPress', { key: 'Enter' });
  expect(spyKeyPressCallback.called).to.be.true;
});

test('should NOT call callback function', () => {
  compNoCallback.find('input').simulate('keyPress', { key: 'a' });
  expect(spyKeyPressCallback2.called).to.be.false;
});
