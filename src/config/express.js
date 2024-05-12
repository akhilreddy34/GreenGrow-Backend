import express from "express";
import http from "http";
import cors from "cors";
import mainRouter from "../routes/index.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", mainRouter);
const server = http.createServer(app);

export default server;
