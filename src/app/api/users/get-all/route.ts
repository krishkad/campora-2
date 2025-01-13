import { ConnectToDatabase } from "@/database/db";
import UserDb from "@/database/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  await ConnectToDatabase();
  try {
    const users = await UserDb.find();

    if (!users || users.length === 0) {
      return NextResponse.json({ success: false, message: "no user found!" });
    }

    return NextResponse.json({ success: true, data: users });
  } catch (error: any) {
    console.log("error while fetching users: ", error.message);
    return NextResponse.json({
      success: false,
      message: "error while fetching users",
    });
  }
}
