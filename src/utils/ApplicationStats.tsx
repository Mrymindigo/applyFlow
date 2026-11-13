
import type { Applications } from "@/context/ApplicationsContext";

export function getTotalApplications(
    applications: Applications[]
) {
    return applications.length;
}

export function getTotalInterviews(
    applications: Applications[]
) {
    return applications.filter(
        (app) => app.status === "Interview"
    ).length;
}
