import { ConnectToDatabase } from "@/database/db";
import UserDb from "@/database/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest): Promise<NextResponse> {
  try {
    await ConnectToDatabase();

    const body = await req.json();

    if (!body._id)
      return NextResponse.json({
        success: false,
        message: "user _id is missing!",
      });

    const delete_user = await UserDb.findByIdAndDelete(body.id);

    if (!delete_user)
      return NextResponse.json({
        success: false,
        message: "failed to delete user",
      });

    return NextResponse.json({ success: true, data: delete_user });
  } catch (error: any) {
    console.log("error while deleting user: ", error.message);
    return NextResponse.json({
      success: false,
      message: "error while deleting user",
    });
  }
}
