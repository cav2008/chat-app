import { reduxForm } from 'redux-form';
import MessageInput from './message-input';

const MessageInputForm = reduxForm({
  form: 'chat',
})(MessageInput);

export default MessageInputForm;
