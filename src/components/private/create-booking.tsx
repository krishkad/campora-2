"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button, buttonVariants } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { addDays, format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, PlusIcon, SquareDotIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Booking } from "@/constants/index.c";
import { v4 as uuidv4 } from "uuid";

const BookingSchema = z.object({
  name: z.string().min(2, "Name must have at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must have at least 10 digits"),
  address: z.string().min(2, "Address must have at least 2 characters"),
  checkInAndOutDate: z.object({
    from: z.date(),
    to: z.date(),
  }),
  numberOfGuests: z.number().min(1, "At least one guest required"),
  numberOfKids: z.number().optional().default(0),
  message: z.string().optional(),
  specialRequests: z.string().optional(),
  amount: z.number().optional(),
  food: z.enum(["Veg", "Non-Veg"]),
  createdAt: z.date(),
});

const CreateBooking = ({
  handleCreateBooking,
}: {
  handleCreateBooking: (value: Partial<Booking>) => void;
}) => {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof BookingSchema>>({
    resolver: zodResolver(BookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      checkInAndOutDate: { from: new Date(), to: addDays(new Date(), 1) },
      numberOfGuests: 2,
      numberOfKids: 0,
      message: "",
      specialRequests: "",
      amount: 0,
      food: "Veg",
      createdAt: new Date(),
    },
  });

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
        form.reset();
      }}
    >
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(!open)}>
          <PlusIcon className="w-4 h-4 shrink-0 inilne mr-0.5" />
          <span className="max-sm:hidden"> Create Booking</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-sm:max-w-[90%] h-max max-w-2xl">
        <ScrollArea className="w-full max-h-[92svh]">
          <div className="w-full h-max px-1">
            <DialogHeader>
              <DialogTitle className="focus:border-none focus-visible:ring-0">
                Create Booking
              </DialogTitle>
              <DialogDescription>
                Fill Guest Information and Book on behave of Your Guest
              </DialogDescription>
            </DialogHeader>
            <div className="w-full mt-4">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit((data) => {
                    const randomId = uuidv4();
                    handleCreateBooking({
                      // _id: randomId,
                      name: data.name,
                      email: data.email,
                      phone: data.phone,
                      address: data.address,
                      checkInAndOutDate: {
                        form: data.checkInAndOutDate.from,
                        to: data.checkInAndOutDate.to,
                      },
                      numberOfGuests: data.numberOfGuests,
                      numberOfKids: data.numberOfKids,
                      message: data.message,
                      specialRequests: data.specialRequests,
                      amount: data.amount,
                      foodPreference: data.food,
                      createdAt: new Date().toISOString(),
                      paymentStatus: "Pending",
                      bookingStatus: "Pending",
                    });
                    form.reset();
                    setOpen(false);
                  })}
                  className="space-y-5 mx-auto"
                >
                  <div className="w-full space-y-5">
                    <FormField
                      control={form.control}
                      name="checkInAndOutDate"
                      render={({ field }) => {
                        return (
                          <FormItem className="flex flex-col gap-1">
                            <FormLabel>Check In and Out Date</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    id="date"
                                    variant={"outline"}
                                    className={cn(
                                      "w-full justify-start text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    <CalendarIcon />
                                    {field.value?.from ? (
                                      field.value.to ? (
                                        <>
                                          {format(
                                            field.value.from,
                                            "LLL dd, y"
                                          )}{" "}
                                          -{" "}
                                          {format(field.value.to, "LLL dd, y")}
                                        </>
                                      ) : (
                                        format(
                                          new Date(field.value.from),
                                          "LLL dd, y"
                                        )
                                      )
                                    ) : (
                                      <span>Pick a date</span>
                                    )}
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent
                                className="z-60 w-auto p-0 pointer-events-auto"
                                align="start"
                              >
                                <Calendar
                                  className="z-60"
                                  initialFocus
                                  mode="range"
                                  defaultMonth={field.value?.from}
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  numberOfMonths={2}
                                  disabled={(date) => date < new Date()}
                                  // {...field}
                                />
                              </PopoverContent>
                            </Popover>
                          </FormItem>
                        );
                      }}
                    />
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter Guest Name"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter Guest Email"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Phone</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter Guest Phone No."
                                  {...field}
                                  type="number"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Address</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter Guest Address"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="numberOfGuests"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>No. of Guest</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter No. of Guest"
                                  type="number"
                                  value={field.value || ""}
                                  onChange={(e) => {
                                    // Convert the value to a number before updating the form state
                                    const value = e.target.value
                                      ? parseInt(e.target.value, 10)
                                      : "";
                                    field.onChange(value);
                                  }}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="numberOfKids"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>No. of Kids</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter No. of Kids"
                                  type="string"
                                  value={field.value.toString() || ""}
                                  onChange={(e) => {
                                    // Convert the value to a number before updating the form state
                                    const value = e.target.value
                                      ? parseInt(e.target.value, 10)
                                      : 0;
                                    field.onChange(value);
                                  }}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                    </div>
                    <div className="w-full space-y-5 grid-cols-1 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="food"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Food</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="w-3/4 md:w-1/2 grid grid-cols-2 gap-4"
                                >
                                  <div>
                                    <RadioGroupItem
                                      value="Veg"
                                      id="Veg"
                                      className="peer sr-only"
                                    />
                                    <Label
                                      htmlFor="Veg"
                                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                    >
                                      <SquareDotIcon className="mb-3 h-6 w-6 text-green-600" />
                                      Veg
                                    </Label>
                                  </div>
                                  <div>
                                    <RadioGroupItem
                                      value="Non-Veg"
                                      id="Non-Veg"
                                      className="peer sr-only"
                                    />
                                    <Label
                                      htmlFor="Non-Veg"
                                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                    >
                                      <SquareDotIcon className="mb-3 h-6 w-6 text-red-500" />
                                      Non-Veg
                                    </Label>
                                  </div>
                                </RadioGroup>
                              </FormControl>
                            </FormItem>
                          );
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="amount"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Amount</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Amount"
                                  value={field.value || ""}
                                  onChange={(e) => {
                                    const value = parseInt(e.target.value, 10);
                                    field.onChange(value);
                                  }}
                                />
                              </FormControl>
                              <FormDescription>
                                Leave it blank to autofill, according to food
                                Preference and camp price set
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Message"
                                  className="resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="specialRequests"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Special Reguests</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Eg. Birthday decoration, Cake, etc"
                                  className="resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-full flex max-sm:flex-col items-center justify-between gap-3">
                    <Button
                      type="reset"
                      variant={"outline"}
                      onClick={() => form.reset()}
                      className="max-sm:w-full"
                    >
                      Reset
                    </Button>
                    <Button type="submit" className="max-sm:w-full">
                      Book
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBooking;
