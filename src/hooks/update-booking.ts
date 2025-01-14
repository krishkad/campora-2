import { Booking } from "@/constants/index.c";
import axios from "axios";

export async function updateBooking(bookingProps: Partial<Booking>): Promise<{
  data: Booking[] | null;
  error: string | null;
}> {
  if (!bookingProps) return { data: null, error: "bookingProps missing!" };

  try {
    const response = await axios.put("/api/bookings/update", {
      ...bookingProps,
    });

    if (!response.data.success as boolean) {
      return { data: null, error: response.data.message };
    }

    if (response.data.success as boolean) {
      const fetchall = await axios.get("/api/bookings/get-all");
      if (!fetchall.data.success as boolean)
        return { data: null, error: fetchall.data.message };

      if (fetchall.data.success as boolean)
        return { data: fetchall.data.data, error: null };
    }

    return { data: null, error: response.data.message };
  } catch (error: any) {
    console.log(error.message);
    return { data: null, error: error.message };
  }
}
