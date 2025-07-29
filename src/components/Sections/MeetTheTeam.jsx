import Image from "next/image";
import { Button } from "../ui/button";

const MeetTheTeam = () => {
    return (
        <div className="w-full p-8 relative overflow-hidden isolate">
            {/* <div className="absolute rounded-[100%] w-[110%] h-[50rem] -top-[40rem] left-1/2 -translate-x-1/2 bg-accent -z-10 "></div> */}
            <div className="w-[40rem] aspect-square bg-accent/35 dark:bg-accent/10 rotate-45 absolute -left-[15rem] -z-10 -top-[30rem]"></div>
            <div className="w-[40rem] aspect-square bg-accent/35 dark:bg-accent/10 rotate-45 absolute -left-[10rem] -z-10 -top-[30rem]"></div>
            <div className="w-[40rem] aspect-square bg-accent/35 dark:bg-accent/10 rotate-45 absolute -left-[5rem] -z-10 -top-[30rem]"></div>
            <div className="w-[30rem] aspect-square bg-accent/35 dark:bg-accent/10 rotate-45 absolute -right-[25rem] -z-10 -bottom-[10rem]"></div>
            <div className="w-[30rem] aspect-square bg-accent/35 dark:bg-accent/10 rotate-45 absolute -right-[20rem] -z-10 -bottom-[10rem]"></div>
            <div className="w-[30rem] aspect-square bg-accent/35 dark:bg-accent/10 rotate-45 absolute -right-[15rem] -z-10 -bottom-[10rem]"></div>

            <div className="mx-auto w-full max-w-[900px] py-[4rem]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="left">
                        <h1 className="text-4xl font-semibold mb-3">
                            Meet the{" "}
                            <span className="text-accent-foreground">Team</span>
                        </h1>
                        <p className="dark:text-slate-300/80">
                            We’re a team of writers, designers, and storytellers
                            — We are a group of students who share the same
                            passion for storytelling, creativity, and campus
                            life. Our team is made up of writers, artists,
                            photographers, and designers working together to
                            bring stories to light.
                        </p>

                        <Button size="sm" className="mt-4">
                            About Us
                        </Button>
                    </div>

                    <div className="right">
                        <div className="flex flex-col items-center justify-center">
                            <div className="img-wrapper h-52 w-full relative">
                                <Image
                                    alt="team photo"
                                    src="/sabuag-team.jpeg"
                                    fill={true}
                                    objectFit="cover"
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
