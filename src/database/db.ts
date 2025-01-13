import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Create a variable to hold the cached connection
const cached: MongooseConnection = {
  conn: null,
  promise: null,
};

export const ConnectToDatabase = async (): Promise<Mongoose> => {
  if (!MONGODB_URL) {
    throw new Error("Missing MONGODB_URL");
  }

  // In production, clear the cached connection to avoid stale connections
  if (process.env.NODE_ENV === "production") {
    console.log("Production environment detected, clearing cached connection.");
    cached.conn = null;
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
    });
  }

  // Wait for the promise to resolve
  cached.conn = await cached.promise;
  console.log("Connected to the database.");
  return cached.conn;
};
