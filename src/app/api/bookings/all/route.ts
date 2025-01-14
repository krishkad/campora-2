import { ConnectToDatabase } from "@/database/db";
import BookingsDb from "@/database/models/bookings";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    // Establish fresh DB connection
    const { body } = await req.json();
    await ConnectToDatabase();

    // Fetch bookings from the database
    console.log("Fetching bookings from database...");
    const bookings = await BookingsDb.find({ ...body })
      .read("primary") // Ensures it reads from the primary replica set
      .exec();

    // Check if bookings exist
    if (!bookings || bookings.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "No bookings found",
        },
        {
          headers: {
            "Cache-Control":
              "no-store, no-cache, must-revalidate, proxy-revalidate",
            Pragma: "no-cache", // For old HTTP/1.x clients
            Expires: "0", // Expiry set to immediate
          },
        }
      );
    }

    console.log("bookings: ", bookings);
    // Return the bookings
    return NextResponse.json(
      {
        success: true,
        data: bookings,
      },
      {
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
          Pragma: "no-cache", // For old HTTP/1.x clients
          Expires: "0", // Forces the cache to expire immediately
        },
      }
    );
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while fetching bookings",
      },
      {
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
  }
}
