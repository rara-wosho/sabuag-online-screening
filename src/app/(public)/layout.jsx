import Navbar from "@/components/Navbar";
import { createClient } from "@/utils/supabase/server";
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
            <footer className="p-8 border-t dark:border-t-neutral-800/70 backdrop-blur-xl">
                Footer
            </footer>
        </div>
    );
}
