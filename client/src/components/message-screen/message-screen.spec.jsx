/* eslint no-unused-expressions: 0 */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import MessageScreen from './message-screen';

// Mock spies
const spySocketFunc = sinon.spy();
const spySocket = {
  on: spySocketFunc,
};

// Test components
const comp = shallow(<MessageScreen socket={spySocket} />);

test('should mount', () => {
  expect(comp.find('.message-screen').length).to.be.equal(1);
});

test('should create chat message html', () => {
  comp.instance().state.messages = [{
    type: 'chat', username: 'Bob', message: 'hello world', colour: 'blue',
  }];

  comp.instance().createMessages();
  const chatMessageClassNames = comp.instance().createMessages()[0].props.className;
  expect(chatMessageClassNames).to.be.equal('message message-chat message--blue');
  // call the method
  // if chat type we expect element to have message-chat
});
