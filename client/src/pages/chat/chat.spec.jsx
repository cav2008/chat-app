import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Chat from './chat';

// Mock spies.

// Test components.
const comp = shallow(<Chat username="Bob" />);

test('should mount', () => {
  expect(comp.find('.message-container').length).to.be.equal(1);
});
