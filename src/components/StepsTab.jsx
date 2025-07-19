export default function StepsTab({ children, number }) {
    return (
        <div className="flex gap-2 mb-4 items-center">
            <div className="rounded-full p-[3px] border-2 flex items-center justify-center border-neutral-300 dark:border-neutral-700">
                <div className="rounded-full bg-primary size-[32px] flex items-center justify-center">
                    <p className="text-white text-xs">{number}</p>
                </div>
            </div>
            <p className="dark:text-neutral-300/75 text-sm">{children}</p>
        </div>
    );
}
