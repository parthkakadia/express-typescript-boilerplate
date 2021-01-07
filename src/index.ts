import app from "./app";
import { logger } from "./utils";
import { initDB } from "./db";

let server;
process.on("uncaughtException", (err) => {
  logger.error(err.name, err.message);
  logger.error("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  process.exit(1);
});
initDB().then(() => {
  server = app.listen(app.get("port"), () => {
    logger.info(
      "App is running at http://localhost:" +
        app.get("port") +
        " in " +
        app.get("env") +
        " mode"
    );
  });
});

export default server;
