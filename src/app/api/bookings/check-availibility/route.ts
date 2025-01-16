import { CheckAvailibility } from "@/actions/check-availibility";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { success, message } = await CheckAvailibility(req);

    if (!success) {
      return NextResponse.json({ success, message });
    }

    return NextResponse.json({ success, message });
  } catch (error: any) {
    console.log("error while checking availibility: ", error.message);
    return NextResponse.json({
      success: false,
      message: "error while checking availibility",
    });
  }
}
