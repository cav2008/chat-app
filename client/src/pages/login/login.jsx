import React from 'react';
import PropTypes from 'prop-types';

import LoginInput from '../../components/form-input/form-input';
import Button from '../../components/button/button';

import './login.scss';

const Login = (props) => {
  const updateUsername = () => {
    props.setUsername('bob');
  };

  return (
    <div>
      <div className="login-container">
        <LoginInput styles={{ center: true }} />
        <Button text="Enter chat" click={updateUsername} />
      </div>
    </div>
  );
};

Login.propTypes = {
  setUsername: PropTypes.func.isRequired,
};

export default Login;
