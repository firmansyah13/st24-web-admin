import React from "react";
import NavMenu from "./Components/NavMenu";
import Sidebar from "./Components/SidebarMenu";

const User = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="h-full flex-1">
                <NavMenu />
                <div className="container-fluid relative ml-4 mt-4">
                    <h1 className="text-2xl font-semibold text-left ">User Management</h1>
                </div>
            </div>
        </div>
    )
}
export default User;