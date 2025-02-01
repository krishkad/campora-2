"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import dayjs from "dayjs";

interface DatePickerTypes extends React.HTMLAttributes<HTMLDivElement> {
  ButtonClassName?: string;
}

export default function DatePicker({
  className,
  ButtonClassName,
}: DatePickerTypes) {
  // Use useState with lazy initialization
  const [date, setDate] = React.useState<DateRange | undefined>(() => ({
    from: new Date(dayjs().year(), dayjs().month(), dayjs().date()),
    to: addDays(new Date(dayjs().year(), dayjs().month(), dayjs().date()), 1),
  }));

  const formattedDate = React.useMemo(() => {
    if (date?.from) {
      return date.to
        ? `${format(date.from, "LLL dd, y")} - ${format(date.to, "LLL dd, y")}`
        : format(date.from, "LLL dd, y");
    }
    return "Pick a date";
  }, [date]);

  return (
    <div className={cn("w-full grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal rounded-full",
              !date && "text-muted-foreground",
              ButtonClassName
            )}
          >
            <CalendarIcon />
            <span>{formattedDate}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            disabled={(date) => {
              const today = new Date();
              today.setHours(0, 0, 0, 0);
              return date < today;
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
