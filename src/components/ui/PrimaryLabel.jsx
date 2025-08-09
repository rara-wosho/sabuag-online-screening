import { cn } from "@/lib/utils";

export default function PrimaryLabel({ className, children }) {
    return (
        <p
            className={cn(
                className,
                "text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-300 mb-4"
            )}
        >
            {children}
        </p>
    );
}
