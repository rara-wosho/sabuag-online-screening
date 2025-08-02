import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const MeetTheTeam = () => {
    return (
        <div className="w-full p-8 relative">
            <div className="mx-auto w-full max-w-[900px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10">
                    <div className="left">
                        <h1 className="text-4xl font-semibold mb-3">
                            Meet the people <br />
                            behind the{" "}
                            <span className="text-accent-foreground">
                                Publication
                            </span>
                        </h1>
                        <p className="dark:text-slate-300/80 py-1">
                            Our publication is powered by a diverse team of
                            students who bring their skills and creativity
                            together. Each member contributes a unique voice
                            that makes our work possible.
                        </p>

                        <Button asChild size="sm" className="mt-4">
                            <Link href="/about">
                                <p className="flex items-center gap-1.5">
                                    About Us <ArrowRight />
                                </p>
                            </Link>
                        </Button>
                    </div>

                    <div className="right relative isolate">
                        <div className="flex flex-col items-center justify-center">
                            <div className="img-wrapper h-44 w-full -z-10 absolute -top-[1rem] -right-[1rem] -rotate-2 shadow-lg bg-accent opacity-60 dark:bg-accent dark:opacity-35 rounded-md"></div>
                            <div className="img-wrapper h-44 w-full -z-10 absolute -bottom-[1rem] -left-[1rem] -rotate-4 shadow-lg bg-accent opacity-60 dark:bg-accent dark:opacity-35 rounded-md"></div>
                            <div className="img-wrapper h-56 w-full relative rotate-2 md:rotate-4 duration-200 hover:rotate-0">
                                <Image
                                    alt="team photo"
                                    src="/sabuag-team.jpeg"
                                    fill={true}
                                    sizes="(max-width: 768px)"
                                    className="object-cover rounded-md shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetTheTeam;
