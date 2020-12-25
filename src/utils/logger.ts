import {createLogger, transports, format } from 'winston';

const logger = createLogger({
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    format.printf(info => `${info.timestamp} ${info.level}:  ${info.message}`),
    format.colorize({all:true})
  ),
  transports: [
    new transports.Console(),
  ] 
});

export default logger;