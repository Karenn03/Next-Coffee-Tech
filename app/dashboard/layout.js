import AdminNavbar from "@/components/menus/AdminNavbar";
import Sidebar from "@/components/menus/Sidebar";

export default function RootLayout({ children }) {
    return (
        <>
            <AdminNavbar />
            <Sidebar />
            <main>
                {children}
            </main>
        </>
    );
}
