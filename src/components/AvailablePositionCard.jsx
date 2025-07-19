import Link from "next/link";
import { Button } from "./ui/button";

export default function AvailablePositionCard({ data }) {
    return (
        <div className="p-4 bg-card border dark:border-neutral-800 border-neutral-300 rounded-lg flex flex-col relative overflow-hidden isolate">
            <div className="absolute bg -bottom-[120px] w-[140%] h-[200px] left-1/2 -translate-x-1/2 rounded-[100%] bg-radial from-0% from-sky-300/10 to-50% to-transparent -z-10"></div>
            <h5 className="mb-2 font-semibold">{data.title}</h5>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                {data.description
                    ? data.description
                    : "No description provided."}
            </p>

            <Button
                className="mt-auto rounded"
                variant="outline"
                size="sm"
                asChild
            >
                <Link href={`/join/${data.id}?title=${data.title}`}>Apply</Link>
            </Button>
        </div>
    );
}
