import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import FormInput from '../form-input/form-input';
import Button from '../button/button';

import './message-input.scss';

const MessageInput = (props) => {
  /**
   * Sends the message to the server using the data stored in redux-form store.
   */
  const sendMessage = () => {
    if (props.chat.values) {
      const clientMessage = {
        username: props.username,
        message: props.chat.values.messageInput,
      };

      props.socket.emit('client message', clientMessage);
    }
  };

  return (
    <div className="message-input">
      <Field
        name="messageInput"
        component={FormInput}
        styles={{ inlineBlock: true, noMargin: true, shortWidth: true }}
      />
      <Button text="Send" styles={{ floatRight: true }} click={sendMessage} />
    </div>
  );
};

MessageInput.propTypes = {
  socket: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired,
  chat: PropTypes.object,
};

MessageInput.defaultProps = {
  chat: null,
};

const MessageInputForm = reduxForm({
  form: 'chat',
})(MessageInput);

export default MessageInputForm;
