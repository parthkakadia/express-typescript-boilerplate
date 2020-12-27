import Router from 'express'

import {ratelimiter} from '../middlewares'
import homeRouter from './home.routes'
import userRouter from './user.routes';

let router = Router();

router.use('/',ratelimiter,homeRouter);
router.use('/user',userRouter)

export default router