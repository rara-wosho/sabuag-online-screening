export default function PrimaryLabel({ children }) {
    return (
        <p className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-300 mb-4">
            {children}
        </p>
    );
}
