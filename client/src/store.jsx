// Redux
import { devToolsEnhancer } from 'redux-devtools-extension';
// createStore makes the store. combineReducers combines all the reducers into one thing.
import { createStore, combineReducers } from 'redux';

// Reducers.
// Redux form reducer.
import { reducer as reduxFormReducer } from 'redux-form';
// Our reducer.
import userReducer from './reducers/user/user';

// Combine all the reducers into one object.
const allReducers = combineReducers({
  user: userReducer,
  form: reduxFormReducer,
});

const store = createStore(allReducers, devToolsEnhancer());

export default store;
