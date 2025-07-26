import BackButton from "@/components/ui/BackButton";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="wrapper min-h-screen w-full flex flex-col items-center justify-center">
            <Image
                src="/404 Error-rafiki.png"
                width={200}
                height={200}
                alt="404 image"
            />

            <p className="text-center font-semibold text-3xl mb-3">Whoops!</p>
            <p className="dark:text-neutral-400 text-center">
                We could not find this user.
            </p>

            <BackButton containerStyle="border rounded py-1.5 px-8 cursor-pointer mt-4 text-sm">
                Back
            </BackButton>
        </div>
    );
}
