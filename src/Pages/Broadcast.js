import React from "react";
import NavMenu from "../Components/NavMenu";
import Sidebar from "../Components/SidebarMenu";
import Select from "react-select";

const Broadcast = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <div className="flex h-full sm:h-full">
            <Sidebar />
            <div className="h-full sm:h-screen flex-1">
                <NavMenu />
                <div className="container-fluid max-h-screen px-2">
                    <h1 className="text-2xl font-semibold text-left mt-2 mb-2">Broadcast</h1>
                    <div className='flex max-h-screen'>
                        <div className="rounded-xl border p-5 shadow-md h-full w-full bg-white">
                            <form>
                                <div>
                                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an option</label>
                                    <Select options={options} value={options.valueOf.name.value}></Select>
                                </div>

                                {/* <Select2 data={options} value={options.value} update={value => this.update(value)}></Select2> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Broadcast;