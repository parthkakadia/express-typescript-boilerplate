import morgan from 'morgan'
import { logger } from '../../utils';

// logger.stream().on('log', (message: string) => logger.info(message.substring(0, message.lastIndexOf('\n'))))
let stream = {
    write: function(message: string){
        logger.info(message);
    }
};
export default morgan(
  '  :method :url :status :response-time ms - :res[content-length]',
  {
      stream:stream
  }
);