import { ConnectToDatabase } from "@/database/db";
import CampsitesDb from "@/database/models/campsites";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    await ConnectToDatabase();

    const body = await req.json();

    const campsite = await CampsitesDb.create({ ...body });

    if (!campsite)
      return NextResponse.json({
        success: false,
        message: "failed to create campsite.",
      });

    return NextResponse.json({
      success: true,
      message: "Successfull",
      data: campsite,
    });
  } catch (error: any) {
    console.log("error while creating campsites: ", error.message);
    return NextResponse.json({
      success: false,
      message: "error while creating campsites",
    });
  }
}

export async function GET(): Promise<NextResponse> {
  try {
    await ConnectToDatabase();
    const campsite = await CampsitesDb.findOne().sort({ createdAt: -1 });

    if (!campsite)
      return NextResponse.json({
        success: false,
        message: "campsite not found",
      });

    return NextResponse.json({ data: campsite, success: true });
  } catch (error: any) {
    console.log("error in get campsite api: ", error.message);
    return NextResponse.json({
      success: false,
      message: "error in get campsite api",
    });
  }
}
