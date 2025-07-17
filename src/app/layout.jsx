import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

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
                <div className="root-layout-wrapper text-neutral-700 dark:text-neutral-300 flex justify-center mask-auto border-white">
                    <div className="max-w-[2200px] w-full">{children}</div>
                </div>
                <Toaster position="top-center" richColors />
            </body>
        </html>
    );
}
