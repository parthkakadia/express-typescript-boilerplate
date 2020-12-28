import { Router } from "express";
import { userServices } from '../services';
import {response} from '../common';

let router = Router();

router.get('/all', userServices.getAllUsers,response);
router.post('/:username',userServices.getUserByUsername,response);

export default router;
