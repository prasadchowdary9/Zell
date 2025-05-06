
import { SidebarProvider } from "@/components/ui/sidebar"
import Home from "./home/Page"

export default function ResizableDemo() {
  return (
    <SidebarProvider defaultOpen={true}>
      <Home />
    </SidebarProvider>
  )
}

