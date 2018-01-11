import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

// Redux
import { devToolsEnhancer } from 'redux-devtools-extension';
// createStore makes the store. combineReducers combines all the reducers into one thing.
import { createStore, combineReducers } from 'redux';
// Provider lets component use the store.
import { Provider } from 'react-redux';
// Reducers.
// Redux form reducer.
import { reducer as reduxFormReducer } from 'redux-form';
// Our reducer.
import userReducer from './reducers/user/user';

// Pages
// import Chat from './pages/chat/chat';
import ChatContainer from './containers/chat/chat';
import LoginContainer from './containers/login/login';

// Styles
import './styles/global.scss';

// Combine all the reducers into one object.
const allReducers = combineReducers({
  user: userReducer,
  form: reduxFormReducer,
});

// Create the store using the reducers.
const store = createStore(allReducers, devToolsEnhancer());

// Main app component
// Stateless function, benefits are less code and is faster than classes.
// Use stateless function if you don't need to have React life cycle or constructor methods.
const AppRouter = () => (
  <Provider store={store}>
    <HashRouter>
      <div className="page">
        <Route exact path="/" component={LoginContainer} />
        <Route path="/chat" component={ChatContainer} />
      </div>
    </HashRouter>
  </Provider>
);

export default AppRouter;
