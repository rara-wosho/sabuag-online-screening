import Image from "next/image";
import Link from "next/link";
import Navlinks from "./Navlinks";

export default function Navbar({ currentUser }) {
    return (
        <div className="flex items-center justify-center border-b border-b-neutral-200 dark:border-neutral-800/70 fixed top-0 left-0 w-full backdrop-blur-xl  bg-background/30 px-3 z-50">
            <nav className="py-3 w-full max-w-[1200px] flex items-center">
                <Link
                    href="/"
                    className="flex items-center gap-2 font-semibold uppercase"
                >
                    <div className="relative w-8 aspect-square">
                        <Image
                            src="/official-sabuag.png"
                            fill
                            className="object-contain"
                            alt="sabuag logo"
                            sizes="32px"
                        />
                    </div>
                    <span className="inline-flex">Sabuag</span>
                </Link>

                <Navlinks currentUser={currentUser} />
            </nav>
        </div>
    );
}
