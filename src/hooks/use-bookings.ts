import { Booking } from "@/constants/index.c";
import axios from "axios";

export async function fetchBookings(): Promise<{
  data: Booking[] | null;
  error: string | null;
}> {
  try {
    const response = await axios.get("/api/bookings");

    if (!response.data.success) {
      return { data: null, error: response.data.message };
    }

    return { data: response.data.data, error: null };
  } catch (error: any) {
    console.error("Error while fetching bookings:", error.message);
    return { data: null, error: error.message || "An unknown error occurred." };
  }
}
