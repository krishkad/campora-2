"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { User } from "@/constants/index.c";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";

const RoleSchema = z.enum([
  "ADMIN",
  "MANAGER",
  "RECEPTIONIST",
  "CHEF",
  "HOUSEKEEPING",
  "MAINTENANCE",
  "EVENT_COORDINATOR",
]);

const editableRowSchema = z.object({
  _id: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string().min(10),
  address: z.string().min(2),
  role: RoleSchema,
  joinedDate: z.date().optional(),
  isActive: z.boolean().optional(),
});

const EditTableModel = ({
  open,
  onOpenChange,
  editableRow,
  handleEditUser,
}: {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  handleEditUser: (value: Partial<User>) => void;
  editableRow: Partial<User>;
}) => {
  const form = useForm<z.infer<typeof editableRowSchema>>({
    resolver: zodResolver(editableRowSchema),
    defaultValues: {
      _id: typeof editableRow._id === "string" ? editableRow._id : "",
      name: editableRow.name,
      email: editableRow.email,
      phone: editableRow.phone,
      address: editableRow.address,
      role: editableRow.role,
    },
  });

  useEffect(() => {
    form.reset({
      _id: typeof editableRow._id === "string" ? editableRow._id : "",
      name: editableRow.name,
      email: editableRow.email,
      phone: editableRow.phone,
      address: editableRow.address,
      role: editableRow.role,
    });
  }, [editableRow, form]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-sm:max-w-[90%] h-max"
        onPointerDown={(e) => {
          e.currentTarget.removeAttribute("aria-hidden");
        }}
      >
        {/* <ScrollArea className='w-full max-sm:max-h-[80vh]'> */}
        <div className="h-max">
          <DialogHeader className="pt-4">
            <DialogTitle>Edit</DialogTitle>
            <DialogDescription>
              Make changes to the selected row. Edited values will update the
              table and cannot be reverted.
            </DialogDescription>
          </DialogHeader>
          <div className="w-full">
            <div className="w-full">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit((user) => {
                    onOpenChange(!open);
                    console.log({ user });
                    handleEditUser(user);
                  })}
                  className="space-y-5"
                >
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
                                type="text"
                                value={field.value}
                                onChange={field.onChange}
                              />
                            </FormControl>
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
                                value={field.value}
                                onChange={field.onChange}
                              />
                            </FormControl>
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
                                value={field.value}
                                onChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        );
                      }}
                    />
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Role</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a verified email to display" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="ADMIN">ADMIN</SelectItem>
                                <SelectItem value="MANAGER">MANAGER</SelectItem>
                                <SelectItem value="CHEF">CHEF</SelectItem>
                                <SelectItem value="RECEPTIONIST">
                                  RECEPTIONIST
                                </SelectItem>
                                <SelectItem value="HOUSEKEEPING">
                                  HOUSEKEEPING
                                </SelectItem>
                                <SelectItem value="MAINTENANCE">
                                  MAINTENANCE
                                </SelectItem>
                                <SelectItem value="EVENT_COORDINATOR">
                                  EVENT_COORDINATOR
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Input
                              value={field.value}
                              onChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      );
                    }}
                  />
                  <div className="w-full flex items-center justify-end">
                    <Button
                      className="text-white hover:text-white bg-blue-600 hover:bg-blue-500"
                      type="submit"
                    >
                      Save Changes
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
        {/* </ScrollArea> */}
      </DialogContent>
    </Dialog>
  );
};

export default EditTableModel;
