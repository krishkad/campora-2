"use client";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import useFetchData from "@/hooks/use-fetchdata";
import { ICampsite } from "@/database/models/campsites";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "../ui/skeleton";

const campsiteSchema = z.object({
  camp_name: z.string().optional(),
  camp_description: z.string().optional(),
  total_camps: z.number(),
  capacity_per_camp: z.number(),
  camp_price_without_meal: z.number(),
  non_veg_price: z.number(),
  veg_price: z.number(),
});

const CampsiteForm = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const form = useForm<z.infer<typeof campsiteSchema>>({
    resolver: zodResolver(campsiteSchema),
    defaultValues: {
      camp_name: "",
      camp_description: "",
      total_camps: 6,
      capacity_per_camp: 5,
      camp_price_without_meal: 300,
      non_veg_price: 100,
      veg_price: 50,
    },
  });

  const toggleEditMode = () => setIsDisabled(!isDisabled);
  const { toast } = useToast();
  const {
    data,
    loading,
    error,
  }: { data: null | ICampsite; loading: boolean; error: string | null } =
    useFetchData("/api/campsites");

  useEffect(() => {
    if (data && error === null && !loading) {
      form.reset({
        camp_name: data?.camp_name,
        camp_description: data?.camp_description,
        total_camps: data?.total_camps,
        capacity_per_camp: data.capacity_per_camp,
        camp_price_without_meal: data.camp_price_without_meal,
        non_veg_price: data.non_veg_price,
        veg_price: data.veg_price,
      });
    }
    if (error && !loading) {
      toast({
        title: "failed to fetch campsite",
        description: error,
      });
    }
  }, [data, error, loading]);

  return (
    <div className="w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(async (data) => {
            try {
              const response = await fetch("/api/campsites", {
                method: "POST",
                body: JSON.stringify(data),
              });

              if (response.ok) {
                const json = await response.json();
                toggleEditMode();
                if (json.success && json.data) {
                  toast({
                    title: "Campsite sucessfully updated",
                  });

                  form.reset({
                    camp_name: json.data?.camp_name,
                    camp_description: json.data?.camp_description,
                    total_camps: json.data?.total_camps,
                    capacity_per_camp: json.data.capacity_per_camp,
                    camp_price_without_meal: json.data.camp_price_without_meal,
                    non_veg_price: json.data.non_veg_price,
                    veg_price: json.data.veg_price,
                  });
                }
                if (!json.success) {
                  toast({
                    title: "Failed to update campsite",
                    description: json.message,
                  });
                }
              }
            } catch (error: any) {
              console.log("error while updating campsites");
              toast({
                title: "error while updating campistes",
                variant: "destructive",
              });
            }
          })}
          className="w-full space-y-5"
        >
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="camp_name"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Camp Name</FormLabel>
                    <FormControl>
                      {!loading ? (
                        <Input
                          placeholder="Camp Name"
                          {...field}
                          readOnly={isDisabled}
                        />
                      ) : (
                        <Skeleton className="h-9 w-full" />
                      )}
                    </FormControl>
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="camp_description"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      {!loading ? (
                        <Input
                          placeholder="Description"
                          {...field}
                          readOnly={isDisabled}
                        />
                      ) : (
                        <Skeleton className="h-9 w-full" />
                      )}
                    </FormControl>
                  </FormItem>
                );
              }}
            />
            <div className="w-full grid grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="total_camps"
                disabled={isDisabled}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Total Camps</FormLabel>
                      <FormControl>
                        {!loading ? (
                          <Input
                            placeholder="Total Camps"
                            type="number"
                            value={field.value}
                            readOnly={field.disabled}
                            onChange={(e) => {
                              const value = e.target.value
                                ? parseInt(e.target.value, 10)
                                : "";
                              field.onChange(value);
                            }}
                          />
                        ) : (
                          <Skeleton className="h-9 w-full" />
                        )}
                      </FormControl>
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form.control}
                name="capacity_per_camp"
                disabled={isDisabled}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Capacity per Camp</FormLabel>
                      <FormControl>
                        {!loading ? (
                          <Input
                            placeholder="Capacity"
                            type={"number"}
                            readOnly={field.disabled}
                            value={field.value}
                            onChange={(e) => {
                              const value = e.target.value
                                ? parseInt(e.target.value, 10)
                                : "";

                              field.onChange(value);
                            }}
                          />
                        ) : (
                          <Skeleton className="h-9 w-full" />
                        )}
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
            </div>

            <FormField
              control={form.control}
              name="camp_price_without_meal"
              disabled={isDisabled}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Camp Price Without Meal</FormLabel>
                    <FormControl>
                      {!loading ? (
                        <Input
                          type="number"
                          placeholder="Price"
                          readOnly={field.disabled}
                          value={field.value}
                          onChange={(e) => {
                            const value = e.target.value
                              ? parseInt(e.target.value, 10)
                              : "";

                            field.onChange(value);
                          }}
                        />
                      ) : (
                        <Skeleton className="h-9 w-full" />
                      )}
                    </FormControl>
                  </FormItem>
                );
              }}
            />
            <div className="w-full grid grid-cols-2  gap-5">
              <FormField
                control={form.control}
                name="non_veg_price"
                disabled={isDisabled}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Non-Veg Price</FormLabel>
                      <FormControl>
                        {!loading ? (
                          <Input
                            type="number"
                            placeholder="non-veg cost"
                            value={field.value}
                            readOnly={field.disabled}
                            onChange={(e) => {
                              const value = e.target.value
                                ? parseInt(e.target.value, 10)
                                : "";
                              field.onChange(value);
                            }}
                          />
                        ) : (
                          <Skeleton className="h-9 w-full" />
                        )}
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="veg_price"
                disabled={isDisabled}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Veg Price</FormLabel>
                      <FormControl>
                        {!loading ? (
                          <Input
                            type="number"
                            placeholder="veg cost"
                            value={field.value}
                            readOnly={field.disabled}
                            onChange={(e) => {
                              const value = e.target.value
                                ? parseInt(e.target.value, 10)
                                : "";
                              field.onChange(value);
                            }}
                          />
                        ) : (
                          <Skeleton className="h-9 w-full" />
                        )}
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
            </div>
          </div>

          <div className="w-full flex justify-between items-center">
            {isDisabled ? (
              <Button variant={"outline"} onClick={toggleEditMode}>
                Edit
              </Button>
            ) : (
              <Button
                variant={"outline"}
                type="reset"
                onClick={() => form.reset()}
              >
                Reset
              </Button>
            )}
            {!isDisabled && (
              <Button
                type="submit"
                className={cn(
                  "ml-auto",
                  "bg-blue-600 text-white hover:bg-blue-500 hover:text-white"
                )}
              >
                Save
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CampsiteForm;
