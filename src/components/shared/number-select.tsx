"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const NumberSelect = ({
  placeHolder,
  selectValueClassName,
  numberOfGuest,
  setNumberOfGuest,
}: {
  placeHolder?: string;
  selectValueClassName?: string;
  numberOfGuest: number;
  setNumberOfGuest: (value: number) => void;
}) => {
  return (
    <div className="grid w-full max-w-40 items-center gap-1.5 bg-white">
      <Select
        onValueChange={(value) => {
          const val = parseInt(value);
          setNumberOfGuest(val);
        }}
      >
        <SelectTrigger className={cn("w-full", selectValueClassName)}>
          <SelectValue
            className={cn("bg-white")}
            placeholder={numberOfGuest ?? placeHolder}
            defaultValue={numberOfGuest}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>
          <SelectItem value="4">4</SelectItem>
          <SelectItem value="5">5</SelectItem>
          <SelectItem value="6">6</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default NumberSelect;
