import { Booking } from "@/constants/index.c";
import { useEffect, useState } from "react";

import { useCallback } from "react";

export function useBookings(): {
  bookings: Booking[] | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
} {
  const [bookings, setbookings] = useState<Booking[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBookings = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/bookings/all?timestamp=${Date.now()}`,
        {
          method: "POST",
          cache: "no-store",
          body: JSON.stringify({
            createdAt: -1,
          }),
        }
      );

      const { data, success, message } = await response.json();

      console.log({ data, message, response });
      if (!success) {
        setError(message);
      } else {
        setbookings(data);
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
