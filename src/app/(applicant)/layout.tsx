
import { AppSidebar } from "@/components/AppSideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "next-themes";
import { cookies } from "next/headers";


export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const cookieStore = await cookies()
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

    return (
        
           
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange>
                        <SidebarProvider defaultOpen={defaultOpen}>
                            <AppSidebar />
                            <main className="w-full">
                                {/* <Navbar /> */}
                                <div className="px-4">{children}</div>
                            </main>
                        </SidebarProvider>
                    </ThemeProvider>
               
    );
}
