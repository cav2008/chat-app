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
        type: 'chat',
        username: props.username,
        message: props.chat.values.messageInput,
      };

      props.socket.send(clientMessage);

      // Reset fields. Prop comes from reduxField.
      props.reset();
    }
  };

  return (
    <div className="message-input">
      <Field
        name="messageInput"
        component={FormInput}
        styles={{ inlineBlock: true, noMargin: true, shortWidth: true }}
        callback={sendMessage}
      />
      <Button text="Send" styles={{ floatRight: true }} click={sendMessage} />
    </div>
  );
};

MessageInput.propTypes = {
  socket: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired,
  chat: PropTypes.object,
  // Reset form fields, from reduxForm
  reset: PropTypes.func,
};

MessageInput.defaultProps = {
  chat: null,
  reset: {},
};

const MessageInputForm = reduxForm({
  form: 'chat',
})(MessageInput);

export default MessageInputForm;
