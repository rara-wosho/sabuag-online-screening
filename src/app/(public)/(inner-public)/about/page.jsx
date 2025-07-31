import InviteSection from "@/components/Sections/InviteSection";
import Image from "next/image";

export default async function AboutPage() {
    return (
        <div className="flex flex-col items-center justify-center pt-[8rem]">
            <div className="wrapper relative pt-[8rem] px-6 pb-14 w-full bg-white dark:bg-background border dark:border-neutral-800/50 rounded-xl mb-[4rem] flex flex-col items-center justify-center">
                <div className="w-[90%] absolute top-0 left-1/2 -translate-x-1/2 h-[90%] bg-radial-[at_50%_0%] from-sky-500/20 dark:from-sky-900/50 via-20% via-blue-400/5 to-transparent to-70% "></div>

                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-52 aspect-square">
                    <Image
                        alt="sabuag-logo"
                        src="/official-sabuag.png"
                        fill
                        className="object-contain"
                        sizes="(min-width: 600px) 16rem, 12rem"
                    />
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest mb-2">
                    SABUAG
                </h1>
                <p className="text-sm md:text-lg text-center text-neutral-700 dark:text-neutral-300/60">
                    Campus Publication - USTP Panaon
                </p>

                <h4 className="text-center font-semibold  text-lg md:text-3xl max-w-3xl pt-6 pb-8 border-b mb-8">
                    Sustainable and Achievable Broadcasting with Unbiased And
                    Attainable Goals
                </h4>

                <p className="text-center text-primary mb-2">Our Story</p>
                <h4 className="text-center font-semibold text-lg md:text-3xl max-w-3xl mb-3 capitalize">
                    How it all began
                </h4>

                <p className="text-neutral-600 dark:text-neutral-400 text-center max-w-3xl">
                    Our publication started with a simple mission: to create a
                    platform where students could share their thoughts, talents,
                    and perspectives. Over the years, we have grown into a
                    diverse team of writers, artists, photographers, and leaders
                    who continue to document the evolving story of our campus.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10 mb-16">
                <div className="left h-full flex flex-col justify-center">
                    <p className="text-center md:text-start text-primary mb-2">
                        Our Work in Action
                    </p>
                    <h4 className="text-center md:text-start font-semibold text-lg md:text-3xl max-w-3xl mb-3 capitalize">
                        What We Do
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400 text-center md:text-start max-w-3xl md:pe-10">
                        We publish news articles, feature stories, opinion
                        pieces, artworks, editorial cartoons, photo essays, and
                        multimedia projects. Beyond publishing, we also host
                        seminars, training sessions, and events that help our
                        members grow in their craft while building strong
                        friendships and leadership skills.
                    </p>
                </div>

                <div className="right">
                    <div className="img-wrapper relative w-full aspect-[16/7] rounded-md overflow-hidden shadow-lg">
                        <Image
                            src="/sabuag-team.jpeg"
                            fill={true}
                            className="object-cover"
                            alt="image"
                        />
                    </div>
                </div>
            </div>

            <InviteSection />
        </div>
    );
}
