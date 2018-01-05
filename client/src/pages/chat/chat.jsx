import React from 'react';
import socketio from 'socket.io-client';

// Components
import MessageScreen from '../../components/message-screen/message-screen';
import MessageInputForm from '../../components/message-input/message-input';

// const Chat = () => (
//   <div>
//     <MessageScreen />
//     <MessageInput />
//   </div>
// );

// export default Chat;

export default class Chat extends React.Component {
  componentWillMount() {
    this.socket = socketio();

    this.socket.on('test', (msg) => {
      console.log(msg);
    });
  }

  render() {
    return (
      <div>
        <MessageScreen />
        <MessageInputForm socket={this.socket} />
      </div>
    );
  }
}
