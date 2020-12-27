import dotenv from 'dotenv';
import {logger} from '../utils/index'

if (process.env.LOCAL === 'true') {
    dotenv.config();
    logger.info('Loaded variables from Local');
  }
  else{
    logger.info('Loaded variables from server');
  }
export const 
PORT= process.env.PORT || 3000,
ENV= process.env.ENV || 'development',
DATABASE_URL= process.env.DATABASE_URL || 'mongodb://localhost:27017'
