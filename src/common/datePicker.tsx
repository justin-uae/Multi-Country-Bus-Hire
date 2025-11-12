"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "../common/button"
import { Calendar } from "../common/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../common/popover"

export function CalendarComponent(props:
  React.HTMLAttributes<HTMLDivElement> & { id: string }
) {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-48 justify-between font-normal"
            aria-controls={props.id}
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start" id={props.id}>
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
