import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Input from '../input/input';
import Button from '../button/button';

import './message-input.scss';

export default class MessageInput extends React.Component {
  constructor() {
    super();
    /**
     * Bind this (MessageInput) context to callback function otherwise it will forget what this is
     * when called by Button or Field.
     */
    this.sendMessage = this.sendMessage.bind(this);
  }

  /**
   * Sends the message to the server using the data stored in redux-form store.
   */
  sendMessage() {
    if (this.props.chat && Object.prototype.hasOwnProperty.call(this.props.chat, 'values')) {
      this.props.socket.send(this.props.chat.values.messageInput);

      // Reset fields. Prop comes from reduxField.
      this.props.reset();
    }
  }

  render() {
    return (
      <div className="message-input">
        <Field
          name="messageInput"
          component={Input}
          styles={{ inlineBlock: true, noMargin: true, shortWidth: true }}
          callback={this.sendMessage}
        />
        <Button text="Send" styles={{ floatRight: true }} click={this.sendMessage} />
      </div>
    );
  }
}

MessageInput.propTypes = {
  socket: PropTypes.object.isRequired,
  chat: PropTypes.object,
  // Reset form fields, from reduxForm
  reset: PropTypes.func,
};

MessageInput.defaultProps = {
  chat: null,
  reset: null,
};
