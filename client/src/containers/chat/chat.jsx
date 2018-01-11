// Redux
import { connect } from 'react-redux';
// Actions

import Chat from '../../pages/chat/chat';

function mapStateToProps(state) {
  return {
    username: state.user.username,
    chat: state.form.chat,
  };
}

export default connect(mapStateToProps)(Chat);
