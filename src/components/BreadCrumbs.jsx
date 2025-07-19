import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function BreadCrumbs({ links }) {
    return (
        <div className="flex items-center dark:text-neutral-400/70 text-sm py-1">
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.href}
                    className="flex items-center gap-2.5 px-1.5"
                >
                    {link.label}
                    {index !== links.length - 1 && <ChevronRight size={14} />}
                </Link>
            ))}
        </div>
    );
}
