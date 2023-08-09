import express from "express";
import { Express } from "express";
import routes from "./routes";

const app: Express = express();

routes(app);

app.listen(8080, () => {
  console.log("Server Has Started on the port 8080");
});
