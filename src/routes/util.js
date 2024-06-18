import express from "express";
import {
  fetchAddressFromLatitudeAndLongitude,
  fetchPlantationMilestones,
} from "../controllers/util.js";
const utilsRouter = express.Router();

utilsRouter.get(
  "/getAddress/:latitude/:longitude",
  fetchAddressFromLatitudeAndLongitude
);

utilsRouter.get("/milestones", fetchPlantationMilestones);

export default utilsRouter;
