"use client";

import Link from "next/link";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Is this an official school organization?",
        answer: "Yes! We are the official campus publication of USTP Panaon, recognized by the school and advised by a faculty member. We represent the voice of the students.",
    },
    {
        question: "Do I need prior experience to join?",
        answer: "Not at all! Whether you were part of a high school publication or you're just starting to explore journalism, design, or photography — we welcome all skill levels. We offer training and mentorship for every member.",
    },
    {
        question: "What roles can I apply for?",
        answer: "We open different roles depending on the semester's needs. These can include Writer, Editorial Cartoonist, Layout Artist, Photographer, Video Editor, and more. Check the Join Us page for available positions.",
    },
    {
        question: "What happens after I submit my application?",
        answer: "After you submit your form and sample output, our editorial team reviews your application. We may reach out for follow-up questions or a short interview. You’ll get an update via the contact info you provided.",
    },
    {
        question: "How often do you accept new members?",
        answer: "We typically recruit at the start of each semester, but it depends on team needs.",
    },
    {
        question: "How do I submit a photo or video sample?",
        answer: "If your output is a photo collection or video, upload it to Google Drive and share the link with us in the application form. Make sure the link is viewable by anyone with the link.",
    },
    {
        question: "Can I still contribute even if I’m not part of the team?",
        answer: "Yes! We occasionally accept guest submissions or one-time contributions. Reach out through our contact form or social media to ask about submitting content.",
    },
];

const FaqSection = () => {
    const [active, setActive] = useState(1);

    return (
        <div className="w-full max-w-[1200px] mx-auto my-[5rem] flex flex-col items-center justify-center px-3 lg:px-0">
            <h1 className="text-center font-semibold text-4xl mb-2">
                Frequently Asked Questions
            </h1>
            <p className="text-center text-neutral-700 dark:text-slate-300/70 text-sm">
                These are the most commonly asked questions about SABUAG.
            </p>
            <p className="text-center text-neutral-700 dark:text-slate-300/70 text-sm">
                Can't find what you're looking for? Kindly{" "}
                <Link
                    href="mailto:sabuag-publication@gmail.edu.ph"
                    className="underline text-accent-foreground"
                >
                    send us an email
                </Link>
                .
            </p>

            <div className="mt-8 w-full max-w-[900px] flex flex-col gap-3">
                {faqs.map((faq, index) => (
                    <Collapsible
                        key={index}
                        open={active === index + 1}
                        onOpenChange={() =>
                            setActive((prev) =>
                                prev === index + 1 ? 0 : index + 1
                            )
                        }
                        className="w-full bg-slate-100 dark:bg-card rounded-lg p-4"
                    >
                        <CollapsibleTrigger className="w-full text-start cursor-pointer flex items-center justify-between">
                            <p className="md:text-lg font-medium">
                                {faq.question}
                            </p>
                            <div
                                className={cn(
                                    active === index + 1
                                        ? "rotate-45 bg-primary text-white"
                                        : "text-neutral-800 dark:text-slate-300",
                                    "p-1 rounded-full border duration-200 transition-transform"
                                )}
                            >
                                <Plus size={16} />
                            </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="pt-2 border-t mt-3">
                            <p className="text-slate-600 dark:text-slate-300/70">
                                {faq.answer}
                            </p>
                        </CollapsibleContent>
                    </Collapsible>
                ))}
            </div>
        </div>
    );
};

export default FaqSection;
