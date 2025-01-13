"use server";
import { ConnectToDatabase } from "@/database/db";
import BookingsDb from "@/database/models/bookings";
import UserDb from "@/database/models/user";
import mongoose from "mongoose";

const bookings = [
  {
    _id: new mongoose.Types.ObjectId(),
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "1234567890",
    address: "123 Main St, Springfield, USA",
    checkInAndOutDate: {
      form: new Date("2024-01-15"),
      to: new Date("2024-01-20"),
    },
    paymentStatus: "Paid",
    foodPreference: "Non-Veg",
    numberOfGuests: 4,
    numberOfKids: 2,
    message: "Please prepare a barbecue on the last night.",
    specialRequests: "Need an extra blanket.",
    bookingStatus: "Confirmed",
    createdAt: new Date("2023-12-25T10:00:00Z"),
    amount: 800,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: "9876543210",
    address: "456 Elm St, Metropolis, USA",
    checkInAndOutDate: {
      form: new Date("2024-01-18"),
      to: new Date("2024-01-19"),
    },
    paymentStatus: "Pending",
    foodPreference: "Veg",
    numberOfGuests: 2,
    numberOfKids: 0,
    bookingStatus: "Pending",
    createdAt: new Date("2023-12-28T14:30:00Z"),
    amount: 200,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Robert Johnson",
    email: "robertj@example.com",
    phone: "4561237890",
    address: "789 Oak St, Gotham City, USA",
    checkInAndOutDate: {
      form: new Date("2024-02-10"),
      to: new Date("2024-02-15"),
    },
    paymentStatus: "Paid",
    foodPreference: "Veg",
    numberOfGuests: 3,
    numberOfKids: 1,
    specialRequests: "Please arrange for a guided trekking tour.",
    bookingStatus: "Confirmed",
    createdAt: new Date("2023-12-30T09:45:00Z"),
    amount: 600,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Emily Davis",
    email: "emilydavis@example.com",
    phone: "8527419630",
    address: "321 Maple St, Smallville, USA",
    checkInAndOutDate: {
      form: new Date("2024-03-01"),
      to: new Date("2024-03-03"),
    },
    paymentStatus: "Failed",
    foodPreference: "Non-Veg",
    numberOfGuests: 1,
    numberOfKids: 0,
    message: "Celebrating a birthday, please arrange a cake.",
    bookingStatus: "Cancelled",
    createdAt: new Date("2024-01-05T11:20:00Z"),
    amount: 150,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Sophia Taylor",
    email: "sophiataylor@example.com",
    phone: "7418529630",
    address: "987 Willow St, Star City, USA",
    checkInAndOutDate: {
      form: new Date("2024-03-10"),
      to: new Date("2024-03-14"),
    },
    paymentStatus: "Paid",
    foodPreference: "Veg",
    numberOfGuests: 5,
    numberOfKids: 3,
    specialRequests: "Close to the river.",
    bookingStatus: "Confirmed",
    createdAt: new Date("2024-02-01T16:10:00Z"),
    amount: 1000,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Liam Brown",
    email: "liambrown@example.com",
    phone: "9638527410",
    address: "654 Cedar St, Central City, USA",
    checkInAndOutDate: {
      form: new Date("2024-04-05"),
      to: new Date("2024-04-07"),
    },
    paymentStatus: "Pending",
    foodPreference: "Non-Veg",
    numberOfGuests: 3,
    numberOfKids: 0,
    message: "Honeymoon trip, please arrange candles.",
    bookingStatus: "Pending",
    createdAt: new Date("2024-02-15T11:45:00Z"),
    amount: 450,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "William Green",
    email: "williamgreen@example.com",
    phone: "7894561230",
    address: "321 Spruce St, Coast City, USA",
    checkInAndOutDate: {
      form: new Date("2024-05-20"),
      to: new Date("2024-05-25"),
    },
    paymentStatus: "Paid",
    foodPreference: "Veg",
    numberOfGuests: 4,
    numberOfKids: 1,
    specialRequests: "Need a guide for stargazing.",
    bookingStatus: "Confirmed",
    createdAt: new Date("2024-03-10T08:30:00Z"),
    amount: 750,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Mia Wilson",
    email: "miawilson@example.com",
    phone: "8529637410",
    address: "213 Birch St, Keystone City, USA",
    checkInAndOutDate: {
      form: new Date("2024-06-15"),
      to: new Date("2024-06-18"),
    },
    paymentStatus: "Failed",
    foodPreference: "Non-Veg",
    numberOfGuests: 2,
    numberOfKids: 0,
    bookingStatus: "Cancelled",
    createdAt: new Date("2024-03-25T10:20:00Z"),
    amount: 300,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Emma White",
    email: "emmawhite@example.com",
    phone: "9517538520",
    address: "789 Maple Ave, National City, USA",
    checkInAndOutDate: {
      form: new Date("2024-07-01"),
      to: new Date("2024-07-05"),
    },
    paymentStatus: "Paid",
    foodPreference: "Veg",
    numberOfGuests: 3,
    numberOfKids: 2,
    specialRequests: "Quiet area, away from other groups.",
    bookingStatus: "Confirmed",
    createdAt: new Date("2024-04-01T09:00:00Z"),
    amount: 700,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Noah Martinez",
    email: "noahmartinez@example.com",
    phone: "1472583690",
    address: "456 Pine St, Emerald City, USA",
    checkInAndOutDate: {
      form: new Date("2024-08-10"),
      to: new Date("2024-08-15"),
    },
    paymentStatus: "Paid",
    foodPreference: "Non-Veg",
    numberOfGuests: 6,
    numberOfKids: 4,
    specialRequests: "Plan a group kayaking activity.",
    bookingStatus: "Confirmed",
    createdAt: new Date("2024-04-15T13:40:00Z"),
    amount: 1200,
  },
];

const users = [
  {
    _id: new mongoose.Types.ObjectId(),
    name: "John Doe",
    email: "john.doe@campingresort.com",
    phone: "+1-555-123-4567",
    address: "123 Forest Trail, Campville",
    role: "ADMIN",
    joinedDate: new Date("2020-01-15"),
    isActive: true,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Jane Smith",
    email: "jane.smith@campingresort.com",
    phone: "+1-555-234-5678",
    address: "456 River Road, Campville",
    role: "MANAGER",
    joinedDate: new Date("2021-06-01"),
    isActive: true,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Carlos Garcia",
    email: "carlos.garcia@campingresort.com",
    phone: "+1-555-345-6789",
    address: "789 Mountain Pass, Campville",
    role: "CHEF",
    joinedDate: new Date("2018-11-20"),
    isActive: true,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Emily Davis",
    email: "emily.davis@campingresort.com",
    phone: "+1-555-456-7890",
    address: "321 Lakeview Lane, Campville",
    role: "HOUSEKEEPING",
    joinedDate: new Date("2019-04-10"),
    isActive: true,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Michael Brown",
    email: "michael.brown@campingresort.com",
    phone: "+1-555-567-8901",
    address: "654 Canyon Road, Campville",
    role: "MAINTENANCE",
    joinedDate: new Date("2022-02-15"),
    isActive: true,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Sophia Wilson",
    email: "sophia.wilson@campingresort.com",
    phone: "+1-555-678-9012",
    address: "987 Valley Drive, Campville",
    role: "EVENT_COORDINATOR",
    joinedDate: new Date("2023-05-01"),
    isActive: true,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Liam Johnson",
    email: "liam.johnson@campingresort.com",
    phone: "+1-555-789-0123",
    address: "321 Sunset Blvd, Campville",
    role: "RECEPTIONIST",
    joinedDate: new Date("2023-03-15"),
    isActive: true,
  },
];

// Inserting users into the database
export async function insertBookings() {
  try {
    await ConnectToDatabase();
    await BookingsDb.insertMany(bookings);
    console.log("Bookings inserted successfully!");
  } catch (error) {
    console.error("Error inserting bookings:", error);
  }
}
export async function insertUsers() {
  try {
    await ConnectToDatabase();
    await UserDb.insertMany(users);
    console.log("Users inserted successfully!");
  } catch (error) {
    console.error("Error inserting users:", error);
  }
}
