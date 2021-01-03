import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import {PORT,ENV} from './config';
import { routes } from './api';
import {httplogger} from './api/middlewares';
class App {
  public express;
  constructor() {
    this.express = express();
    this.express.set('port', PORT);
    this.express.set('env', ENV);
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
    this.express.use('/api', routes);
  }
}

export default new App().express;
