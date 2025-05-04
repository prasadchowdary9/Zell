import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"


export function DashboardTabs({ }) {

    return (
        <Tabs defaultValue="outline" className="flex w-full flex-col gap-6">
            <div className="flex items-center justify-between px-4 lg:px-6">
                <Label htmlFor="view-selector" className="sr-only">View</Label>
                <Select defaultValue="outline">
                    <SelectTrigger id="view-selector" className="@4xl/main:hidden flex w-fit">
                        <SelectValue placeholder="Select a view" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="outline">Outline</SelectItem>
                        <SelectItem value="past-performance">Past Performance</SelectItem>
                        <SelectItem value="key-personnel">Key Personnel</SelectItem>
                        <SelectItem value="focus-documents">Focus Documents</SelectItem>
                    </SelectContent>
                </Select>

                <TabsList className="@4xl/main:flex hidden w-full">
                    <TabsTrigger value="outline">Outline</TabsTrigger>
                    <TabsTrigger value="past-performance" className="gap-1">
                        Past Performance
                
                    </TabsTrigger>
                    <TabsTrigger value="key-personnel" className="gap-1">
                        Key Personnel
                    </TabsTrigger>
                    <TabsTrigger value="focus-documents">Low stock</TabsTrigger>
                </TabsList>
            </div>

            <TabsContent value="outline" className="flex flex-col gap-4 px-4 lg:px-6 min-h-[300px]">
                {/* Your outline tab content goes here */}
                <div className="rounded border p-4 shadow-sm">Outline Content</div>
            </TabsContent>
            <TabsContent value="past-performance" className="min-h-[300px]">
                {/* Your past performance tab content goes here */}
                <div className="rounded border p-4 shadow-sm">Past Performance Content</div>
            </TabsContent>
            <TabsContent value="key-personnel" className="min-h-[300px]">
                {/* Your key personnel tab content goes here */}
                <div className="rounded border p-4 shadow-sm">Key Personnel Content</div>
            </TabsContent>
            <TabsContent value="focus-documents" className="min-h-[300px]">
                {/* Your focus documents tab content goes here */}
                <div className="rounded border p-4 shadow-sm">Low stock</div>
            </TabsContent>
        </Tabs>
    )
}
