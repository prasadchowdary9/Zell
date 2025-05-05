// app/(dashboard)/layout.tsx

import { AppSidebar } from "@/components/AppSideBar";
import Navbar from "@/components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

export default  function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = cookies();
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

    return (
        <SidebarProvider defaultOpen={defaultOpen}>
            <div className="flex min-h-screen w-full">
                <AppSidebar />
                <div className="flex flex-col w-full">
                    <Navbar />
                    <main className="flex-1 px-4 py-6">{children}</main>
                </div>
            </div>
        </SidebarProvider>
    );
}
