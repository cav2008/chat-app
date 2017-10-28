import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import express from 'express';
import path from 'path';
import { ROOT_DIR, PUBLIC_DIR } from '../../config/config';
import webpackConfig from '../../../../client/webpack.dev.config';

export default class WebpackMiddleware {
  constructor(server, buildType = 'development') {
    this.setAppInstance(server);
    this.useWebpackMiddleware(buildType)
  }

  setAppInstance(server) {
    this.app = server;
  }

  useWebpackMiddleware(buildType) {
    if (buildType === 'development') {
      this.developmentWebpack();
    } else {
      this.productionWebpack();
    }
  }

  developmentWebpack() {
    const compiler = webpack(webpackConfig);

    // Start up webpack-dev-middleware
    this.app.use(webpackDevMiddleware(compiler,
      {
        publicPath: '/'
      }
    ));

    // Start up webpack-hot-middleware
    this.app.use(webpackHotMiddleware(compiler));

    // We need to serve the initial index.html file.
    this.app.get('*', function response(req, res) {
      res.sendFile(path.join(ROOT_DIR, './client/index.html'));
    });
  }

  productionWebpack() {
    // Serving frontend code the prebuilt way.
    this.app.use(express.static(PUBLIC_DIR));
  }
}
