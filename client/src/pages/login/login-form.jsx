import { reduxForm } from 'redux-form';
import Login from './login';

const LoginForm = reduxForm({
  form: 'login',
})(Login);

export default LoginForm;
