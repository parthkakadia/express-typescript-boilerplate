import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import config from './config';


import { routes } from './api';
import {httplogger} from './api/middlewares';
class App {
  public express;
  constructor() {
    this.express = express();
    this.express.set('port', config.PORT);
    this.express.set('env', config.ENV);
    this.initializeMiddlewares('pre');
    this.mountRoutes();
  }

  private initializeMiddlewares(location: String): void {
    if (location === 'pre') {
      this.express.use(helmet())
      this.express.use(compression());
      this.express.use(httplogger);
      this.express.use(bodyParser.json());  
      this.express.use(bodyParser.urlencoded({ extended: true }));
    }
    if (location === 'post') {
    }
  }

  private mountRoutes(): void {
    this.express.use('/', routes);
  }
}

export default new App().express;
