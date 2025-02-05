"use client";
import { useEffect, useState } from "react";

import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import DatePicker from "./date-picker";
import NumberSelect from "./number-select";
import { useToast } from "@/hooks/use-toast";
import { addDays } from "date-fns";
import { ToastAction } from "../ui/toast";
import { useRouter } from "next/navigation";
import { DateRange } from "react-day-picker";

const BookingBox = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 1),
  });
  const [numberOfGuest, setNumberOfGuest] = useState(2);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("#booking-box", {
        y: 0,
        opacity: 1,
        duration: 0.75,
        ease: "power3.inOut",
      });
    });

    return () => ctx.revert();
  }, []);
  const { toast } = useToast();

  const router = useRouter();

  const handle_check_availibility = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/bookings/check-availibility", {
        method: "POST",
        body: JSON.stringify({
          checkInAndOutDate: { form: date?.from, to: date?.to },
          numberOfGuest,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        toast({
          title: result?.title ?? "something went wrong!",
          description: result.message,
          variant: result?.title ? "default" : "destructive",
        });
      }

      if (result.success) {
        toast({
          title: `Camp Availible`,
          action: (
            <ToastAction
              altText="Book Now"
              onClick={() => router.push("/booking")}
            >
              Book Now
            </ToastAction>
          ),
        });
      }
    } catch (error: any) {
      console.log("error while checking availibility: ", error.message);
      toast({
        title: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="absolute -bottom-16 md:-bottom-8 inset-x-0 max-w-4xl mx-auto px-5 z-20 translate-y-full opacity-0"
      id="booking-box"
    >
      <div className=" bg-white rounded-3xl md:rounded-full h-32 md:h-16 p-4 grid grid-cols-2 md:flex md:items-center md:justify-bwtween gap-5 border">
        <div className="col-span-2 w-full">
          <DatePicker date={date} setDate={setDate} />
        </div>

        <NumberSelect
          numberOfGuest={numberOfGuest}
          setNumberOfGuest={setNumberOfGuest}
        />
        <Button
          className="max-w-[200px] rounded-full"
          onClick={handle_check_availibility}
          disabled={loading}
        >
          Check Availability
          <ArrowRight className="w-4 h-4 inline ml-0.5 max-md:hidden" />
        </Button>
      </div>
    </div>
  );
};

export default BookingBox;
