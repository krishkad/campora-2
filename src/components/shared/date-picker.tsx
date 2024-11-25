"use client";

import React, { memo, useEffect, useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import dayjs, { Dayjs } from 'dayjs';
import { cn, deserializeMonth, excludeDisabledWeek, getCurrentDay, getMonth } from '@/lib/utils';
import { Calendar1Icon, ChevronLeft, ChevronRight } from 'lucide-react';
import { dayHeader } from '@/constants/index.c';
import { Button, buttonVariants } from '../ui/button';

const SmallCalendar = memo(({ }: { defaultDate?: number }) => {




  const [month, setMonth] = useState<string[][]>(getMonth());
  const [monthNumber, setMonthNumber] = useState<number>(1);
  const output_month = deserializeMonth(month);


  useEffect(() => {
    setMonthNumber(new Date().getMonth());
    setMonth(getMonth());
  }, [])




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
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Button size={'icon'} variant={'outline'} onClick={() => {
              setMonthNumber((prev) => prev - 1)
              setMonth(getMonth(monthNumber - 1))
            }}>
              <ChevronLeft className='w-4 h-4' />
            </Button>
            <div className="flex justify-center items-center gap-2">
              <p className="text-sm font-medium">{dayjs(new Date(dayjs().year(), monthNumber, dayjs().date())).format("DD MMM YYYY")}</p>
              {/* <p className="text-sm font-semibold"></p> */}
            </div>
            <Button size={'icon'} variant={'outline'} onClick={() => {
              setMonthNumber((prev) => prev + 1)
              setMonth(getMonth(monthNumber + 1))
            }}>
              <ChevronRight className='w-4 h-4' />
            </Button>
          </div>
          <div className={cn("", excludeDisabledWeek(output_month)?.lastRow ? "grid grid-cols-7 grid-rows-7 gap-0.5 " : "grid grid-cols-7 grid-rows-6 gap-0.5 ")}>
            {dayHeader.map((day, i) => {
              return <div className="aspect-square w-8 bg-secondary flex items-center justify-center text-xs font-medium rounded-md" key={i}>
                {day.Label.slice(0, 1)}
              </div>
            })}
            {excludeDisabledWeek(output_month)?.month.map((row: Dayjs[]) => {
              return row.map((day: Dayjs, i: number) => {
                return <Button
                  variant={'ghost'}
                  className={cn("aspect-square w-8 h-8 hover:bg-secondary flex items-center justify-center text-xs font-medium rounded-md", getCurrentDay(day) && 'bg-primary text-white')}
                  key={i}
                  disabled={
                    new Date(day.toISOString()).getMonth() > new Date(dayjs().year(), monthNumber).getMonth() || new Date(day.toISOString()).getMonth() < new Date(dayjs().year(), monthNumber).getMonth()
                  }
                  onClick={() => {
                    // dispatch(changeMonthNumber(smallCalendarMonthNumber));
                    // dispatch(changeMonth(getMonth(smallCalendarMonthNumber)));

                  }}
                >
                  {day.format('D')}
                </Button>
              })
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
});

export default SmallCalendar;