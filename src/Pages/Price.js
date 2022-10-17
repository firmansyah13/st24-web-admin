import React from "react";
import NavMenu from "../Components/NavMenu";
import Sidebar from "../Components/SidebarMenu";

const Price = () => {
    return (
        <div className="flex h-full sm:h-full">
            <Sidebar />
            <div className="h-full sm:h-screen flex-1">
                <NavMenu />
                <div className="container-fluid px-2" style={{ height: "auto" }}>
                    <h1 className="text-2xl font-semibold text-left mt-2 mb-2">Price</h1>
                </div>
            </div>
        </div>
    )
}
export default Price;