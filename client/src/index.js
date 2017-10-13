// Have to import react-hot-loader/patch first or it will complain.
import 'react-hot-loader/patch';
import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/app'

const render = Component => {
  ReactDom.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
}

render(App)

if (module.hot) {
  module.hot.accept('./components/app', () => { render(App) });
}
