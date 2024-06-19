import mongoose from "mongoose";
import commonSchema from "./commonSchema.js";

const Plantation = new mongoose.Schema({
  treeName: { type: String, required: true },
  points: { type: Number, required: true },
  plantationDate: {
    type: Date,
    required: true,
  },
  cloudinaryUrls: {
    type: [String],
    default: [],
  },
  milestones: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Milestones",
      },
    ],
    // validate: {
    //   validator: function (arr) {
    //     return arr.length > 1;
    //   },
    //   message: "Milestones array should have more than one element.",
    // },
  },
  ...commonSchema.obj,
});

export default mongoose.model("Plantation", Plantation);
