import { Express } from "express";
import userRouter from "./Login/login.route";

const routes = (app: Express) => {
  const URL = process.env.API_URL;

  app.use(process.env.USER_API_URL || "user", userRouter);
};

export default routes;
