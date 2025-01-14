import { ConnectToDatabase } from "@/database/db";
import BookingsDb from "@/database/models/bookings";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest): Promise<NextResponse> {
  try {
    // Connect to the database
    await ConnectToDatabase();

    // Parse and validate the request body
    const { _id, ...body } = await req.json();
    if (!_id) {
      return NextResponse.json(
        {
          success: false,
          message: "Booking ID is required.",
        },
        { status: 400 }
      );
    }

    // Update the booking
    const updatedBooking = await BookingsDb.findByIdAndUpdate(
      _id,
      { ...body },
      { new: true, runValidators: true }
    );

    // Check if the update was successful
    if (!updatedBooking) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to update the booking. Booking not found.",
        },
        { status: 404 }
      );
    }

    // Fetch the updated booking to ensure data consistency
    const refreshedBooking = await BookingsDb.findById(_id, null, {
      readConcern: { level: "majority" },
    });

    // Respond with the updated booking
    return NextResponse.json(
      {
        success: true,
        message: "Booking updated successfully.",
        data: refreshedBooking,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error while updating booking:", error.message);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while updating the booking.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
