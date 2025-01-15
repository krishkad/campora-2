import { ConnectToDatabase } from "@/database/db";
import BookingsDb from "@/database/models/bookings";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await ConnectToDatabase();
    // You can now use `connection` (which is a `mongoose.Connection` object)
    // For example, querying the database:
    const bookings = await BookingsDb.find().lean();
    console.log("Bookings fetched:", JSON.stringify(bookings));
    if (!bookings || bookings.length === 0) {
      return NextResponse.json({
        success: false,
        message: "No bookings found",
      });
    }
    console.log("Bookings fetched:", JSON.stringify(bookings));

    return NextResponse.json({ data: bookings, success: true });
  } catch (error) {
    console.error("Error in GET request:", error);
    return NextResponse.json({
      message: "Error fetching bookings",
      success: false,
    });
  }
}
