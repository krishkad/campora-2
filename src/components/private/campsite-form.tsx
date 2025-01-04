"use client";
import React, { useState } from 'react'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';


const campsiteSchema = z.object({
    campName: z.string().optional(),
    description: z.string().optional(),
    totalCamps: z.number(),
    pricing: z.object({
        costperNightWithMeal: z.number(),
        costPerNightWithoutMeal: z.number(),
        mealCost: z.object({
            veg: z.number(),
            nonVeg: z.number()
        }).optional()
    }),
    capacityPerCamp: z.number()
});

const CampsiteForm = () => {
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    const form = useForm<z.infer<typeof campsiteSchema>>({
        resolver: zodResolver(campsiteSchema),
        defaultValues: {
            campName: "",
            description: "",
            totalCamps: 6,
            pricing: {
                costperNightWithMeal: 3800,
                costPerNightWithoutMeal: 2500,
                mealCost: {
                    veg: 200,
                    nonVeg: 300
                }
            },
            capacityPerCamp: 4
        }
    });

    const toggleEditMode = () => setIsDisabled(!isDisabled);

    return (
        <div className="w-full">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(() => { })}
                    className='w-full space-y-5'
                >
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField
                            control={form.control}
                            name='campName'
                            render={({ field }) => {
                                return <FormItem>
                                    <FormLabel>Camp Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Camp Name' {...field} readOnly={isDisabled} />
                                    </FormControl>
                                </FormItem>
                            }}
                        />

                        <FormField
                            control={form.control}
                            name='description'
                            render={({ field }) => {
                                return <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Description' {...field} readOnly={isDisabled} />
                                    </FormControl>
                                </FormItem>
                            }}
                        />
                        <div className="w-full grid grid-cols-2 gap-5">


                            <FormField
                                control={form.control}
                                name='totalCamps'
                                disabled={isDisabled}
                                render={({ field }) => {
                                    return <FormItem>
                                        <FormLabel>Total Camps</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder='Total Camps'
                                                type='number'
                                                value={field.value}
                                                readOnly={field.disabled}
                                                onChange={(e) => {
                                                    const value = e.target.value ? parseInt(e.target.value, 10) : ""
                                                    field.onChange(value);
                                                }}

                                            />
                                        </FormControl>
                                    </FormItem>
                                }}
                            />

                            <FormField
                                control={form.control}
                                name='capacityPerCamp'
                                disabled={isDisabled}
                                render={({ field }) => {
                                    return <FormItem>
                                        <FormLabel>Capacity per Camp</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder='Capacity'
                                                type={'number'}
                                                readOnly={field.disabled}
                                                value={field.value}
                                                onChange={(e) => {
                                                    const value = e.target.value ? parseInt(e.target.value, 10) : ''

                                                    field.onChange(value);

                                                }}
                                            />
                                        </FormControl>
                                    </FormItem>
                                }}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name='pricing.costPerNightWithoutMeal'
                            disabled={isDisabled}
                            render={({ field }) => {
                                return <FormItem>
                                    <FormLabel>Camp Price Without Meal</FormLabel>
                                    <FormControl>
                                        <Input
                                            type='number'
                                            placeholder='Price'
                                            readOnly={field.disabled}
                                            value={field.value}
                                            onChange={(e) => {
                                                const value = e.target.value ? parseInt(e.target.value, 10) : ""

                                                field.onChange(value);
                                            }}
                                        />
                                    </FormControl>
                                </FormItem>
                            }}
                        />
                        <div className="w-full grid grid-cols-2  gap-5">
                            <FormField
                                control={form.control}
                                name='pricing.mealCost.nonVeg'
                                disabled={isDisabled}
                                render={({ field }) => {
                                    return <FormItem>
                                        <FormLabel>Non-Veg Price</FormLabel>
                                        <FormControl>
                                            <Input
                                                type='number'
                                                placeholder='non-veg cost'
                                                value={field.value}
                                                readOnly={field.disabled}
                                                onChange={(e) => {
                                                    const value = e.target.value ? parseInt(e.target.value, 10) : "";
                                                    field.onChange(value);
                                                }}
                                            />
                                        </FormControl>
                                    </FormItem>
                                }}
                            />
                            <FormField
                                control={form.control}
                                name='pricing.mealCost.veg'
                                disabled={isDisabled}
                                render={({ field }) => {
                                    return <FormItem>
                                        <FormLabel>Veg Price</FormLabel>
                                        <FormControl>
                                            <Input
                                                type='number'
                                                placeholder='veg cost'
                                                value={field.value}
                                                readOnly={field.disabled}
                                                onChange={(e) => {
                                                    const value = e.target.value ? parseInt(e.target.value, 10) : "";
                                                    field.onChange(value);
                                                }}
                                            />
                                        </FormControl>
                                    </FormItem>
                                }}
                            />
                        </div>
                    </div>

                    <div className="w-full flex justify-between items-center">
                        {isDisabled ? null : <Button
                            variant={"outline"}
                            type='reset'
                            onClick={() => form.reset()}
                        >
                            Reset
                        </Button>
                        }
                        <Button
                            variant={"outline"}
                            className={cn('ml-auto', !isDisabled && "bg-blue-600 text-white hover:bg-blue-500 hover:text-white")}

                            onClick={toggleEditMode}
                        >
                            {isDisabled ? "Edit" : "Save"}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default CampsiteForm