import { Mail } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="min-h-screen w-full mx-auto flex flex-col items-center justify-center px-3 lg:px-0 relative overflow-hidden">
            <div className="absolute z-0 -left-[10rem] blur-[1px] -bottom-[6rem] -rotate-12 opacity-25">
                <Image
                    src="/Blogging-amico.svg"
                    alt="blogging"
                    width={450}
                    height={450}
                />
            </div>
            <div className="absolute z-0 right-[15rem] blur-[4px] bottom-[10rem] opacity-10">
                <Image
                    src="/Blogging-amico.svg"
                    alt="blogging"
                    width={300}
                    height={300}
                />
            </div>
            <div className="absolute z-0 -right-[10rem] blur-[1px] -bottom-[5rem] rotate-12 opacity-25">
                <Image
                    src="/Camera-amico.svg"
                    alt="camera"
                    width={400}
                    height={400}
                />
            </div>
            <div className="absolute z-0 left-[17rem] blur-[4px] bottom-[13rem] opacity-10">
                <Image
                    src="/Camera-amico.svg"
                    alt="camera"
                    width={250}
                    height={250}
                />
            </div>

            <h1 className="mb-3 md:text-xltext-neutral-600 dark:text-neutral-300">
                Campus Publication
            </h1>
            <p className="z-10 text-4xl md:text-5xl mb-4 max-w-4xl font-semibold tracking-wider text-center">
                Sustainable and Achievable Broadcasting with Unbiased and
                Attainable Goals
            </p>

            <p className="text-center text-lg text-neutral-600 dark:text-neutral-400">
                Journalism can never be silent: that is its greatest virtue and
                its greatest fault.
            </p>

            <div className="grid grid-cols-2 md:border dark:border-neutral-800 rounded-lg md:p-2 gap-x-2 w-full max-w-[400px] mt-8">
                <Button className="text-sm cursor-pointer flex items-center gap-2">
                    Send Email <Mail size={12} />
                </Button>
                <Button
                    className="text-sm cursor-pointer flex items-center gap-2"
                    variant="outline"
                >
                    Follow Our Page
                </Button>
            </div>
        </div>
    );
}
