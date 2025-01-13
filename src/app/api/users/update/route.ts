import { ConnectToDatabase } from "@/database/db";
import UserDb from "@/database/models/user";
import { NextRequest, NextResponse } from "next/server";
import { IoBody } from "react-icons/io5";

export async function PUT(req: NextRequest): Promise<NextResponse> {
  try {
    await ConnectToDatabase();

    const body = await req.json();

    if (!body._id) {
      return NextResponse.json({ success: false, message: "_id is missing!" });
    }

    const updated_user = await UserDb.findByIdAndUpdate(body._id, { ...IoBody });

    if (!updated_user)
      return NextResponse.json({
        success: false,
        message: "failed to update the user",
      });

    return NextResponse.json({ data: updated_user, success: true });
  } catch (error: any) {
    console.log("error while updating user: ", error.message);
    return NextResponse.json({
      success: false,
      messag: "error while updating user",
    });
  }
}
