import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Use global caching for serverless environments like Vercel
const globalAny = global as any;

let cached: MongooseConnection = globalAny.mongoose;
if (!cached) {
  cached = globalAny.mongoose = { conn: null, promise: null };
}

export const ConnectToDatabase = async (): Promise<Mongoose> => {
  if (!MONGODB_URL) {
    throw new Error("Missing MONGODB_URL");
  }

  // Use the cached connection if it exists and is ready
  if (cached.conn && mongoose.connection.readyState === 1) {
    console.log("Using cached database connection.");
    return cached.conn;
  }

  // Create a new connection promise if it doesn't exist
  if (!cached.promise) {
    console.log("Creating a new database connection.");
    cached.promise = mongoose.connect(MONGODB_URL, {
      dbName: "Campora", // Change this to your actual database name
      bufferCommands: false,
      readPreference: "primary",
      retryWrites: true,
      socketTimeoutMS: 45000, // Adjust timeout as needed
    });
  }

  // Wait for the promise to resolve
  cached.conn = await cached.promise;
  console.log("Connected to the database.");
  return cached.conn;
};
