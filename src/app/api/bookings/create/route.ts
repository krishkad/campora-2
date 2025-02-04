export const dynamic = "force-dynamic";

import { CheckAvailibilityAndHolidays } from "@/actions/check-availibility-and-holidays";
import { Booking } from "@/constants/index.c";
import { ConnectToDatabase } from "@/database/db";
import BookingsDb from "@/database/models/bookings";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  await ConnectToDatabase();
  try {
    const { success, message, request, amount, title } =
      await CheckAvailibilityAndHolidays(req);

    if (!success) {
      return NextResponse.json({
        success,
        message,
        title: title ? title : null,
      });
    }

    const booking = await BookingsDb.create({
      ...request,
      amount: request.amount ? request.amount : amount,
    });

    if (!booking)
      return NextResponse.json({
        success: false,
        message: "failed to create booking",
      });

    return NextResponse.json({ success: true, data: booking });
  } catch (error: any) {
    console.log("error in creating booking: ", error.message);
    return NextResponse.json({
      success: false,
      message: "error in creating booking",
    });
  }
}
