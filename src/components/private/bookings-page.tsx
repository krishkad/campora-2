import { ConnectToDatabase } from "@/database/db";
import BookingsDb from "@/database/models/bookings";
import { notFound } from "next/navigation";
import React from "react";
import BookingRoute from "./booking-route";

const BookingsPage = async () => {
  await ConnectToDatabase();

  const response = await BookingsDb.find();

  if (!response || response.length <= 0) {
    return notFound();
  }
  return <BookingRoute response={response} />;
};

export default BookingsPage;
