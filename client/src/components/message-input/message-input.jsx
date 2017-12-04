import React from 'react';
import Button from '../button/button';

import './message-input.scss';

const MessageInput = () => (
  <div className="message-input">
    <input type="text" className="message-input__textbox" />
    <Button text="Send" styles={{ floatRight: true }} />
  </div>
);

export default MessageInput;
