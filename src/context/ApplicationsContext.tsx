
"use client";

import {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from "react";

export type ApplicationStatus =
    | "Applied"
    | "Interview"
    | "Rejected"
    | "Offer";

export interface Applications {
    id: number;
    company: string;
    status: ApplicationStatus;
}

interface ApplicationsContextType {
    applications: Applications[];
    setApplications: React.Dispatch<
        React.SetStateAction<Applications[]>
    >;
}

const ApplicationsContext =
    createContext<ApplicationsContextType | null>(null);

export function ApplicationsProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [applications, setApplications] = useState<Applications[]>([
        { id: 1, company: "Google", status: "Applied" },
        { id: 2, company: "Meta", status: "Interview" },
        { id: 3, company: "Amazon", status: "Applied" },
    ]);

    return (
        <ApplicationsContext.Provider
            value={{ applications, setApplications }}
        >
            {children}
        </ApplicationsContext.Provider>
    );
}

export function useApplications() {
    const context = useContext(ApplicationsContext);

    if (!context) {
        throw new Error(
            "useApplications must be used within ApplicationsProvider"
        );
    }

    return context;
}
