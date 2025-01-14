import mongoose from "mongoose";
import { Booking } from "@/constants/index.c"; // Ensure this path is correct

// Extend the Booking interface to include MongoDB document properties
// interface BookingDocument extends Booking, mongoose.Document {}
type BookingDocument = Booking & mongoose.Document;

// Define the schema
const bookingsSchema = new mongoose.Schema<BookingDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    amount: {
      type: Number,
      required: true,
    },
    numberOfGuests: {
      type: Number,
      required: true,
    },
    numberOfKids: {
      type: Number,
      required: true,
    },
    bookingStatus: {
      type: String,
      enum: ["Confirmed", "Pending", "Cancelled"],
      default: "Pending",
    },
    paymentStatus: {
      type: String,
      enum: ["Paid", "Pending", "Failed"],
      default: "Pending",
    },
    checkInAndOutDate: {
      type: new mongoose.Schema(
        {
          form: { type: Date, required: true },
          to: { type: Date, required: true },
        },
        { _id: false } // Disable _id for this subdocument
      ),
      required: true,
    },
    foodPreference: {
      type: String,
      enum: ["Veg", "Non-Veg"],
    },
    message: {
      type: String,
    },
    specialRequests: {
      type: String,
    },
  },
  { timestamps: true }
);

// Export the model
const BookingsDb =
  mongoose.models.bookings || mongoose.model("bookings", bookingsSchema);

export default BookingsDb;
