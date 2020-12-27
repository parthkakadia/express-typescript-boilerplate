import { Request, Response, Router } from 'express';


let router = Router();


router.get('/', (req: Request, res: Response) => {
  
    res.json({
      message: "Hello",
    });
  
  
 
});

export default router;