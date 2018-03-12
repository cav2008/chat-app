import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Input from '../../components/input/input';
import Button from '../../components/button/button';

import './login.scss';

export default class Login extends React.Component {
  constructor() {
    super();

    this.updateUsername = this.updateUsername.bind(this);
  }

  /**
   * Set username store with textbox value and then change url.
   */
  updateUsername() {
    if (this.props.loginForm && Object.prototype.hasOwnProperty.call(this.props.loginForm, 'values')) {
      this.props.setUsername(this.props.loginForm.values.usernameInput);
    }

    // Change to chat page.
    window.location.assign('/#/chat');
  }

  render() {
    return (
      <div>
        <div className="login-container">
          <p className="login__label login__label--large login__label--no-margin">
            Please enter your username
          </p>
          {/* React Form passing it the styles and component you want to use. */}
          <Field name="usernameInput" component={Input} styles={{ center: true }} />
          <Button text="Enter chat" click={this.updateUsername} />
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  setUsername: PropTypes.func.isRequired,
  loginForm: PropTypes.object,
};

Login.defaultProps = {
  loginForm: null,
};
