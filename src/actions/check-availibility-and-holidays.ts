"use server";
import { ConnectToDatabase } from "@/database/db";
import BookingsDb from "@/database/models/bookings";
import CampsitesDb from "@/database/models/campsites";
import HolidayDb from "@/database/models/holiday";
import { format } from "date-fns";
import { NextRequest } from "next/server";

export const CheckAvailibilityAndHolidays = async (
  request: NextRequest
): Promise<{
  success: boolean;
  message: string;
  request?: any;
  amount?: number;
}> => {
  try {
    await ConnectToDatabase();
    const body = await request.json();

    const startOfDay = new Date(body.checkInAndOutDate.form);
    const endOfDay = new Date(body.checkInAndOutDate.form);
    const checkOutDay = new Date(body.checkInAndOutDate.to);
    startOfDay.setHours(0, 0, 0, 1);
    endOfDay.setHours(23, 59, 59, 999);

    const holidays = await HolidayDb.findOne({
      $or: [
        {
          start_date: { $lte: startOfDay },
          end_date: { $gte: checkOutDay },
        },
        {
          start_date: { $lte: new Date(body.checkInAndOutDate.form) },
          end_date: { $gte: new Date(body.checkInAndOutDate.form) },
        },
        {
          start_date: { $lte: new Date(body.checkInAndOutDate.to) },
          end_date: { $gte: new Date(body.checkInAndOutDate.to) },
        },
        {
          start_date: { $gte: new Date(body.checkInAndOutDate.form) },
          end_date: { $lte: new Date(body.checkInAndOutDate.to) },
        },
      ],
    });

    console.log({
      holidays,
      holiday: new Date("2025-01-01T00:00:00.000Z") <= startOfDay,
    });

    if (holidays) {
      return {
        success: false,
        message: `${holidays.holiday_name} form ${format(
          new Date(holidays.start_date as Date),
          "d MMM yyyy"
        )} to ${format(
          new Date(
            new Date(holidays.end_date).getFullYear(),
            new Date(holidays.end_date).getMonth(),
            new Date(holidays.end_date).getDate() - 1 // Subtract 1 day
          ),
          "d MMM yyyy"
        )}`,
      };
    }

    // Query the database for posts within the specified date range
    const bookings = await BookingsDb.find({
      "checkInAndOutDate.form": {
        $gte: startOfDay,
        $lte: endOfDay,
      },
    });

    const campsites = await CampsitesDb.findOne().sort({ createdAt: -1 });

    const meal_price =
      body.foodPreference === "Veg"
        ? campsites.veg_price
        : campsites.non_veg_price;

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
      amount: campsites.camp_price_without_meal + meal_price,
    };
  } catch (error: any) {
    console.log("error in check availibility server action: ", error);
    return {
      success: false,
      message: "error in check availibility server action",
    };
  }
};
