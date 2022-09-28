import React from "react";
import NavMenu from "./Components/NavMenu";
import Sidebar from "./Components/SidebarMenu";

const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="h-screen flex-1">
                <NavMenu />
                <div className="container">
                    <h1 className="text-2xl font-semibold text-left ">Dashboard</h1>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;