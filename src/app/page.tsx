import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function ResizableDemo() {
  return (
    <div className="flex flex-col gap-4 p-4">
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
    </div>

  )
}



// export default function HomePage() {
//   return (
//     <div className="min-h-screen flex flex-col gap-4 p-4">
//       {/* Admin Section */}
//       <div className="bg-primary-foreground p-4 rounded-lg h-24 shadow">
//         <h2 className="font-semibold text-lg">Website Updates (Admin)</h2>
//         <p className="text-sm text-muted-foreground">Recent announcements or updates go here.</p>
//       </div>

//       {/* Summary Section */}
//       <div className="bg-primary-foreground p-4 rounded-lg shadow">
//         <h2 className="font-semibold text-lg">Summary Section</h2>
//         <p className="text-sm text-muted-foreground">Quick stats or graphs.</p>
//       </div>

//       {/* Cards Section (Latest Transactions, Low Stock, Latest Bills) */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="bg-primary-foreground p-4 rounded-lg shadow">
//           <h3 className="font-semibold text-md">Latest Transactions</h3>
//           <p className="text-sm text-muted-foreground">Show latest transaction details.</p>
//         </div>
//         <div className="bg-primary-foreground p-4 rounded-lg shadow">
//           <h3 className="font-semibold text-md">Low Stock Alerts</h3>
//           <p className="text-sm text-muted-foreground">List of products with low stock.</p>
//         </div>
//         <div className="bg-primary-foreground p-4 rounded-lg shadow">
//           <h3 className="font-semibold text-md">Latest Bill Paids</h3>
//           <p className="text-sm text-muted-foreground">Recent bill payments.</p>
//         </div>
//       </div>

//       {/* Latest Users Section */}
//       <div className="bg-primary-foreground p-4 rounded-lg shadow">
//         <h2 className="font-semibold text-lg">Latest Users</h2>
//         <p className="text-sm text-muted-foreground">List newly joined users.</p>
//       </div>
//     </div>
//   );
// }
