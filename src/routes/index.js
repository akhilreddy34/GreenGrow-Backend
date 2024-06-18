import express from "express";
import userRouter from "./user.js";
import utilRouter from "./util.js";

const mainRouter = express.Router();

mainRouter.use("/user", userRouter);
mainRouter.use("/utils", utilRouter);

export default mainRouter;
