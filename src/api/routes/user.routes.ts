import { Router } from "express";
import { userServices } from '../services';
import {response} from '../common';

let router = Router();

router.post('/',userServices.createUser,response)
router.get('/', userServices.getAllUsers,response);
router.get('/:username',userServices.getUserByUsername,response);
router.put('/:username',userServices.updateUser,response);
router.delete('/:username',userServices.deleteUser,response);
export default router;
