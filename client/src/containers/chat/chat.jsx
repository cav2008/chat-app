// Redux
import { bindActionCreator } from 'redux';
import { connect } from 'react-redux';
// Actions

import Chat from '../../pages/chat/chat';

function mapStateToProps(state) {
  return {
    username: state.user.username,
    chat: state.form.chat,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Chat);
