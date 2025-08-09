import Navbar from "@/components/Navbar";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Layout({ children }) {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    let currentUser = null;

    if (user?.id) {
        const { data, error } = await supabase
            .from("users")
            .select("id, role")
            .eq("id", user.id)
            .single();

        if (!error) currentUser = data;

        // if (data.role !== "user") {
        //     redirect("/admin");
        // }
    }

    return (
        <div className="relative isolate">
            <div className="w-[30rem] aspect-square opacity-90 dark:opacity-15 bg-accent dark:bg-accent rotate-45 fixed -left-[25rem] -z-10 -top-[6rem]"></div>
            <div className="w-[30rem] aspect-square opacity-40 dark:opacity-15 bg-accent dark:bg-accent rotate-45 fixed -left-[20rem] -z-10 -top-[6rem]"></div>
            <div className="w-[30rem] aspect-square opacity-40 dark:opacity-10 bg-accent dark:bg-accent rotate-45 fixed -left-[15rem] -z-10 -top-[6rem]"></div>
            <div className="w-[30rem] aspect-square opacity-90 dark:opacity-15 bg-accent dark:bg-accent rotate-45 fixed -right-[20rem] -z-10 -bottom-[10rem]"></div>
            <div className="w-[30rem] aspect-square opacity-40 dark:opacity-15 bg-accent dark:bg-accent rotate-45 fixed -right-[15rem] -z-10 -bottom-[10rem]"></div>
            <div className="w-[30rem] aspect-square opacity-40 dark:opacity-10 bg-accent dark:bg-accent rotate-45 fixed -right-[10rem] -z-10 -bottom-[10rem]"></div>

            <Navbar currentUser={currentUser} />
            {children}
            <footer className="pt-12 pb-8 border-t dark:border-t-neutral-800/70 backdrop-blur-xl">
                <div className="w-full max-w-[1200px] mx-auto flex flex-col px-4 lg:px-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-4">
                        <div className="flex flex-col lg:col-span-2">
                            <div className="relative w-12 h-14 mb-2">
                                <Image
                                    fill={true}
                                    src="/official-sabuag.png"
                                    alt="sabuag logo"
                                    className="object-contain"
                                />
                            </div>
                            <h1 className="text-xl md:text-2xl font-bold uppercase">
                                Sabuag
                            </h1>

                            <p className="py-2 text-neutral-600 dark:text-neutral-300/80 max-w-lg">
                                Sustainable and Achievable Broadcasting with
                                Unbiased and Attainable Goals
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <h4 className="mb-3 font-semibold">Pages</h4>
                            <Link
                                href="/"
                                className="text-neutral-600 mb-2 hover:text-accent-foreground dark:hover:text-accent-foreground dark:text-neutral-400"
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className="text-neutral-600 mb-2 hover:text-accent-foreground dark:hover:text-accent-foreground dark:text-neutral-400"
                            >
                                About
                            </Link>
                            <Link
                                href="/join"
                                className="text-neutral-600 mb-2 hover:text-accent-foreground dark:hover:text-accent-foreground dark:text-neutral-400"
                            >
                                Join
                            </Link>
                            <Link
                                href="/feedbacks"
                                className="text-neutral-600 mb-2 hover:text-accent-foreground dark:hover:text-accent-foreground dark:text-neutral-400"
                            >
                                Feedbacks
                            </Link>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="mb-3 font-semibold">Legal</h4>
                            <Link
                                href="/privacy-policy"
                                className="text-neutral-600 mb-2 hover:text-accent-foreground dark:hover:text-accent-foreground dark:text-neutral-400"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms-conditions"
                                className="text-neutral-600 mb-2 hover:text-accent-foreground dark:hover:text-accent-foreground dark:text-neutral-400"
                            >
                                Terms and Conditions
                            </Link>
                        </div>
                    </div>

                    <div className="pt-8 border-t dark:border-neutral-800/90 mt-4 flex items-center justify-between">
                        <p className="text-xs text-neutral-600 dark:text-neutral-400 md:text-sm">
                            Developed by{" "}
                            <span className="font-bold text-neutral-700 dark:text-neutral-300">
                                Israel De Vera
                            </span>
                        </p>
                        <p className="text-xs text-neutral-600 dark:text-neutral-400 md:text-sm">
                            All right reserved@2025
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
