"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
class App {
    constructor() {
        if (process.env.LOCAL === 'true') {
            dotenv_1.default.config({ path: `./.env.${process.env.ENV}` });
        }
        this.express = express_1.default();
        this.express.set("port", process.env.PORT || 3000);
        this.express.set("env", process.env.ENV || "development");
        this.mountMiddlewares();
        this.mountRoutes();
    }
    mountMiddlewares() {
        this.express.use(compression_1.default());
        this.express.use(body_parser_1.default.json());
        this.express.use(body_parser_1.default.urlencoded({ extended: true }));
    }
    mountRoutes() {
        const router = express_1.default.Router();
        router.get("/", (req, res) => {
            res.json({
                message: "Hello World!",
            });
        });
        this.express.use("/", router);
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map