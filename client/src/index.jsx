// Have to import react-hot-loader/patch first or it will complain.
import 'react-hot-loader/patch'; // This is only for hot reload CLI
import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // This is only for hot reload CLI

import App from './components/app';

const render = (Component) => {
  ReactDom.render(
    // We need to wrap the React hot reloader component around our root component
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  );
};

// Pass the root app component to be rendered
render(App);

/**
 * If there is hot reload then rerender the root component.
 * This is important we need to tell hot reload what component to reload.
 */
if (module.hot) {
  module.hot.accept('./components/app', () => { render(App); });
}
