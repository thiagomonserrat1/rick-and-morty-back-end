// import { errorMiddleware } from "../src/middlewares/error.middleware";
import "express-async-errors";
import "reflect-metadata";
// import "reflect-metadata";
import express from "express";

import cors from "cors";
import router from "./routes";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/", router);

export default app;
