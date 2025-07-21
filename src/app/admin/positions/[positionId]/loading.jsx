import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div>
            <Skeleton className="rounded h-10 w-48 mb-3" />
            <Skeleton className="rounded h-5 w-72 mb-4" />
        </div>
    );
}
