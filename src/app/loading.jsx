export default function Loading() {
    return (
        <div className="min-h-screen w-full items-center justify-center flex flex-col relative">
            <p className="font-bold tracking-widest text-lg">SABUAG</p>

            <div className="absolute bottom-[3.5rem] left-1/2 -translate-1/2 flex flex-col items-center">
                <p className="text-xs dark:text-neutral-400/80 mb-1">
                    Developed By
                </p>

                <p className="text-sm">Israel De Vera</p>
            </div>
        </div>
    );
}
