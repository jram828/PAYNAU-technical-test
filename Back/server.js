import express from "express";
import router from "../Back/src/routes/index.js";
import morgan from "morgan";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import specs from "./swagger.js"

const server = express();
server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use("/", router);
server.use('/paynau-docs', swaggerUi.serve, swaggerUi.setup(specs));

export {
  server,
};
