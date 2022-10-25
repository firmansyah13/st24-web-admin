import React from "react";
import NavMenu from "../Components/NavMenu";
import Sidebar from "../Components/SidebarMenu";

const Price = () => {
    return (
        <div className="flex h-full sm:h-full bg-gray-200">
            <Sidebar />
            <div className="h-full sm:h-screen flex-1">
                <NavMenu />
                <div className="container-fluid px-2" style={{ height: "auto", background: "#E5E7EB" }}>
                    <h1 className="text-2xl font-semibold text-left mt-2 mb-2">Price</h1>
                    <div className='flex max-h-screen'>
                        <div className="rounded-xl border p-5 shadow-md h-full w-full bg-white">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Price;