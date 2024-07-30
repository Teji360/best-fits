import React from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => { //in a layout component you have to extract the children
    // the code below renders all the children in this layout file
    // Every file we make inside the dashboard will hace this nav
    return (
        <div className="flex flex-col gap-y-4">
            <nav className="bg-black text-white">
                This is a shared navbar for dashboard segment
            </nav>
            {children}
        </div>
    )
}

export default DashboardLayout