import React from 'react';

import LoginInput from '../../components/form-input/form-input';
import Button from '../../components/button/button';

import './login.scss';

const Login = () => (
  <div>
    <div className="login-container">
      <LoginInput styles={{ center: true }} />
      <Button text="Enter chat" />
    </div>
  </div>
);

export default Login;
