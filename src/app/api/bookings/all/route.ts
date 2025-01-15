import { ConnectToDatabase } from "@/database/db";
import BookingsDb from "@/database/models/bookings";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  try {
    await ConnectToDatabase();
    const bookings = await BookingsDb.find().lean();

    if (!bookings || bookings.length <= 0)
      return NextResponse.json({
        success: false,
        message: "no bookings found",
      });

    return NextResponse.json({ data: bookings, success: true });
  } catch (error: any) {
    console.log("error in get all bookings api: ", error.message);
    return NextResponse.json({
      message: "error in get all bookings api",
      success: false,
    });
  }
}
