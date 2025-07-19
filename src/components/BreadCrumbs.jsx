import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function BreadCrumbs({ links, containerStyle }) {
    return (
        <div
            className={cn(
                containerStyle,
                " flex items-center dark:text-neutral-400/70 text-sm py-1"
            )}
        >
            {links.map((link, index) => (
                <div key={index} className="flex items-center">
                    <Link
                        href={link.href}
                        className={cn(
                            "flex items-center gap-2.5 pe-1.5",
                            index === links.length - 1 &&
                                "dark:text-neutral-300",
                            link.href === "" && "pointer-events-none"
                        )}
                    >
                        {link.label}
                        {index !== links.length - 1 && (
                            <ChevronRight size={14} />
                        )}
                    </Link>
                </div>
            ))}
        </div>
    );
}
