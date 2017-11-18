import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

// Pages
import Chat from './pages/chat/chat';
import Login from './pages/login/login';

import './styles/styles.scss';

// Main app component
// Stateless function, benefits are less code and is faster than classes.
// Use stateless function if you don't need to have React life cycle or constructor methods.
const AppRouter = () => (
  <HashRouter>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/chat" component={Chat} />
    </div>
  </HashRouter>
);

export default AppRouter;
