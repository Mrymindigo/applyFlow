
"use client";

import { MdOutlineMarkEmailRead } from "react-icons/md";
import { RiVideoOnAiFill } from "react-icons/ri";

import { useApplications } from "@/context/ApplicationsContext";
import {
    getTotalApplications,
    getTotalInterviews,
} from "@/utils/ApplicationStats";

export default function ApplicationStatics() {
    const { applications } = useApplications();

    const totalApplications =
        getTotalApplications(applications);

    const totalInterviews =
        getTotalInterviews(applications);

    return (
        <div className="flex gap-4 w-full h-full justify-center items-center rounded-3xl shadow-[0_8px_30px_rgba(139,92,246,0.18)] result-box-gradient">

            {/* Total Applications */}
            <div className="flex flex-col gap-4 items-center">
                <div className="flex items-center justify-center bg-[#76a9b0] rounded-full w-[60px] h-[60px]">
                    <MdOutlineMarkEmailRead size={36} />
                </div>

                <div className="flex flex-col gap-2 items-center">
                    <span className="text-6xl font-bold text-text-primary">
                        {totalApplications}
                    </span>

                    <span className="text-xs text-text-secondary">
                        Total jobs applied
                    </span>
                </div>
            </div>

            {/* Total Interviews */}
            <div className="flex flex-col gap-4 items-center">
                <div className="flex items-center justify-center bg-[#f1ad54] rounded-full w-[60px] h-[60px]">
                    <RiVideoOnAiFill size={36} />
                </div>

                <div className="flex flex-col gap-2 items-center">
                    <span className="text-6xl font-bold text-text-primary">
                        {totalInterviews}
                    </span>

                    <span className="text-xs text-text-secondary">
                        Interviewed
                    </span>
                </div>
            </div>

        </div>
    );
}
