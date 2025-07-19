export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center min-h-[90vh]">
            <div className="size-7 border-y-2 rounded-full animate-spin border-white"></div>

            <p className="text-neutral-700 dark:text-neutral-300 text-center mt-2">
                Please wait...
            </p>
        </div>
    );
}
