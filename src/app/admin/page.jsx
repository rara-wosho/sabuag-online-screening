import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center">
            <p className="text-3xl mb-1">Coming Soon 🚀</p>
            <p className="text-base text-neutral-600 dark:text-neutral-400 text-center max-w-2xl">
                We’re still working on this page to give you the best
                experience. In the meantime, you can check out our other
                sections.
            </p>

            <div className="grid grid-cols-2 mt-3 gap-2">
                <Button variant="outline" asChild>
                    <Link href="/admin/applications">
                        Applications <ChevronRight />{" "}
                    </Link>
                </Button>
                <Button variant="outline" asChild>
                    <Link href="/admin/positions">
                        Positions <ChevronRight />{" "}
                    </Link>
                </Button>
            </div>
        </div>
    );
}
