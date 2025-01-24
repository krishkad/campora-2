"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, FormField, FormItem, FormLabel, Form } from "../ui/form";
import { Input } from "../ui/input";
import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import useFetchData from "@/hooks/use-fetchdata";
import { IHoliday } from "@/constants/index.c";
import { useToast } from "@/hooks/use-toast";
import { Label } from "../ui/label";

const holidaySchema = z.object({
  holiday_name: z.string().min(2),
  holiday_description: z.string(),
  start_date: z.date(),
  end_date: z.date(),
  no_of_dayjs: z.array(z.date()),
});

const Settings = () => {
  const [holidays, setHolidays] = useState<IHoliday[] | null>();
  const form = useForm<z.infer<typeof holidaySchema>>({
    resolver: zodResolver(holidaySchema),
    defaultValues: {
      holiday_name: "",
      holiday_description: "",
      start_date: undefined,
      end_date: undefined,
    },
  });
  const { toast } = useToast();

  const {
    data,
    loading,
    error,
  }: { data: IHoliday[] | null; loading: boolean; error: string | null } =
    useFetchData("/api/holidays");

  useEffect(() => {
    if (!loading || data !== null) {
      setHolidays(data as IHoliday[]);
    }

    if (!loading || error !== null) {
      toast({
        title: error as string,
      });
    }
  }, [data]);

  console.log({ holidays });

  return (
    <div className="max-w-4xl mx-auto">
      <div className="w-full space-y-5">
        <Card>
          <CardHeader>
            <CardTitle>Resort Holidays</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(() => {})}>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <FormField
                    control={form.control}
                    name="holiday_name"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Holiday Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="eg. maintanance break, annual vacation"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      );
                    }}
                  />

                  <FormField
                    control={form.control}
                    name="holiday_description"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>
                            Holiday Description{" "}
                            <span className="text-muted-foreground">
                              (optional)
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="descriptioin" {...field} />
                          </FormControl>
                        </FormItem>
                      );
                    }}
                  />

                  <FormField
                    control={form.control}
                    name="start_date"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Start Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date < new Date() ||
                                  date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="end_date"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>End Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date < new Date() ||
                                  date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </FormItem>
                      );
                    }}
                  />
                </div>
                <div className="w-full flex items-center justify-end  mt-5">
                  <Button type="submit">Create</Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
        {holidays && (
          <>
            {holidays.map((holi) => {
              return (
                <Card key={holi._id}>
                  <CardHeader>
                    <CardTitle>{holi.holiday_name}</CardTitle>
                    {holi.holiday_description && (
                      <CardDescription>
                        {holi.holiday_description}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="w-full space-y-0.5">
                        <Label>Start Date</Label>
                        <p className="font-medu">
                          {format(holi.start_date, "dd MMM yyyy")}
                        </p>
                      </div>
                      <div className="w-full space-y-0.5">
                        <Label>End Date</Label>
                        <p className="font-medu">
                          {format(holi.end_date, "dd MMM yyyy")}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Settings;
