// "use client" is not required for static pages
import AvailablePositionCard from "@/components/AvailablePositionCard";
import FeedbackSection from "@/components/FeedbackSection";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { Mail, User, BookOpen, MailOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function JoinUsPage() {
    const db = await createClient();

    const { data, error } = await db
        .from("positions")
        .select()
        .eq("is_open", true);

    if (!data) {
        notFound();
    }

    return (
        <main className="min-h-screen w-full max-w-[1200px] mx-auto">
            <section className="pb-16 pt-28 px-6 text-center flex flex-col items-center">
                <div className="md:flex items-center mb-5 hidden">
                    <Image
                        src="/official-sabuag.png"
                        width={46}
                        height={46}
                        alt="sabuag logo"
                    />

                    <div className="flex flex-col items-start border-s ps-4 ms-3">
                        <h2 className="uppercase font-semibold -tracking-wider">
                            Sabuag
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            Campus Publication
                        </p>
                    </div>
                </div>

                {data && data.length > 0 && (
                    <>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Join Our Organization
                        </h1>
                        <p className="text-sm md:text-xl max-w-3xl mx-auto">
                            If you're into writing, design, photography, or a
                            former campus journalist, <br /> we’ve got a spot
                            for you.
                        </p>

                        <div className="flex items-center gap-2 mt-6">
                            <Link
                                href="/about"
                                className="py-1.5 px-4 cursor-pointer hover:opacity-90 tracking-wide bg-neutral-200 rounded text-neutral-900 "
                            >
                                Learn more
                            </Link>

                            <Button variant="outline" asChild>
                                <a href="#feedback">Submit feedback</a>
                            </Button>
                        </div>
                    </>
                )}
            </section>
            <section className="flex flex-col items-center">
                {data.length === 0 && (
                    <div className="pb-16 flex flex-col items-center">
                        <h1 className="text-2xl font-semibold text-center mb-2">
                            We're Not Accepting New Members Right Now
                        </h1>

                        <p className="text-neutral-400 text-center mb-8">
                            Thank you for your interest in joining our
                            publication! <br /> Our team is currently complete
                            for this semester, but we’d love to keep in touch.
                        </p>

                        <div className="flex items-center gap-3">
                            <Button asChild>
                                <a href="#" className="">
                                    Follow Us on Facebook
                                </a>
                            </Button>
                            <Button variant="outline" asChild>
                                <a href="#" className="">
                                    Send an Email
                                </a>
                            </Button>
                        </div>
                    </div>
                )}

                {data && data.length > 0 && (
                    <>
                        <div className="flex flex-col md:flex-row items-center md:items-end">
                            <h1 className="text-2xl font-semibold text-center md:text-end md:border-e md:pe-4 md:me-3 mb-2 md:mb-0">
                                Available Positions
                            </h1>

                            <p className="dark:text-neutral-400 text-neutral-600 text-sm md:text-base text-center md:text-start">
                                Browse through the list and submit your
                                application for a position that matches your
                                skills and interests.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:mt-8">
                            {data.map((pos) => (
                                <AvailablePositionCard
                                    data={pos}
                                    key={pos.id}
                                />
                            ))}
                        </div>
                    </>
                )}
            </section>
            <section className="py-20 px-6  mx-auto text-center border-t-0 md:border-t border-neutral-800 mt-12 md:mt-20">
                <h2 className="text-3xl font-semibold mb-4">Why Join Us?</h2>
                <p className="text-neutral-700 dark:text-neutral-400 text-lg">
                    Joining us isn’t just about publishing stories — it’s about
                    finding your people, discovering your voice, and building
                    memories that last. Here’s what’s in store when you become
                    part of the team.
                </p>
            </section>

            <section className="pb-12 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center">
                    <div>
                        <User
                            className="mx-auto dark:text-neutral-400"
                            size={40}
                        />
                        <h3 className="text-xl font-medium mt-4">
                            Expand your Voice
                        </h3>

                        <p className="text-neutral-600 italic text-sm dark:text-neutral-400/80 mt-2">
                            Cover campus events, create print or digital
                            stories, and see your work published and celebrated.
                        </p>
                    </div>
                    <div>
                        <User
                            className="mx-auto dark:text-neutral-400"
                            size={40}
                        />
                        <h3 className="text-xl font-medium mt-4">
                            Bond with the Team
                        </h3>
                        <p className="text-neutral-600 italic text-sm dark:text-neutral-400/80 mt-2">
                            We’re not just a publication — we’re a family. From
                            bonding nights to outreach programs, we grow
                            together.
                        </p>
                    </div>
                    <div>
                        <User
                            className="mx-auto dark:text-neutral-400"
                            size={40}
                        />
                        <h3 className="text-xl font-medium mt-4">
                            Boost your Confidence
                        </h3>
                        <p className="text-neutral-600 italic text-sm dark:text-neutral-400/80 mt-2">
                            Take part in seminars that improve not just your
                            craft, but your leadership, communication, and
                            confidence.
                        </p>
                    </div>
                    <div>
                        <BookOpen
                            className="mx-auto dark:text-neutral-400"
                            size={40}
                        />
                        <h3 className="text-xl font-medium mt-4">
                            Skill Development
                        </h3>
                        <p className="text-neutral-600 italic text-sm dark:text-neutral-400/80 mt-2">
                            Work on events, and org-wide activities.
                        </p>
                    </div>
                </div>
            </section>

            {/* feedback form  */}
            <section id="feedback" className="py-20 px-6 mx-auto">
                <FeedbackSection />
            </section>
        </main>
    );
}
