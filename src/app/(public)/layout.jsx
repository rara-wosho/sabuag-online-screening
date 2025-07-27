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
        <div>
            <Navbar currentUser={currentUser} />
            {children}
            <footer className="p-8 border-t">Footer</footer>
        </div>
    );
}
