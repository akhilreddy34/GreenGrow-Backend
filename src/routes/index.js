import express from "express";
import userRouter from "./user.js";
import utilRouter from "./util.js";
import plantationRouter from "./plantation.js";

const mainRouter = express.Router();

mainRouter.use("/user", userRouter);
mainRouter.use("/utils", utilRouter);
mainRouter.use("/plantation", plantationRouter);

export default mainRouter;
