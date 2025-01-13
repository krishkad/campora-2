import { User, Role } from "@/constants/index.c";
import mongoose from "mongoose";

type IUser = User & mongoose.Document;

const userSchema = new mongoose.Schema<IUser>(
  {
    _id: {
      type: mongoose.Schema.ObjectId,
    },
    imageUrl: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phone: {
      type: String,
      unique: true,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: [
        "ADMIN",
        "MANAGER",
        "RECEPTIONIST",
        "CHEF",
        "HOUSEKEEPING",
        "MAINTENANCE",
        "EVENT_COORDINATOR",
      ],
      default: "CHEF",
    },
    joinedDate: {
      type: Date,
      default: new Date(),
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const UserDb = mongoose.models["users"] || mongoose.model("users", userSchema);

export default UserDb;
