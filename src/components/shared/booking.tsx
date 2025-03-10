"use client";
import Image from "next/image";
import React, { useState } from "react";
import DatePicker from "./date-picker";
import { Input } from "../ui/input";
import NumberSelect from "./number-select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { PhoneIcon, UserIcon } from "lucide-react";
import { MdEmail } from "react-icons/md";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";

const Booking = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 1),
  });
  const [numberOfGuest, setNumberOfGuest] = useState(0);
  const [numberOfKids, setNumberOfKids] = useState(0);
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="relative w-full h-[400px]">
          <Image
            src={"/images/videos.jpg"}
            fill
            sizes="100%"
            className="object-cover"
            alt="gallery"
          />
          <div className="absolute inset-0 bg-black/45 z-[5]" />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-semibold text-center text-gray-200">
              Booking
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-5 py-8">
        <div className="w-full border p-3 bg-slate-100 rounded-xl">
          <div className="w-full">
            <DatePicker
              ButtonClassName="h-12 rounded-md"
              date={date}
              setDate={setDate}
            />
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
            <div className="relative w-full h-max">
              <Input
                type="text"
                placeholder="Enter Your Name"
                className="bg-white pl-10 h-12"
              />
              <UserIcon className="absolute left-3 my-auto inset-y-0 w-4 h-4 shrink-0" />
            </div>
            <div className="relative w-full h-max">
              <Input
                type="email"
                placeholder="Enter Your Email"
                className="bg-white pl-10 h-12"
              />
              <MdEmail className="absolute left-3 my-auto inset-y-0 w-4 h-4 shrink-0" />
            </div>
            <div className="relative w-full h-max">
              <Input
                type="tel"
                placeholder="Enter Your Phone no."
                className="bg-white pl-10 h-12"
              />
              <PhoneIcon className="absolute left-3 my-auto inset-y-0 w-4 h-4 shrink-0" />
            </div>
            <div className="w-full grid grid-cols-2 gap-5">
              <div className="w-full space-y-1">
                <NumberSelect
                  numberOfGuest={numberOfKids}
                  setNumberOfGuest={setNumberOfKids}
                  placeHolder={"no. of Kids"}
                  selectValueClassName="h-12"
                />
              </div>
              <div className="w-full space-y-1">
                <NumberSelect
                  numberOfGuest={numberOfGuest}
                  setNumberOfGuest={setNumberOfGuest}
                  placeHolder={"no. of Guest"}
                  selectValueClassName="h-12"
                />
              </div>
            </div>
          </div>
          <div className="w-full mt-8">
            <div className="w-full flex flex-col">
              <p className="text-base font-semibold">Select Food</p>
              <div className="flex items-center space-x-2 mt-4">
                <Checkbox id="veg" />
                <label
                  htmlFor="veg"
                  className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                >
                  Veg
                </label>
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <Checkbox id="non-veg" />
                <label
                  htmlFor="non-veg"
                  className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                >
                  Non Veg
                </label>
              </div>
              <div className="w-full mt-8">
                <Textarea
                  className={"resize-none aspect-[4/2] bg-white"}
                  placeholder="Type your message here."
                />
              </div>
              <div className="w-full mt-8">
                <Textarea
                  className={"resize-none aspect-[4/2] bg-white"}
                  placeholder="Special Requests eg. celebration, range a cake, etc."
                />
              </div>
              <div className="w-full mt-8">
                <Button variant={"default"} size={"lg"} className="w-full">
                  Book
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
