"use server";
import { ConnectToDatabase } from "@/database/db";
import BookingsDb from "@/database/models/bookings";
import CampsitesDb from "@/database/models/campsites";
import { format } from "date-fns";
import { NextRequest } from "next/server";

export const CheckAvailibility = async (
  request: NextRequest
): Promise<{ success: boolean; message: string; request?: any }> => {
  try {
    await ConnectToDatabase();
    const body = await request.json();

    const bookings = await BookingsDb.find({
      "checkInAndOutDate.form": new Date(body.checkInAndOutDate.form), // Filter based on checkInAndOutDate.form
    });

    const campsites = await CampsitesDb.findOne().sort({ createdAt: -1 });

    if (bookings.length >= campsites.total_camps) {
      return {
        success: false,
        message: `booking full for ${format(
          body.checkInAndOutDate.form,
          "d MMM yyyy"
        )}`,
      };
    }

    if (body.numberOfKids + body.numberOfGuests > campsites.capacity_per_camp) {
      return {
        success: false,
        message: `maximum capacity of tent is ${campsites.capacity_per_camp}`,
      };
    }

    return {
      success: true,
      message: "tent available",
      request: body,
    };
  } catch (error: any) {
    console.log("error in check availibility server action: ", error);
    return {
      success: false,
      message: "error in check availibility server action",
    };
  }
};
