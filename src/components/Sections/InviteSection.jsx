import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function InviteSection() {
    return (
        <div className="w-full mx-auto  flex flex-col items-center justify-center py-12 rounded-lg px-3 mb-[6rem]">
            <h1 className="text-4xl font-semibold mb-3 text-center">
                Want To Be Part of the{" "}
                <span className="text-accent-foreground">Team?</span>
            </h1>

            <p className="dark:text-slate-300/70 text-center max-w-3xl">
                We are always excited to welcome new voices and fresh ideas.
                Whether you are a writer, artist, photographer, or just curious
                to learn, there is a place for you in our campus publication.
            </p>
            <Button className="my-6" asChild>
                <Link href="/join">View Open Positions</Link>
            </Button>
            <p className="text-sm text-neutral-600 dark:text-neutral-500 text-center">
                Or you can reach us out through <br /> these following
                platforms:
            </p>

            <div className="grid grid-cols-2 mt-6 gap-3">
                <div className="border bg-white dark:bg-transparent shadow rounded-md p-4">
                    <Link
                        href="https://www.facebook.com/sabuagpublication"
                        target="_blank"
                        className="text-sm text-neutral-800 dark:text-neutral-200 hover:text-accent-foreground transition-colors flex items-center justify-between"
                    >
                        Facebook
                        <ArrowUpRight className="ms-8 text-primary" size={20} />
                    </Link>
                </div>
                <div className="border bg-white dark:bg-transparent shadow rounded-md p-4">
                    <Link
                        href="mailto:"
                        target="_blank"
                        className="text-sm text-neutral-800 dark:text-neutral-200 hover:text-accent-foreground transition-colors flex items-center justify-between"
                    >
                        Gmail
                        <ArrowUpRight className="ms-8 text-primary" size={20} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
