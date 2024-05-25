import express from "express";
import userRouter from "./user.js";

const mainRouter = express.Router();

// user router
mainRouter.use("/user", userRouter);

export default mainRouter;
