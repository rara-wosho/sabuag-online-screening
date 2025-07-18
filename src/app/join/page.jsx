// "use client" is not required for static pages
import AvailablePositionCard from "@/components/AvailablePositionCard";
import { createClient } from "@/utils/supabase/server";
import { Mail, User, BookOpen } from "lucide-react";
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
                        <p className="text-neutral-400">Campus Publication</p>
                    </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Join Our Organization
                </h1>
                <p className="text-sm md:text-xl max-w-3xl mx-auto">
                    {/* Be part of a community that grows, builds, and innovates
                    together. */}
                    Sustainable and Achievable Broadcasting with Unbiased and
                    Attainable Goals
                </p>

                <Link
                    href="/about"
                    className="py-1.5 px-4 cursor-pointer  tracking-wide bg-neutral-200 rounded text-neutral-900 mt-6 "
                >
                    Learn more
                </Link>
            </section>
            <section className="flex flex-col items-center">
                <h1 className="text-2xl font-semibold text-center">
                    Available Positions
                </h1>
                <p className="text-neutral-400 text-xs md:text-sm text-center py-2">
                    <span className="hidden md:inline-flex">
                        Explore the roles you can be part of.
                    </span>{" "}
                    Browse through the list and submit your application for a
                    position that matches your skills and interests.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 md:mt-8">
                    {data.map((pos) => (
                        <AvailablePositionCard data={pos} key={pos.id} />
                    ))}
                </div>
            </section>
            <section className="py-16 px-6 max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-semibold mb-4">Why Join Us?</h2>
                <p className="text-neutral-400/80 text-lg">
                    As an active member, you'll have opportunities to enhance
                    your skills through real-world projects, connect with other
                    passionate individuals, and represent the IT student body.
                </p>
            </section>

            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                    <div>
                        <User className="mx-auto text-primary" size={40} />
                        <h3 className="text-xl font-medium mt-4">Leadership</h3>
                        <p className="text-gray-600 mt-2">
                            Build confidence and lead in various initiatives.
                        </p>
                    </div>
                    <div>
                        <BookOpen className="mx-auto text-primary" size={40} />
                        <h3 className="text-xl font-medium mt-4">
                            Skill Development
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Work on events, and org-wide activities.
                        </p>
                    </div>
                    <div>
                        <Mail className="mx-auto text-primary" size={40} />
                        <h3 className="text-xl font-medium mt-4">Networking</h3>
                        <p className="text-gray-600 mt-2">
                            Collaborate with fellow students and faculty.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-16 px-6 max-w-2xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-6">
                    Apply Now
                </h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">
                            Student Email
                        </label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">
                            Why do you want to join?
                        </label>
                        <textarea
                            rows={4}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                    >
                        Submit Application
                    </button>
                </form>
            </section>
        </main>

        // <div className="wrapper"></div>
    );
}
