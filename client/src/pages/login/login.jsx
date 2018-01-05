import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import FormInput from '../../components/form-input/form-input';
import Button from '../../components/button/button';

import './login.scss';

const Login = (props) => {
  /**
   * Set username store with textbox value and then change url.
   */
  const updateUsername = () => {
    if (props.loginForm.values) {
      props.setUsername(props.loginForm.values.usernameInput);
    }

    // Change to chat page.
    window.location.href = '/#/chat';
  };

  return (
    <div>
      <div className="login-container">
        <p className="login__label login__label--large login__label--no-margin">
          Please enter your username
        </p>
        {/* React Form passing it the styles and component you want to use. */}
        <Field name="usernameInput" component={FormInput} styles={{ center: true }} />
        <Button text="Enter chat" click={updateUsername} />
      </div>
    </div>
  );
};

Login.propTypes = {
  setUsername: PropTypes.func.isRequired,
  loginForm: PropTypes.object,
};

Login.defaultProps = {
  loginForm: null,
};

/**
 *  We need to change the name because you can't change const and
 *  shouldn't export mutable components.
 */
const LoginForm = reduxForm({
  form: 'login',
})(Login);

export default LoginForm;
