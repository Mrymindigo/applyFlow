
"use client";

import { useApplications } from "@/context/ApplicationsContext";
import Title from '@/components/layout/Title'
import {
    getTotalApplications,
    getTotalInterviews,
} from "@/utils/ApplicationStats";
import { VscImportant } from "react-icons/vsc";

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

function JobAppliedChart() {
    const { applications } = useApplications();

    const totalApplications = getTotalApplications(applications);
    const totalInterviews = getTotalInterviews(applications);

    const noInterviewCount = totalApplications - totalInterviews;

    const percentage = totalApplications
        ? Math.round((totalInterviews / totalApplications) * 100)
        : 0;

    const data = [
        { name: "Interview", value: totalInterviews, color: "#A78BFA" },
        { name: "No Interview", value: noInterviewCount, color: "#BFDBFE" },
    ];

    return (
        // <div className="flex flex-col items-center justify-center gap-3 w-full h-full bg-background shadow-[0_8px_30px_rgba(139,92,246,0.18)] p-2 rounded-3xl">
        //     {/* Chart */}
        //     <div className="relative w-full h-[170px]">
        //         <ResponsiveContainer width="100%" height="100%">
        //             <PieChart>
        //                 <Pie
        //                     data={data}
        //                     dataKey="value"
        //                     innerRadius={65}
        //                     outerRadius={85}
        //                     paddingAngle={3}
        //                     stroke="none"
        //                 >
        //                     {data.map((item) => (
        //                         <Cell key={item.name} fill={item.color} />
        //                     ))}
        //                 </Pie>

        //                 <Tooltip />
        //             </PieChart>
        //         </ResponsiveContainer>

        //         {/* Center Text */}
        //         <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        //             <span className="text-3xl font-bold text-text-primary">
        //                 {percentage}%
        //             </span>
        //             <span className="text-xs text-text-secondary">
        //                 Interview Rate
        //             </span>
        //         </div>
        //     </div>

        //     {/* Legend */}
        //     <div className="flex gap-3 w-full px-4 items-center justify-center">
        //         {data.map((item) => (
        //             <div key={item.name} className="flex items-center gap-2 text-sm">
        //                 <span
        //                     className="w-3 h-3 rounded-full"
        //                     style={{ backgroundColor: item.color }}
        //                 />

        //                 <span className="text-text-secondary text-xs">
        //                     {item.name}:
        //                 </span>

        //                 <span className="font-semibold text-text-primary">
        //                     {item.value}
        //                 </span>
        //             </div>
        //         ))}
        //     </div>

        // </div>

        <div className="flex flex-col gap-4 w-full h-full bg-background shadow-[0_8px_30px_rgba(139,92,246,0.18)] px-4 py-2 rounded-3xl">
          <Title title=" job applied" />
            <div className="flex flex-col items-center justify-center gap-3 ">
                {/* Chart */}
                <div className="relative w-full h-[170px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="value"
                                innerRadius={65}
                                outerRadius={85}
                                paddingAngle={3}
                                stroke="none"
                            >
                                {data.map((item) => (
                                    <Cell key={item.name} fill={item.color} />
                                ))}
                            </Pie>

                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>

                    {/* Center Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="text-3xl font-bold text-text-primary">
                            {percentage}%
                        </span>
                        <span className="text-xs text-text-secondary">
                            Interview Rate
                        </span>
                    </div>
                </div>

                {/* Legend */}
                <div className="flex gap-3 w-full px-4 items-center justify-center">
                    {data.map((item) => (
                        <div key={item.name} className="flex items-center gap-2 text-sm">
                            <span
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: item.color }}
                            />

                            <span className="text-text-secondary text-xs">
                                {item.name}:
                            </span>

                            <span className="font-semibold text-text-primary">
                                {item.value}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default JobAppliedChart;
