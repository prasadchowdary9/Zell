
export default function Analytics() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-screen ">
            {/* First row: Single item spanning all 4 columns on large screens */}
            <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-4 ">
                User Analytics
            </div>

            {/* Second row: Remaining three items */}
            <div className="bg-primary-foreground p-4 rounded-lg">User Revenue</div>
            <div className="bg-primary-foreground p-4 rounded-lg">User Transactions</div>
            <div className="bg-primary-foreground p-4 rounded-lg">User Types</div>
            <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
        </div>

    );
}
