import { Booking } from "@/constants/index.c";
import { useEffect, useState } from "react";
import axios from "axios";

export function useBookings() {
  const [bookings, setbookings] = useState<Booking[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBookings = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get("/api/bookings/get-all");
      if (!response.data.success as boolean) {
        setError(response.data.message);
        setIsLoading(false);
      }
      if (response.data.success as boolean) {
        setbookings(response.data.data);
        setIsLoading(false);
      }
    } catch (error: any) {
      setError(error.message);
      console.log("error while fetching bookings: ", error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
    const intervalId = setInterval(fetchBookings, 15000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return { bookings, isLoading, error };
}
