import mongoose from "mongoose";

const campsitesSchema = new mongoose.Schema(
  {
    camp_name: {
      type: String,
    },
    camp_description: {
      type: String,
    },
    total_camps: {
      type: Number,
    },
    capacity_per_camp: {
      type: Number,
    },
    camp_price_without_meal: {
      type: Number,
    },
    non_veg_price: {
      type: Number,
    },
    veg_price: {
      type: Number,
    },
  },
  { timestamps: true }
);

const CampsitesDb =
  mongoose.models["campsites"] || mongoose.model("campsites", campsitesSchema);

export default CampsitesDb;
