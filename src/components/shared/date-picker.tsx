"use client";

import React, { Suspense, useState } from 'react'
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
import SmallCalendar from './small-calendart';


// const LazyCalendar = React.lazy(() => import("./small-calendart"));

const DatePicker = ({ }: { defaultDate?: number }) => {




  const [month, setMonth] = useState<string[][]>(getMonth());
  const [monthNumber, setMonthNumber] = useState<number>(new Date().getMonth());
  const output_month = deserializeMonth(month);



  return (
    <Popover>
      <PopoverTrigger asChild>
        <p
          className={cn(buttonVariants({ variant: "outline" }), "rounded-full cursor-pointer w-full")}
        >
          <Calendar1Icon className='w-4 h-4 shrink-0 inline mr-0.5' />
          {dayjs(new Date(dayjs().year(), monthNumber, dayjs().date())).format('DD MMM YYYY')}
        </p>
      </PopoverTrigger>
      <PopoverContent className="w-max border-border p-2">
        <SmallCalendar setMonth={setMonth} setMonthNumber={setMonthNumber} output_month={output_month} monthNumber={monthNumber} />
      </PopoverContent>
    </Popover >
  );
};

export default DatePicker;