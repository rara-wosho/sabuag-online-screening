import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: {
        default: "Sabuag - Campus Publication",
        template: "%s | Sabuag", // used when child page sets its own title
    },
    description: "This is the global description",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
            <body className={`antialiased`}>
                {/* <div className="layout-bg fixed -right-20 -bottom-36 size-[500px] rounded-full bg-neutral-700/10 blur-3xl -z-10"></div> */}
                <main className="root-layout-wrapper text-neutral-700 dark:text-neutral-300 flex justify-center mask-auto">
                    <Navbar />
                    <div className="max-w-[2200px] w-full px-3">{children}</div>
                </main>
                <Toaster position="top-center" richColors />
            </body>
        </html>
    );
}
