import { ConnectToDatabase } from "@/database/db";
import HolidayDb from "@/database/models/holiday";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<NextResponse> {
  try {
    await ConnectToDatabase();
    const body = await req.json();

    const holiday = await HolidayDb.create({ ...body });

    if (!holiday)
      return NextResponse.json({
        success: false,
        message: "failed to create holiday.",
      });

    return NextResponse.json({ success: true, data: holiday });
  } catch (error: any) {
    console.log("error while creating holiday in api: ", error.message);
    return NextResponse.json({
      success: false,
      message: "failed to create holiday in api.",
    });
  }
}

export async function GET(req: Request): Promise<NextResponse> {
  try {
    await ConnectToDatabase();
    const holidays = await HolidayDb.find();

    if (!holidays || holidays.length <= 0) {
      return NextResponse.json({
        success: false,
        message: "no booking found.",
      });
    }

    return NextResponse.json({ success: true, data: holidays });
  } catch (error: any) {
    console.log("error while fetching holidays: ", error.message);
    return NextResponse.json({
      success: false,
      message: "error while fetching holidays in api",
    });
  }
}
