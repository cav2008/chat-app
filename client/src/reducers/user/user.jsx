/**
 * Reducers are used to update the store. Actions calls the correct reducers and passes the data
 * through.
 */

// Default values for the store.
const defaultState = {
  username: 'Anonymous',
};

/**
 * Reducer function to used to change and store the correct data.
 * @param {Object} state the current state object.
 * @param {Object} action the action with the data to put in the store.
 * @return {Object} returns new state to put in store.
 */
export default function user(state = defaultState, action) {
  switch (action.type) {
    case 'USERNAME_SET':
      return Object.assign({}, state, {
        username: action.username,
      });
    case 'USERNAME_CLEAR':
      return defaultState;
    default:
      return state;
  }
}
