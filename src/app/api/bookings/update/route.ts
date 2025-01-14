import { ConnectToDatabase } from "@/database/db";
import BookingsDb from "@/database/models/bookings";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest): Promise<NextResponse> {
  try {
    await ConnectToDatabase();

    const { _id, ...body } = await req.json();

    if (!body._id)
      return NextResponse.json({
        success: false,
        message: "booking id not found",
      });

    const update_booking = await BookingsDb.findByIdAndUpdate(
      { _id: _id },
      {
        ...body,
      },
      { new: true }
    );

    if (!update_booking)
      return NextResponse.json({
        success: false,
        message: "failed to update the booking",
      });

    const updated_booking = await BookingsDb.findById(body._id, null, {
      readConcern: { level: "majority" },
    });

    return NextResponse.json({
      success: true,
      message: "updated successfully",
      data: updated_booking,
    });
  } catch (error: any) {
    console.log("error while updating booking: ", error.message);
    return NextResponse.json({
      message: "error while updating booking",
      success: false,
    });
  }
}
