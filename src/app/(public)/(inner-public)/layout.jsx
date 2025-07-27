export default async function InnerPublicLayout({ children }) {
    return (
        <div className="pt-[3.8rem] max-w-[1200px] mx-auto px-3 lg:px-0">
            {children}
        </div>
    );
}
