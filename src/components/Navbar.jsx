import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import Navlinks from "./Navlinks";

export default async function Navbar() {
    const supabase = await createClient();
    const {
        data: { user },
        error,
    } = await supabase.auth.getUser();

    if (error) {
        throw new Error(
            "We cannot fetch the data. Please make sure that you have a stable internet connection and try again."
        );
    }

    return (
        <div className="flex items-center justify-center border-b border-b-neutral-300 dark:border-neutral-800 fixed top-0 left-0 w-full backdrop-blur-xl  bg-background/30 px-3 z-50">
            <nav className="py-3 w-full max-w-[1200px] flex items-center">
                <Link
                    href="/"
                    className="flex items-center gap-2 font-semibold uppercase"
                >
                    <Image
                        src="/official-sabuag.png"
                        width={25}
                        height={31}
                        alt="sabuag logo"
                    />
                    <span className="hidden md:flex">Sabuag</span>
                </Link>

                <Navlinks session={user} />
            </nav>
        </div>
    );
}
