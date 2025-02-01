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
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Form,
  FormDescription,
} from "../ui/form";
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
  holiday_description: z.string().optional(),
  start_date: z.date(),
  end_date: z.date(),
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
    if (!loading && data !== null) {
      setHolidays(data as IHoliday[]);
    }

    if (!loading && error !== null) {
      toast({
        title: error as string,
      });
    }
  }, [data]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="w-full space-y-5">
        <Card>
          <CardHeader>
            <CardTitle>Resort Holidays</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(async (data) => {
                  console.log("handlesubmit");
                  const endDate = new Date(
                    new Date(data.end_date).getFullYear(),
                    new Date(data.end_date).getMonth(),
                    new Date(data.end_date).getDate() + 1
                  );
                  endDate.setUTCHours(23, 59, 59, 999);

                  const startDate = new Date(data.start_date);
                  startDate.setUTCHours(0, 0, 0, 1);
                  try {
                    const response = await fetch("/api/holidays/", {
                      method: "POST",
                      body: JSON.stringify({
                        ...data,
                        end_date: endDate.toISOString(),
                        start_date: startDate.toISOString(),
                      }),
                    });

                    console.log({ endDate, startDate });

                    const result = await response.json();

                    if (result.success) {
                      toast({
                        title: "Holiday created successfully",
                      });
                    }

                    if (!result.success) {
                      toast({
                        title: "failed to create holiday",
                        description: result.message,
                        variant: "destructive",
                      });
                    }
                  } catch (error: any) {
                    console.log(
                      "error while post request holiday: ",
                      error.message
                    );

                    toast({
                      title: "Request failed.",
                      variant: "destructive",
                    });
                  }
                  form.reset();
                })}
              >
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
                                disabled={(date) => {
                                  const today = new Date();
                                  today.setHours(0, 0, 0, 0);
                                  return date < today;
                                }}
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
                                onSelect={(date) => {
                                  if (date === undefined) return;
                                  field.onChange(date);
                                  console.log({ date });
                                }}
                                disabled={(date) => {
                                  const today = new Date();
                                  today.setHours(0, 0, 0, 0);

                                  return date < today;
                                }}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormDescription>
                            Select Last day of holiday.
                          </FormDescription>
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
