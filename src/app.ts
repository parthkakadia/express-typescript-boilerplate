import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import dotenv from "dotenv";

class App {
  public express;

  constructor() {
    if (process.env.LOCAL === "true") {
      dotenv.config({ path: `./.env.${process.env.ENV}` });
    }
    this.express = express();
    this.express.set("port", process.env.PORT || 3000);
    this.express.set("env", process.env.ENV || "development");
    this.initializeMiddlewares("pre");
    this.mountRoutes();
  }

  private initializeMiddlewares(location: String): void {
    if (location === "pre") {
      this.express.use(compression());
      this.express.use(bodyParser.json());
      this.express.use(bodyParser.urlencoded({ extended: true }));
    }
    if (location === "post") {
    }
  }

  private mountRoutes(): void {
    const router = express.Router();
    router.get("/", (req, res) => {
      res.json({
        message: "Hello World!",
      });
    });
    this.express.use("/", router);
  }
}

export default new App().express;
