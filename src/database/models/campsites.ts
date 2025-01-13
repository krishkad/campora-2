import mongoose from "mongoose";

const campsitesSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.ObjectId,
      required: true,
      unique: true,
      auto: true,
    },
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

const Campsite =
  mongoose.models['campsites'] || mongoose.model("campsites", campsitesSchema);

export default Campsite;
