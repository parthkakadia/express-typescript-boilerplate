import { Router } from "express";
import { userServices } from '../services';
import {response} from '../common';

let router = Router();

router.post('/add',userServices.createUser,response)
router.get('/all', userServices.getAllUsers,response);
router.get('/:username',userServices.getUserByUsername,response);
router.put('/update',userServices.updateUser,response);
router.delete('/:username',userServices.deleteUser,response);
export default router;
