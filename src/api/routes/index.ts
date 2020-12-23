import Router from "express"

import homeRouter from "./home"

let router = Router();

router.get('/',homeRouter);

export default router