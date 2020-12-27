import { Router } from "express";
import { userServices } from '../services';
import {response} from '../common';

let router = Router();

router.get("/all", userServices.getAllUsers,response);

export default router;
