import Link from "next/link";

const DashboardLayout = ({ children }) => {
    return (
        <div className="h-screen w-screen relative">
            <div className="">
                <header className="border-b border-black/10">
                    <div className="h-full w-full px-6 flex items-center justify-end">
                    </div> 
                </header>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}
export default DashboardLayout;
