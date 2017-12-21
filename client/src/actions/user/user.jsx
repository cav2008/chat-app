// Actions are functions that the component calls to make something change in the reducers / store.

/**
 * Set the username.
 * Actions are made from 2 parts, the function part is called 'Action creator'.
 * The 'Action' part is the return.
 * @param {String} username
 */
export function userSetUsername(username) {
  return {
    // Type for the reducer to put the data in the correct place.
    type: 'USERNAME_SET',
    // The payload.
    username,
  };
}

/**
 * Reset username.
 */
export function userClearUsername() {
  return {
    type: 'USERNAME_CLEAR',
  };
}
