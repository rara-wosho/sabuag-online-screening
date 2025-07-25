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
        <div className="pt-[3.8rem] max-w-[1200px] mx-auto px-3 lg:px-0">
            <Navbar currentUser={currentUser} />
            {children}
        </div>
    );
}
