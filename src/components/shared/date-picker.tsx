// "use client";

// import React, { Suspense, useState } from 'react'
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"
// import dayjs, { Dayjs } from 'dayjs';
// import { cn, deserializeMonth, excludeDisabledWeek, getCurrentDay, getMonth } from '@/lib/utils';
// import { Calendar1Icon, ChevronLeft, ChevronRight } from 'lucide-react';
// // import { dayHeader } from '@/constants/index.c';
// import { Button, buttonVariants } from '../ui/button';
// import { dayHeader } from '@/constants/index.c';


// // const LazyCalendar = React.lazy(() => import("./small-calendart"));

// const DatePicker = ({ }: { defaultDate?: number }) => {




//   const [month, setMonth] = useState<string[][]>(getMonth());
//   const [monthNumber, setMonthNumber] = useState<number>(new Date().getMonth());
//   const output_month = deserializeMonth(month);



//   return (
//     <Popover>
//       <PopoverTrigger asChild>
//         <p
//           className={cn("h-9 px-4 py-2 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors", "rounded-full cursor-pointer w-full")}
//         >
//           <Calendar1Icon className='w-4 h-4 shrink-0 inline mr-0.5' />
//           {dayjs(new Date(dayjs().year(), monthNumber, dayjs().date())).format('DD MMM YYYY')}
//         </p>
//       </PopoverTrigger>
//       <PopoverContent className="w-max border-border p-2">
//         <div className="space-y-2">
//           <div className="flex justify-between items-center">
//             <Button size={'icon'} variant={'outline'} onClick={() => {
//               setMonthNumber((prev) => prev - 1)
//               setMonth(getMonth(monthNumber - 1))
//             }}>
//               <ChevronLeft className='w-4 h-4' />
//             </Button>
//             <div className="flex justify-center items-center gap-2">
//               <p className="text-sm font-medium">{dayjs(new Date(dayjs().year(), monthNumber, dayjs().date())).format("DD MMM YYYY")}</p>
//               {/* <p className="text-sm font-semibold"></p> */}
//             </div>
//             <Button size={'icon'} variant={'outline'} onClick={() => {
//               setMonthNumber((prev) => prev + 1)
//               setMonth(getMonth(monthNumber + 1))
//             }}>
//               <ChevronRight className='w-4 h-4' />
//             </Button>
//           </div>
//           <div className={cn("", excludeDisabledWeek(output_month)?.lastRow ? "grid grid-cols-7 grid-rows-7 gap-0.5 " : "grid grid-cols-7 grid-rows-6 gap-0.5 ")}>
//             {dayHeader.map((day, i) => {
//               return <div className="aspect-square w-8 bg-secondary flex items-center justify-center text-xs font-medium rounded-md" key={i}>
//                 {day.Label.slice(0, 1)}
//               </div>
//             })}
//             {excludeDisabledWeek(output_month)?.month.map((row: Dayjs[]) => {
//               return row.map((day: Dayjs, i: number) => {
//                 return <Button
//                   variant={'ghost'}
//                   className={cn("aspect-square w-8 h-8 hover:bg-secondary flex items-center justify-center text-xs font-medium rounded-md", getCurrentDay(day) && 'bg-primary text-white')}
//                   key={i}
//                   disabled={
//                     new Date(day.toISOString()).getMonth() > new Date(dayjs().year(), monthNumber).getMonth() || new Date(day.toISOString()).getMonth() < new Date(dayjs().year(), monthNumber).getMonth()
//                   }
//                   onClick={() => {
//                     // dispatch(changeMonthNumber(smallCalendarMonthNumber));
//                     // dispatch(changeMonth(getMonth(smallCalendarMonthNumber)));

//                   }}
//                 >
//                   {day.format('D')}
//                 </Button>
//               })
//             })}
//           </div>
//         </div>
//       </PopoverContent>
//     </Popover >
//   );
// };

// export default DatePicker;







"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const MemoizedCalendars = React.memo(Calendar)

export default function DatePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  })

  return (
    <div className={cn("w-full grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
            <MemoizedCalendars
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
        </PopoverContent>
      </Popover>
    </div>
  )
}
