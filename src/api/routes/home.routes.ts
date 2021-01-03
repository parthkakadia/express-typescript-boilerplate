import { Request, Response, Router } from "express";

let router = Router();

/**
 * @swagger
 * /:
 *   get:
 *     description: Returns all users.
 *     responses:
 *       200:
 *         description: Homepage.
 */

router.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello",
  });
});

export default router;
