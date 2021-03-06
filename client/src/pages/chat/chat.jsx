import React from 'react';
import PropTypes from 'prop-types';
import socketio from 'socket.io-client';

import getRandomColour from '../../helpers/colour-generator';

// Components
import MessageScreen from '../../components/message-screen/message-screen';
import MessageInputForm from '../../components/message-input/message-input-form';

import './chat.scss';

export default class Chat extends React.Component {
  componentWillMount() {
    // Create socket connection.
    this.socket = socketio();

    this.socket.emit('onConnect', {
      username: this.props.username,
      colour: getRandomColour(),
    });
  }

  render() {
    return (
      <div className="message-container">
        <MessageScreen socket={this.socket} />
        <MessageInputForm
          socket={this.socket}
          chat={this.props.chat}
        />
      </div>
    );
  }
}

Chat.propTypes = {
  username: PropTypes.string.isRequired,
  chat: PropTypes.object,
};

Chat.defaultProps = {
  chat: null,
};
