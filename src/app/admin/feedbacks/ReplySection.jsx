"use client";

import React, { useState } from "react";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Textarea } from "@/components/ui/textarea";

export default function ReplySection({ feedbackId }) {
    const [replies, setReplies] = useState([]);
    return (
        <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full cursor-pointer">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Replies
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {replies.length}
                </p>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2">
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                    Lorem ipsum dolor sit amet.
                </p>

                <Textarea placeholder="Add reply" />
            </CollapsibleContent>
        </Collapsible>
    );
}
