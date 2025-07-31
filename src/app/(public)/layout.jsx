import Navbar from "@/components/Navbar";
import { createClient } from "@/utils/supabase/server";

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
    }

    return (
        <div className="relative isolate">
            <div className="w-[30rem] aspect-square bg-accent/90 dark:bg-accent/10 rotate-45 fixed -left-[25rem] -z-10 -top-[6rem]"></div>
            <div className="w-[30rem] aspect-square bg-accent/40 dark:bg-accent/10 rotate-45 fixed -left-[20rem] -z-10 -top-[6rem]"></div>
            <div className="w-[30rem] aspect-square bg-accent/40 dark:bg-accent/5 rotate-45 fixed -left-[15rem] -z-10 -top-[6rem]"></div>
            <div className="w-[30rem] aspect-square bg-accent/90 dark:bg-accent/10 rotate-45 fixed -right-[20rem] -z-10 -bottom-[10rem]"></div>
            <div className="w-[30rem] aspect-square bg-accent/40 dark:bg-accent/10 rotate-45 fixed -right-[15rem] -z-10 -bottom-[10rem]"></div>
            <div className="w-[30rem] aspect-square bg-accent/40 dark:bg-accent/5 rotate-45 fixed -right-[10rem] -z-10 -bottom-[10rem]"></div>

            <Navbar currentUser={currentUser} />
            {children}
            <footer className="p-8 border-t dark:border-t-neutral-800/70 backdrop-blur-xl">
                Footer
            </footer>
        </div>
    );
}
