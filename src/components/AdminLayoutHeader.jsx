import Link from "next/link";
import { SidebarTrigger } from "./ui/sidebar";
import { Bell } from "lucide-react";
import Image from "next/image";
import { ThemeToggler } from "./ui/theme-toggler";

export default function AdminLayoutHeader({ currentUser }) {
    return (
        <div className="flex items-center px-3 py-[15.3px] border-b dark:border-neutral-900 sticky top-0 left-0 bg-white dark:bg-background/20 backdrop-blur-2xl w-full md:pe-5 z-50">
            <SidebarTrigger />
            <>
                <div className="md:flex items-center  gap-2 border-s ps-3 ms-2 hidden">
                    <p className="font-medium">
                        Welcome back, {currentUser?.firstname} 👋
                    </p>
                </div>
                <div className="flex items-center gap-2 border-s ps-3 ms-2 md:hidden">
                    <Image
                        src="/official-sabuag.png"
                        width={13}
                        height={15}
                        alt="sabuag logo"
                    />
                    <p className="font-bold">SABUAG</p>
                </div>
                <div className="ms-auto flex items-center gap-3 md:pe-2">
                    <div className="text-neutral-700 dark:text-neutral-400 flex items-center justify-center">
                        <ThemeToggler />
                    </div>
                    <Link
                        href={`/user/${currentUser?.id}`}
                        className="flex items-center justify-center"
                    >
                        <Image
                            src="/default-pic.jpg"
                            width={25}
                            height={25}
                            alt="avatar"
                            className="rounded-full"
                        />
                        <p className="text-xs hidden md:flex px-2">
                            {currentUser?.firstname} {currentUser?.lastname}
                        </p>
                    </Link>
                </div>
            </>
        </div>
    );
}
