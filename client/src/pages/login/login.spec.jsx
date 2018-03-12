/* eslint no-unused-expressions: 0 */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Login from './login';

// Mock spies.
const spySetUsername = sinon.spy();
const spySetUsername2 = sinon.spy();

// Mock data.
const mockLoginFormProp = {
  values: {
    usernameInput: 'Bob',
  },
};

// Test components.
const comp = shallow(<Login setUsername={spySetUsername} loginForm={mockLoginFormProp} />);
const compNoLoginFormProp = shallow(<Login setUsername={spySetUsername2} />);

test('should mount', () => {
  expect(comp.find('.login-container').length).to.be.equal(1);
});

test('should set username', () => {
  comp.instance().updateUsername();
  expect(spySetUsername.calledOnce).to.be.true;
});

test('should change to /chat page', () => {
  expect(window.location.href).to.be.equal('http://localhost:8000/#/chat');
});

test('should NOT set username', () => {
  compNoLoginFormProp.instance().updateUsername();
  expect(spySetUsername2.called).to.be.false;
});
