import StepsTab from "./StepsTab";

export default function ApplicationGuide() {
    return (
        <div className="md:pe-8">
            <h1 className="text-xl md:text-3xl mb-6 font-semibold dark:text-neutral-300/90">
                How to Submit your Work
            </h1>

            <p className="dark:text-neutral-300/90 text-lg mb-2">
                Submitting Photos or Videos?
            </p>

            <p className="text-md dark:text-neutral-400">
                If your sample work is a photo collection or video, please
                upload it to{" "}
                <a
                    target="_blank"
                    href="https://drive.google.com/"
                    className="font-semibold dark:text-neutral-300"
                >
                    Google Drive
                </a>{" "}
                and share the link with us in the form. Here's how:
            </p>

            <div className="flex flex-col mt-6">
                <p className="text-accent-foreground text-sm mb-4">
                    4 Simple Steps
                </p>
                <StepsTab number="1">
                    Go to
                    <a
                        target="_blank"
                        href="https://drive.google.com/"
                        className="dark:text-neutral-300 underline px-1"
                    >
                        Google Drive
                    </a>
                    and upload your file or folder.
                </StepsTab>
                <StepsTab number="2">
                    Right-click the uploaded file or folder and select "
                    <span className="dark:text-neutral-300">Share.</span>"
                </StepsTab>
                <StepsTab number="3">
                    Under General Access, change it to "{" "}
                    <span className="dark:text-neutral-300">
                        Anyone with the link.
                    </span>
                    "
                </StepsTab>
                <StepsTab number="4">
                    Copy the link and paste it into the{" "}
                    <span className="dark:text-neutral-300">Output Link</span>{" "}
                    field in the form.
                </StepsTab>
            </div>
        </div>
    );
}
