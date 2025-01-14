import { Booking } from "@/constants/index.c";
import { useEffect, useState } from "react";
import axios from "axios";

import { useCallback } from "react";

export function useBookings() {
  const [bookings, setbookings] = useState<Booking[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBookings = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get("/api/bookings/get-all", {
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
        },
      });

      console.log({ data: response });
      if (!response.data.success) {
        setError(response.data.message);
      } else {
        setbookings(response.data.data);
      }
    } catch (error: any) {
      setError(error.message);
      console.error("Error while fetching bookings: ", error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  return { bookings, isLoading, error, refetch: fetchBookings };
}
