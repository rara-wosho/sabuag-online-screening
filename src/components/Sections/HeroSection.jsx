import { BookOpenText, Mail, UsersRound } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <div className="min-h-screen w-full mx-auto flex flex-col items-center justify-center px-3 lg:px-0 overflow-hidden relative isolate pt-[3rem]">
            <p className="z-10 text-4xl md:text-5xl lg:text-6xl mb-4 max-w-4xl font-bold tracking-wider text-center gradient-text relative">
                {/* badge  */}
                <span className="mb-3 py-1.5 px-3  bg-accent/50 dark:bg-accent rounded-full text-xs text-accent-foreground absolute -top-13 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 whitespace-nowrap shadow font-semibold">
                    Sabuag Publication <BookOpenText size={12} />
                </span>
                Sustainable and Achievable Broadcasting with Unbiased and
                Attainable Goals
            </p>

            <p className="text-center text-lg text-neutral-600 dark:text-neutral-300/80">
                Journalism can never be silent: that is its greatest virtue and
                its greatest fault.
            </p>

            <div className="grid grid-cols-2 mb-6 rounded-lg md:p-2 gap-x-2 w-full max-w-[400px] mt-8 px-4 md:px-0 relative">
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
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3">
                    <Image
                        width={28}
                        height={28}
                        src="/photoID.jpeg"
                        className="object-contain rounded-full"
                        alt="avatar"
                    />
                    <p className="text-sm md:text-base text-center text-neutral-600 dark:text-neutral-400 whitespace-nowrap">
                        Developed by{" "}
                        <span className="text-neutral-700 dark:text-neutral-300 font-semibold">
                            Israel De Vera
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
