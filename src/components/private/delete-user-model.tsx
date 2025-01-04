"use client";

import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '../ui/button';
import { User } from '@/constants/index.c';

const DeleteUserModel = ({
    open,
    onOpenChange,
    user
}: {
    open: boolean,
    onOpenChange: (value: boolean) => void,
    user: Partial<User>
}) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className='max-sm:max-w-[90%]'>
                <DialogHeader className='pt-4'>
                    <DialogTitle>
                        Do your really want to delete {user.name}?
                    </DialogTitle>
                    <DialogDescription/>
                </DialogHeader>
                <div className="w-full flex items-center justify-between">
                    <Button variant={'outline'} onClick={() => onOpenChange(!open)}>
                        No
                    </Button>
                    <Button variant={'destructive'} onClick={() => onOpenChange(!open)}>
                        Yes Delete
                    </Button>
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default DeleteUserModel