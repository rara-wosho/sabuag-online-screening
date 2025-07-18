import Link from "next/link";
import { Button } from "./ui/button";

export default function AvailablePositionCard({ data }) {
    return (
        <div className="p-4 bg-card border rounded-lg flex flex-col">
            <h5 className="mb-2 font-semibold">{data.title}</h5>

            <p className="text-sm text-neutral-400 mb-4">
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
