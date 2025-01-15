import { ConnectToDatabase } from "@/database/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const connection = await ConnectToDatabase();
    // You can now use `connection` (which is a `mongoose.Connection` object)
    // For example, querying the database:
    const bookings = await connection.connection
      .collection("bookings")
      .find()
      .toArray();

    if (!bookings || bookings.length === 0) {
      return NextResponse.json({
        success: false,
        message: "No bookings found",
      });
    }

    return NextResponse.json({ data: bookings, success: true });
  } catch (error) {
    console.error("Error in GET request:", error);
    return NextResponse.json({
      message: "Error fetching bookings",
      success: false,
    });
  }
}
