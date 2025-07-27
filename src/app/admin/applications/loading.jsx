import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="flex flex-col min-h-[70vh]">
            {/* <div className="size-7 border-y-2 rounded-full animate-spin border-white"></div> */}
            <div className="flex flex-col gap-y-2">
                <Skeleton className="h-6 w-32 mb-2 rounded" />
                <Skeleton className="h-8 w-full rounded" />
                <Skeleton className="h-8 w-full rounded" />
            </div>
        </div>
    );
}
