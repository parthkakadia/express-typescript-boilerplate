import Router from 'express'

import homeRouter from './home'
import {ratelimiter} from '../middlewares'

let router = Router();

router.use('/',ratelimiter,homeRouter);

export default router