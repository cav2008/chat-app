/* eslint no-unused-expressions: 0 */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import MessageInput from './message-input';

// Mock spies
const spySocketFunc = sinon.spy();
const spyResetFunc = sinon.spy();
const spySocket = {
  send: spySocketFunc,
};
const chat = {
  values: {
    messageInput: 'hello world',
  },
};

const spySocketFunc2 = sinon.spy();
const spyResetFunc2 = sinon.spy();
const spySocket2 = {
  send: spySocketFunc2,
};

// Test components
const comp = shallow(<MessageInput socket={spySocket} chat={chat} reset={spyResetFunc} />);
const compNoChatProp = shallow(<MessageInput socket={spySocket2} reset={spyResetFunc2} />);

test('should mount', () => {
  expect(comp.find('.message-input').length).to.have.equal(1);
});

test('should have called socket.send function', () => {
  comp.instance().sendMessage();
  expect(spySocketFunc.calledOnce).to.be.true;
});

test('should have called reset function', () => {
  expect(spyResetFunc.calledOnce).to.be.true;
});

test('should not call socket.send function', () => {
  compNoChatProp.instance().sendMessage();
  expect(spySocketFunc2.called).to.be.false;
});

test('should not call reset function', () => {
  expect(spyResetFunc2.called).to.be.false;
});
