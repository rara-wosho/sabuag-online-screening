import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div>
            <Skeleton className="rounded h-5 w-28 mb-4" />
            <Skeleton className="rounded h-8 w-48 mb-3" />
            <Skeleton className="rounded h-4 w-80 mb-4" />
        </div>
    );
}
