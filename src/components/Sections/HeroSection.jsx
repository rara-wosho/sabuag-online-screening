import { BookOpenText, Mail, UsersRound } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <div className="min-h-screen bg-[url('/sabuag-team.jpeg')] bg-cover bg-center w-full mx-auto flex flex-col items-center justify-center px-3 lg:px-0 overflow-hidden relative isolate after:absolute after:bg-gradient-to-b after:from-background/80 dark:after:from-background/90 after:to-background after:inset-0 after:-z-10">
            <p className="z-10 text-4xl md:text-5xl mb-4 max-w-4xl font-semibold tracking-wider text-center text-neutral-800 dark:text-neutral-200 relative">
                <span className="mb-3 py-1.5 px-2.5 border border-accent-foreground bg-accent/50 dark:bg-accent rounded-full text-xs text-accent-foreground absolute -top-13 left-1/2 -translate-x-1/2 inline-flex items-center gap-2">
                    Campus Publication <BookOpenText size={12} />
                </span>
                Sustainable and Achievable Broadcasting with Unbiased and
                Attainable Goals
            </p>

            <p className="text-center text-lg text-neutral-600 dark:text-neutral-300/90">
                Journalism can never be silent: that is its greatest virtue and
                its greatest fault.
            </p>

            <div className="grid grid-cols-2 md:border mb-6 dark:border-neutral-800 rounded-lg md:p-2 gap-x-2 w-full max-w-[400px] mt-8 px-4 md:px-0">
                <Button asChild className="text-sm cursor-pointer">
                    <Link href="/join" className="flex items-center gap-2">
                        Join the Team <UsersRound />
                    </Link>
                </Button>
                <Button
                    className="text-sm cursor-pointer flex items-center gap-2"
                    variant="outline"
                >
                    Follow Our Page
                </Button>
            </div>

            <p>30+ Members</p>
        </div>
    );
}
