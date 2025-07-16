import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div>
            <Skeleton className="rounded h-6 w-48 mb-4" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
            </div>
        </div>
    );
}
