import Image from "next/image";

const MeetTheTeam = () => {
    return (
        <div className="w-full max-w-[97%] mx-auto p-8 bg-card">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="left">
                    <h1 className="text-4xl font-semibold mb-3">
                        Meet the{" "}
                        <span className="text-accent-foreground">Team</span>
                    </h1>

                    <p className="dark:text-slate-300/80">
                        We’re a team of writers, designers, and storytellers —
                        creating for the campus and beyond.
                    </p>
                </div>

                <div className="right relative">
                    <div className="img-wrapper h-52">
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
    );
};

export default MeetTheTeam;
