import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: {
        default: "Sabuag - Campus Publication",
        template: "%s | Sabuag",
    },
    description: "This is the global description",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className={`antialiased`}>
                {/* <div className="layout-bg fixed -bottom-[1100px] w-screen aspect-square -right-[700px] rounded-full bg-radial from-sky-300/15 to-65% to-transparent -z-10"></div> */}
                <main className="root-layout-wrapper text-neutral-700 dark:text-neutral-300 flex justify-center mask-auto">
                    <Navbar />
                    <div className="max-w-[2200px] w-full">{children}</div>
                </main>
                <Toaster position="top-center" richColors />
            </body>
        </html>
    );
}
