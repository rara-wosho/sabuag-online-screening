import DashboardOverview from "@/components/dashboard/DashboardOverview";
import MembersOverview from "@/components/dashboard/MembersOverview";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default function Page() {
    return (
        <div className="flex flex-col gap-y-5">
            <Suspense fallback={<OverviewSkeleton />}>
                <DashboardOverview />
            </Suspense>
            <Suspense fallback={<MembersSkeleton />}>
                <MembersOverview />
            </Suspense>
        </div>
    );
}

function OverviewSkeleton() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <Skeleton className="w-full h-16" />
            <Skeleton className="w-full h-16" />
            <Skeleton className="w-full h-16" />
            <Skeleton className="w-full h-16" />
        </div>
    );
}
function MembersSkeleton() {
    return (
        <div className="flex flex-col gap-1.5">
            <Skeleton className="w-full h-9 rounded-0" />
            <Skeleton className="w-full h-9 rounded-0" />
            <Skeleton className="w-full h-9 rounded-0" />
            <Skeleton className="w-full h-9 rounded-0" />
        </div>
    );
}
