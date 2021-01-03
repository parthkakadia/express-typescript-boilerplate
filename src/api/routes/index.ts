import Router from 'express'
import swaggerUi from 'swagger-ui-express';

import {swaggerDocument} from '../../docs';
import {ratelimiter} from '../middlewares'
import homeRouter from './home.routes'
import userRouter from './user.routes';

let router = Router();

router.use('/',ratelimiter,homeRouter);
router.use('/user',userRouter);
router.use('/docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router