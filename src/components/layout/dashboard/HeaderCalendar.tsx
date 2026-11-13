
"use client";

import { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { FiCalendar, FiChevronDown } from "react-icons/fi";
import "react-day-picker/style.css";

export default function HeaderCalendar() {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();

    useEffect(() => {
        setSelectedDate(new Date());
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Calendar Trigger */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 text-sm text-text-primary shadow-sm transition hover:bg-primary-light"
            >
                <FiCalendar size={18} className="text-primary" />


                <span>
                    {selectedDate
                        ? format(selectedDate, "MMM dd, yyyy", {
                            locale: enUS,
                        })
                        : "Loading..."}
                </span>

                <FiChevronDown
                    size={16}
                    className={`text-text-secondary transition-transform ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            {/* Calendar Popup */}
            {isOpen && (
                <div className="absolute right-0 top-full z-50 mt-2 w-max rounded-xl border border-border bg-surface p-3 shadow-xl">
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        defaultMonth={selectedDate}
                    />

                    <div className="mt-2 flex justify-end border-t border-border pt-2">
                        <button
                            onClick={() => {
                                setSelectedDate(new Date());
                                setIsOpen(false);
                            }}
                            className="rounded-lg px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary-light"
                        >
                            Today
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

