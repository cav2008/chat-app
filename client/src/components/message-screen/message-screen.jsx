import React from 'react';
import PropTypes from 'prop-types';

import './message-screen.scss';

export default class MessageScreen extends React.Component {
  constructor(props) {
    super(props);

    // Messages receieved from server socket.
    this.state = {
      messages: [],
    };

    this.createMessageListener();
  }

  /**
   * Listen to messages sent by the server socket.
   */
  createMessageListener() {
    this.props.socket.on('message', (msg) => {
      // Using the es6 spread syntax to save state.messages.
      // We can't use this.state.messages.push(msg) because pass the array length value.
      this.setState({ messages: [...this.state.messages, msg] });
    });
  }

  /**
   * Creates the message HTML elements.
   * @return {Array} Array of JSX elements.
   */
  createMessages() {
    return this.state.messages.map((message, index) => {
      if (message.type === 'chat') {
        return (
          <p key={index} className={`message--${message.colour}`}>
            <span>{message.username}</span>: {message.message}
          </p>
        );
      }

      const announcement = message.type === 'enter' ? `${message.username} entered the chat` : `${message.username} left the chat`;

      return <p key={index} className="message--black">--- {announcement} ---</p>;
    });
  }

  render() {
    return (
      <div className="message-screen">
        <div className="message-screen__display">
          {this.createMessages()}
        </div>
      </div>
    );
  }
}

MessageScreen.propTypes = {
  socket: PropTypes.object.isRequired,
};
