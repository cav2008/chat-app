// Containers connects the store, actions to component.
// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import { userSetUsername } from '../../actions/user/user';

import Login from '../../pages/login/login';

/**
 * Maps the props that will be passed to the component to a state property.
 * @param {Object} state the state data object that you want to pass to component.
 * @return {Object} object of props to be available to component.
 */
function mapStateToProps(state) {
  return {
    username: state.user.username,
  };
}

/**
 * Maps the actions to props that will be passed to component. It allows component to change store.
 * @param {Function} dispatch dispatch allows you to send actions to the state / reducer.
 * @return {Object} object of actions as props to be avaiable to component.
 */
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    setUsername: userSetUsername,
  }, dispatch);
}

// Connects redux state data and actions as props to the component.
export default connect(mapStateToProps, matchDispatchToProps)(Login);
