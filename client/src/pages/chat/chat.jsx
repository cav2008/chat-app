import React from 'react';
import PropTypes from 'prop-types';
import socketio from 'socket.io-client';

// Components
import MessageScreen from '../../components/message-screen/message-screen';
import MessageInputForm from '../../components/message-input/message-input';

export default class Chat extends React.Component {
  componentWillMount() {
    // Create socket connection.
    this.socket = socketio();

    this.socket.emit('onConnect', this.props.username);
  }

  render() {
    return (
      <div>
        <MessageScreen socket={this.socket} />
        <MessageInputForm
          socket={this.socket}
          username={this.props.username}
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
