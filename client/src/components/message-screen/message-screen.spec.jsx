/* eslint no-unused-expressions: 0 */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import SocketIoMock from 'socket.io-mock';
import MessageScreen from './message-screen';

// Mock spies
const spySocketFunc = sinon.spy();
const spyCreateMessageListenerCallBack = sinon.spy();
const spySocket = {
  on: spySocketFunc,
};
const mockSocket = new SocketIoMock();

// Test components.
const comp = shallow(<MessageScreen socket={spySocket} />);

// Mock data.
const mockChatData = {
  type: 'chat', username: 'Bob', message: 'hello world', colour: 'blue',
};
const mockEnterData = {
  type: 'enter', username: 'Jim', message: '', colour: '',
};
const mockExitData = {
  type: 'exit', username: 'Tom', message: '', colour: '',
};

test('should mount', () => {
  expect(comp.find('.message-screen').length).to.be.equal(1);
});

test('should set messageScreenDisplay html reference', () => {
  // Create div html element.
  const divHtml = document.createElement('div');
  comp.instance().handleSetRef(divHtml);
  expect(comp.instance().messageScreenDisplay).to.be.equal(divHtml);
});

test('should call setState on message received', () => {
  comp.instance().createMessageListener(mockSocket, spyCreateMessageListenerCallBack);
  // Fire message socket event.
  mockSocket.socketClient.emit('message', mockChatData);
  const stateMessage = comp.state('messages')[0];
  expect(JSON.stringify(stateMessage)).to.be.equal(JSON.stringify(mockChatData));
});

test('should call createMessageListener callback function', () => {
  expect(spyCreateMessageListenerCallBack.calledOnce).to.be.true;
});

test('should set scrollTop to value', () => {
  comp.instance().scrollToBottomOfMessages(100);
  expect(comp.instance().messageScreenDisplay.scrollTop).to.be.equal(100);
});

test('should create chat message html', () => {
  comp.instance().createMessages();
  const chatMessage = comp.instance().createMessages()[0].props.children;
  expect(chatMessage.indexOf('hello world')).to.be.above(-1);
});

test('should create enter announcement message html', () => {
  mockSocket.socketClient.emit('message', mockEnterData);
  comp.instance().createMessages();
  const enterMessage = comp.instance().createMessages()[1].props.children;
  expect(enterMessage.indexOf('Jim entered the chat')).to.be.above(-1);
});

test('should create exit announcement message html', () => {
  mockSocket.socketClient.emit('message', mockExitData);
  comp.instance().createMessages();
  const exitMessage = comp.instance().createMessages()[2].props.children;
  expect(exitMessage.indexOf('Tom left the chat')).to.be.above(-1);
});
