
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { SectionCards } from "@/components/section-cards"
import { DashboardTabs } from "@/components/tabs-bar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"


export default function ResizableDemo() {
  return (
    <SidebarProvider>
      <SidebarInset>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DashboardTabs />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}



{/* <div className="flex flex-col gap-4 p-4">
<ResizablePanelGroup
  direction="vertical"
  className="min-h-[400px] max-w-full rounded-lg border md:min-w-[450px] bg-primary-foreground "
>
  <ResizablePanel defaultSize={25}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">WEB UPDATES</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={75}>
    <div className="flex h-full items-center justify-center p-6">

      <span className="font-semibold">MAIN ANALYTICS</span>

    </div>
  </ResizablePanel>
</ResizablePanelGroup>
<ResizablePanelGroup
  direction="horizontal"
  className="max-w-full min-h-[420px] rounded-lg border md:min-w-[450px]  bg-primary-foreground"
>
  <ResizablePanel defaultSize={50}>
    <div className="flex h-[200px] items-center justify-center p-6">
      <span className="font-semibold">LATEST TRANSACTIONS</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">LATEST PRODUCT</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">TOP LOW STOCKS</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </ResizablePanel>
</ResizablePanelGroup>
</div> */}
