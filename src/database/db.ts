import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
console.log(MONGODB_URI);
if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

// Define an interface for the cached connection
interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Cache the connection across hot reloads in development and serverless environments
const globalForMongoose = global as typeof globalThis & {
  mongoose: MongooseConnection;
};

let cached: MongooseConnection;

if (!globalForMongoose.mongoose) {
  globalForMongoose.mongoose = { conn: null, promise: null };
}

cached = globalForMongoose.mongoose;

/**
 * ConnectToDatabase - A reliable database connection function for serverless environments.
 */
export const ConnectToDatabase = async (): Promise<Mongoose> => {
  if (cached.conn) {
    console.log("Using cached connect of MongoDb");
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "Campora", // Change this to your database name
      bufferCommands: false, // Disable buffering for reliability
      readPreference: "primary", // Ensure reads come from the primary node
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log("Successfully connected to MongoDB.");
    return cached.conn;
  } catch (error) {
    cached.promise = null; // Reset the promise cache on error
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
};
