"use client";
import React, { useEffect, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { User } from '@/constants/index.c';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/input';


const editableRowSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    phone: z.string().min(10),
    address: z.string().min(2),
    role: z.string(),
    joinedDate: z.date().optional(),
    isActive: z.boolean().optional()
})


const EditTableModel = ({
    open,
    onOpenChange,
    editableRow
}: {
    open: boolean
    onOpenChange: (value: boolean) => void
    editableRow: Partial<User>
}) => {


    const form = useForm<z.infer<typeof editableRowSchema>>({
        resolver: zodResolver(editableRowSchema),
        defaultValues: {
            id: editableRow.id,
            name: editableRow.name,
            email: editableRow.email,
            phone: editableRow.phone,
            address: editableRow.address,
            role: editableRow.role,
        }
    });


    useEffect(() => {
        form.reset({
            id: editableRow.id,
            name: editableRow.name,
            email: editableRow.email,
            phone: editableRow.phone,
            address: editableRow.address,
            role: editableRow.role,
        });
    }, [editableRow, form]);

    console.log({
        id: editableRow.id,
        name: editableRow.name,
        email: editableRow.email,
        phone: editableRow.phone,
        address: editableRow.address,
        role: editableRow.role,
    })



    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit</DialogTitle>
                    <DialogDescription>
                        Make changes to the selected row. Edited values will update the table and cannot be reverted.
                    </DialogDescription>
                </DialogHeader>
                <div className="w-full">
                    <div className="w-full">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(() => { })}>
                                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">

                                    <FormField
                                        control={form.control}
                                        name='name'
                                        render={({ field }) => {
                                            return <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input type='text' value={field.value} onChange={field.onChange} />
                                                </FormControl>
                                            </FormItem>
                                        }}
                                    />
                                    <FormField
                                        control={form.control}
                                        name='email'
                                        render={({ field }) => {
                                            return <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input value={field.value} onChange={field.onChange} />
                                                </FormControl>
                                            </FormItem>
                                        }}
                                    />
                                    <FormField
                                        control={form.control}
                                        name='phone'
                                        render={({ field }) => {
                                            return <FormItem>
                                                <FormLabel>Phone</FormLabel>
                                                <FormControl>
                                                    <Input value={field.value} onChange={field.onChange} />
                                                </FormControl>
                                            </FormItem>
                                        }}
                                    />
                                    <FormField
                                        control={form.control}
                                        name='role'
                                        render={({ field }) => {
                                            return <FormItem>
                                                <FormLabel>Role</FormLabel>
                                                <FormControl>
                                                    <Input value={field.value} onChange={field.onChange} />
                                                </FormControl>
                                            </FormItem>
                                        }}
                                    />
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default EditTableModel