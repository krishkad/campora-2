export const dynamic = "force-dynamic";

import { CheckAvailibilityAndHolidays } from "@/actions/check-availibility-and-holidays";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { success, message, title } = await CheckAvailibilityAndHolidays(req);

    if (!success) {
      console.log({ success, message, title });
      return NextResponse.json({
        success,
        message,
        title: title ? title : null,
      });
    }

    return NextResponse.json({ success, message, title: null });
  } catch (error: any) {
    console.log("error while checking availibility: ", error.message);
    return NextResponse.json({
      success: false,
      message: "error while checking availibility",
    });
  }
}
