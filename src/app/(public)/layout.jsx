import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
    return (
        <div className="pt-[3.8rem] max-w-[1200px] mx-auto px-3 lg:px-0">
            {/* <Navbar /> */}
            {children}
        </div>
    );
}
