import Image from "next/image";

export default async function AboutPage() {
    return (
        <div className="flex flex-col items-center justify-center pt-[8rem]">
            <div className="wrapper relative pt-[8rem] px-6 pb-10 w-full bg-white dark:bg-background border dark:border-neutral-800/50 rounded-xl mb-[4rem] flex flex-col items-center justify-center">
                <div className="w-[90%] absolute top-0 left-1/2 -translate-x-1/2 h-[90%] bg-radial-[at_50%_0%] from-sky-900/50 via-20% via-blue-400/5 to-transparent to-70% "></div>

                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-52 aspect-square">
                    <Image
                        alt="sabuag-logo"
                        src="/official-sabuag.png"
                        fill
                        className="object-contain"
                        sizes="(min-width: 600px) 16rem, 12rem"
                    />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest mb-2">
                    SABUAG
                </h1>
                <p className="text-lg text-center text-neutral-700 dark:text-neutral-300/60">
                    Campus Publication - USTP Panaon
                </p>

                <h4 className="text-center font-semibold text-3xl max-w-3xl pt-6 pb-8 border-b mb-8">
                    Sustainable and Achievable Broadcasting with Unbiased And
                    Attainable Goals
                </h4>

                <p className="text-center text-primary mb-2">Our Story</p>
                <h4 className="text-center font-semibold text-3xl max-w-3xl mb-3 capitalize">
                    How it all began
                </h4>

                <p className="text-neutral-400 text-center max-w-3xl">
                    Our publication started with a simple mission: to create a
                    platform where students could share their thoughts, talents,
                    and perspectives. Over the years, we have grown into a
                    diverse team of writers, artists, photographers, and leaders
                    who continue to document the evolving story of our campus.
                </p>
            </div>
        </div>
    );
}
