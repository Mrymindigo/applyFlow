
"use client";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function InterviewCalendar() {
    const [date, setDate] = useState(new Date());

    const changeDate = (days: number) => {
        setDate((prevDate) => {
            const newDate = new Date(prevDate);
            newDate.setDate(newDate.getDate() + days);
            return newDate;
        });
    };

    const isToday = date.toDateString() === new Date().toDateString();

    const formattedDate = date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    const weekday = date.toLocaleDateString("en-US", {
        weekday: "long",
    });

    return (
        <div className="flex items-center justify-between gap-4">
            <div className="flex gap-2">
                <p className="text-sm text-text-primary font-bold">
                    {isToday ? "Today" : weekday}
                </p>
                <p className="text-sm text-text-muted font-medium">
                    {formattedDate}
                </p>
            </div>
            <div className="flex items-center gap-1">
                <button
                    onClick={() => changeDate(-1)}
                    aria-label="Previous day"
                    className="flex h-7 w-7 items-center justify-center
          rounded-md text-gray-400 transition hover:bg-gray-100
          hover:text-gray-700"
                >
                    <FiChevronLeft size={15} />
                </button>

                <button
                    onClick={() => changeDate(1)}
                    aria-label="Next day"
                    className="flex h-7 w-7 items-center justify-center
          rounded-md text-gray-400 transition hover:bg-gray-100
          hover:text-gray-700"
                >
                    <FiChevronRight size={15} />
                </button>
            </div>
        </div>
    );
}
