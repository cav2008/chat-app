import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import FormInput from '../form-input/form-input';
import Button from '../button/button';

import './message-input.scss';

const MessageInput = (props) => {
  const sendMessage = () => {
    props.socket.emit('test send', 'testing sending');
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
};

const MessageInputForm = reduxForm({
  form: 'chat',
})(MessageInput);

export default MessageInputForm;
