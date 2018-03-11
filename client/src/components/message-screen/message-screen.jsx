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
  }

  componentDidMount() {
    this.createMessageListener(this.props.socket, this.scrollToBottomOfMessages.bind(this));
  }

  /**
   * Listen to messages sent by the server socket.
   */
  createMessageListener(socketListener, callBack) {
    socketListener.on('message', (msg) => {
      // Using the es6 spread syntax to save state.messages.
      // We can't use this.state.messages.push(msg) because pass the array length value.
      this.setState({ messages: [...this.state.messages, msg] });

      const { scrollHeight } = this.messageScreenDisplay;
      callBack(scrollHeight);
    });
  }

  /**
   * Auto scroll to the bottom of the message display screen.
   */
  scrollToBottomOfMessages(scrollHeight) {
    this.messageScreenDisplay.scrollTop = scrollHeight;
  }

  /**
   * Used to save the element reference.
   * @param {Object} ref html reference object.
   */
  handleSetRef(ref) {
    this.messageScreenDisplay = ref;
  }

  /**
   * Creates the message HTML elements.
   * @return {Array} Array of JSX elements.
   */
  createMessages() {
    return this.state.messages.map((message, index) => {
      if (message.type === 'chat') {
        return (
          <p key={index} className={`message message-chat message--${message.colour}`}>
            <strong>{`(${message.username})`}</strong>: {message.message}
          </p>
        );
      }

      const announcement = message.type === 'enter' ?
        `${message.username} entered the chat` : `${message.username} left the chat`;

      return (
        <p
          key={index}
          className="message message-announcement message--black"
        >
          --- {announcement} ---
        </p>
      );
    });
  }

  render() {
    return (
      <div className="message-screen">
        {/* Using ref is like using document document.getElementById, but it instance has it's own
        own reference. */}
        <div
          ref={this.handleSetRef.bind(this)}
          className="message-screen__display"
        >
          {this.createMessages()}
        </div>
      </div>
    );
  }
}

MessageScreen.propTypes = {
  socket: PropTypes.object.isRequired,
};
