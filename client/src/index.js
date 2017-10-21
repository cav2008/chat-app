// Have to import react-hot-loader/patch first or it will complain.
import 'react-hot-loader/patch';
import React from 'react';
import ReactDom from 'react-dom';
import { ReactHotContainer } from 'react-hot-loader';

import App from './components/app'

const render = Component => {
  ReactDom.render(
    // We need to wrap the React hot reloader component around our root component
    <ReactHotContainer>
      <Component />
    </ReactHotContainer>,
    document.getElementById('app')
  );
}

// Pass the root app component to be rendered
render(App)

// If there is hot reload then rerender the root component
if (module.hot) {
  module.hot.accept('./components/app', () => { render(App) });
}
