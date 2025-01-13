import { ConnectToDatabase } from "@/database/db";
import BookingsDb from "@/database/models/bookings";
import { NextResponse } from "next/server";

export async function GET(req: Request): Promise<NextResponse> {
  try {
    // Connect to the database
    await ConnectToDatabase();

    // Fetch bookings from the database
    const bookings = await BookingsDb.find().read("primary");

    // Check if bookings exist
    if (!bookings || bookings.length === 0) {
      return NextResponse.json({
        success: false,
        message: "No bookings found",
      });
    }

    // Return the bookings
    return NextResponse.json({
      success: true,
      data: bookings,
    });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json({
      success: false,
      message: "An error occurred while fetching bookings",
    });
  }
}
