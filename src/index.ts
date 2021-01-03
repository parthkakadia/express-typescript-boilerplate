import errorHandler from "errorhandler";
import app from "./app";
import { logger } from "./utils";
import { initDB } from "./db";

app.use(errorHandler());

let server;
initDB().then(() => {
  server = app.listen(app.get("port"), () => {
    logger.log(
      "info",
      "App is running at http://localhost:" +
        app.get("port") +
        " in " +
        app.get("env") +
        " mode"
    );
    logger.log("info", "Press CTRL-C to stop\n");
  });
});

export default server;
