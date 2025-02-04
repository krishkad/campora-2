import { Booking } from "@/constants/index.c";
import axios from "axios";

export async function createBooking(newBooking: Partial<Booking>): Promise<{
  booking: Booking | null;
  error: string | null;
  title?: string | null;
}> {
  try {
    const response = await axios.post("/api/bookings/create", newBooking);
    console.log({ response: response.data });
    if (!response.data.success as boolean) {
      return {
        booking: null,
        error: response.data.message,
        title: response.data.title ? response.data.title : null,
      };
    }

    if (response.data.success) {
      return { booking: response.data.data, error: null };
    }
  } catch (error: any) {
    console.log("error while creating booking: ", error.message);
    return { booking: null, error: "failed to create booking" };
  }

  return { booking: null, error: "failed to create booking" };
}
