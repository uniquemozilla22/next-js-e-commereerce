import { Router as UserRouter } from "express";
import { Request, Response } from "express";

const userRouter = UserRouter();

userRouter.post("/login", (_req: Request, res: Response) => {
  res.status(200).send({ message: "Called " });
  return;
});

export default userRouter;
