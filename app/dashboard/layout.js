import AdminNavbar from "@/components/menus/AdminNavbar";
import Sidebar from "@/components/menus/Sidebar";

export default function RootLayout({ children }) {
    return (
        <div className="min-h-screen">
            <AdminNavbar />
            <Sidebar />
            <main className="pt-[90px] ml-20 sm:ml-80 p-6" >
                {children}
            </main>
        </div>
    );
}
