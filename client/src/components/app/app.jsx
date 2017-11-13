import React from 'react';

// Components
import MessageScreen from '../message-screen/message-screen';
import MessageInput from '../message-input/message-input';

import '../../styles/styles.scss';

// Main app component
// Stateless function, benefits are less code and is faster than classes.
// Use stateless function if you don't need to have React life cycle or constructor methods.
const App = () => (
  <div>
    <MessageScreen />
    <MessageInput />
  </div>
);

export default App;
