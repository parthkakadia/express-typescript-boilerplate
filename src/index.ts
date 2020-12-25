import errorHandler from 'errorhandler';
import app from './app';
import { logger } from './utils';

/**
 * Error Handler. Provides full stack
 */
  app.use(errorHandler());
/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
  logger.log(
    'info',
    'App is running at http://localhost:' +
      app.get('port') +
      ' in ' +
      app.get('env') +
      ' mode'
  );
  logger.log('info', 'Press CTRL-C to stop\n');
});

export default server;
