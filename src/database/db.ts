import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

// Cached connection object
const cached: MongooseConnection = {
    conn: null,
    promise: null,
};

export const ConnectToDatabase = async (): Promise<Mongoose> => {
    if (cached.conn && mongoose.connection.readyState === 1) {
        return cached.conn; // Return existing connection if available
    }

    if (!MONGODB_URL) {
        throw new Error("Missing MONGODB_URL");
    }

    if (!cached.promise) {
        // Create a new connection promise
        cached.promise = mongoose.connect(MONGODB_URL, {
            dbName: "Campora",
            bufferCommands: false,
            readPreference: "primary", // Always read from primary in production
        });
    }

    cached.conn = await cached.promise; // Wait for connection to resolve
    return cached.conn;
};
