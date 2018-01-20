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
      props.socket.send(props.chat.values.messageInput);

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
