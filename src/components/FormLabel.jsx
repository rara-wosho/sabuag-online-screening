export default function FormLabel({ required = false, label }) {
    return (
        <p className="inline-flex gap-1  dark:text-neutral-300 text-neutral-700 text-sm mb-1.5">
            {label}

            {required && <span className="text-destructive">*</span>}
        </p>
    );
}
