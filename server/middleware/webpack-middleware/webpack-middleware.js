import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import path from 'path';
import { ROOT_DIR, PUBLIC_DIR } from '../../config/config';
import webpackConfig from '../../../client/webpack.config';

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
    this.app.use(webpackDevMiddleware(webpack(webpackConfig),
      {
        publicPath: '/dist'
      }
    ));

    // We need to serve the initial index.html file.
    this.app.get('*', function response(req, res) {
      res.sendFile(path.join(ROOT_DIR, './client/index.html'));
    });
  }

  productionWebpack() {
    this.app.use(webpack(webpackConfig));

    // Serving frontend code the prebuilt way.
    this.app.use(express.static(PUBLIC_DIR));
  }
}