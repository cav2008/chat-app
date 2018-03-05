import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import MessageInput from './message-input';

// Mock spies
const spySocket = sinon.spy();
const socket = {
  send: spySocket,
};
const chat = {
  values: {
    messageInput: 'hello world',
  },
};

// Test components
const comp = shallow(<MessageInput socket={socket} chat={chat} />);

test('should mount', () => {
  expect(comp.find('.message-input').length).to.have.equal(1);
});
