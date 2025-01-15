"use server";

import { Booking } from "@/constants/index.c";
import { ConnectToDatabase } from "@/database/db";
import BookingsDb from "@/database/models/bookings";

export const GetBookings = async (): Promise<{
  bookings: Booking[] | null;
  error: string | null;
}> => {
  try {
    await ConnectToDatabase();

    const bookings = await BookingsDb.find();
    console.log("bookings: ", bookings);
    if (!bookings || bookings.length === 0) {
      return { bookings: null, error: "no bookings found" };
    }

    const sanitizedResponse = bookings.map((item) =>
      JSON.parse(JSON.stringify(item.toObject()))
    );
    return { bookings: sanitizedResponse, error: null };
  } catch (error: any) {
    console.log("error while get-bookings: ", error.message);
    return { bookings: null, error: "error while get-booking" };
  }
};
