import React from 'react';

import './message-input.scss';

const MessageInput = () => (
  <div className="message-input">
    <input type="text" className="message-input__textbox" />
    <button className="message-input__send-btn">Send</button>
  </div>
);

export default MessageInput;
