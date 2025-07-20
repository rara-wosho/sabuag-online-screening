import { Geist, Poppins } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

export const metadata = {
    title: {
        default: "Sabuag - Campus Publication",
        template: "%s | Sabuag",
    },
    description: "This is the global description",
};

const geist = Geist({
    subsets: ["latin"],
});

const poppins = Poppins({
    weight: "400",
    subsets: ["latin"],
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={cn("dark scroll-smooth", poppins.className)}>
            <body className={`antialiased`}>
                <main className="root-layout-wrapper text-neutral-700 dark:text-neutral-300 flex justify-center mask-auto">
                    <Navbar />
                    <div className="max-w-[2200px] w-full">{children}</div>
                </main>
                <Toaster position="top-center" richColors />
            </body>
        </html>
    );
}
