"use client";

import React, { Suspense, useEffect, useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import dayjs, { Dayjs } from 'dayjs';
import { cn, deserializeMonth, getMonth } from '@/lib/utils';
import { Calendar1Icon } from 'lucide-react';
// import { dayHeader } from '@/constants/index.c';
import { buttonVariants } from '../ui/button';


const LazyCalendar = React.lazy(() => import("./small-calendart"));

const SmallCalendar = ({ }: { defaultDate?: number }) => {


  const [isCalendarOpen, setIsCalendarOpen] = useState(false);


  const [month, setMonth] = useState<string[][]>(getMonth());
  const [monthNumber, setMonthNumber] = useState<number>(1);
  const output_month = deserializeMonth(month);


  useEffect(() => {
    setMonthNumber(new Date().getMonth());
    setMonth(getMonth());
  }, [])




  return (
    <Popover>
      <PopoverTrigger asChild onClick={() => setIsCalendarOpen(true)}>
        <p
          className={cn(buttonVariants({ variant: "outline" }), "rounded-full cursor-pointer w-full")}
        >
          <Calendar1Icon className='w-4 h-4 shrink-0 inline mr-0.5' />
          {dayjs(new Date(dayjs().year(), monthNumber, dayjs().date())).format('DD MMM YYYY')}
        </p>
      </PopoverTrigger>
      <PopoverContent className="w-max border-border p-2">
        {isCalendarOpen && (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCalendar setMonth={setMonth} setMonthNumber={setMonthNumber} output_month={output_month} monthNumber={monthNumber} />
          </Suspense>
        )}
      </PopoverContent>
    </Popover >
  );
};

export default SmallCalendar;