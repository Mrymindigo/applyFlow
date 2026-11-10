

// 


import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

type Application = {
    id: number;
    company: string;
    status: "Applied" | "Interview" | "Rejected";
};

type Props = {
    applications: Application[];
};

function JobAppliedChart({ applications = [] }: Props) {
    const interviewCount = applications.filter(
        (app) => app.status === "Interview"
    ).length;

    const noInterviewCount = applications.length - interviewCount;

    const percentage = applications.length
        ? Math.round((interviewCount / applications.length) * 100)
        : 0;

    const data = [
        { name: "Interview", value: interviewCount, color: "#A78BFA" },
        { name: "No Interview", value: noInterviewCount, color: "#BFDBFE" },
    ];

    return (
        <div className="flex flex-col items-center justify-center gap-3 w-full bg-background shadow-[0_8px_30px_rgba(139,92,246,0.18)] p-2 rounded-3xl">

            <div className="relative w-full h-[190px]">
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
                    <div
                        key={item.name}
                        className="flex items-center justify-between text-sm"
                    >
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-2">
                                <span
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: item.color }}
                                />
                                <span className="text-text-secondary text-xs">
                                    {item.name} :
                                </span>
                            </div>

                            <span className="font-semibold text-text-primary">
                                {item.value}
                            </span>
                        </div>


                    </div>
                ))}

            </div>
        </div>
    );
}

export default JobAppliedChart;
