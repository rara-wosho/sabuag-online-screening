import { createClient } from "@/utils/supabase/server";
import OverviewCard from "./OverviewCard";
import PrimaryLabel from "../ui/PrimaryLabel";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default async function DashboardOverview() {
    const db = await createClient();

    const { data, error } = await db.from("applicants").select("status");

    if (error) {
        throw new Error("Unable to fetch applicant's data.");
    }

    const pending = data.filter((d) => d.status === "Pending");
    const done = data.filter((d) => d.status === "Done");
    const accepted = data.filter((d) => d.status === "Accepted");
    const rejected = data.filter((d) => d.status === "Rejected");

    return (
        <div>
            <div className="flex items-center">
                <PrimaryLabel>Applicants Overview</PrimaryLabel>
                <Button variant="outline" size="sm" asChild>
                    <Link href="/admin/applications" className="mb-4 ms-auto">
                        View All <ChevronRight />
                    </Link>
                </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
                <OverviewCard status="Pending" data={pending} />
                <OverviewCard status="Done" data={done} />
                <OverviewCard status="Accepted" data={accepted} />
                <OverviewCard status="Rejected" data={rejected} />
            </div>
        </div>
    );
}
