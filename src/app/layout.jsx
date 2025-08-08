import { Geist, Poppins } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { cn } from "@/lib/utils";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/components/theme-provider";
import SafariWarning from "@/components/SafariWarning";

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


    // lazy push 
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={cn("scroll-smooth", geist.className)}
        >
            <body className={`antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <NextTopLoader showSpinner={false} color="#8967d8" />
                    <main className="root-layout-wrapper text-neutral-700 dark:text-neutral-300 flex justify-center mask-auto">
                        <div className="max-w-[2200px] w-full">{children}</div>
                    </main>
                    <SafariWarning />
                    <Toaster position="top-center" richColors />
                </ThemeProvider>
            </body>
        </html>
    );
}
