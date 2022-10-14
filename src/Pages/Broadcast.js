import React from "react";
import NavMenu from "../Components/NavMenu";
import Sidebar from "../Components/SidebarMenu";
import { Select2 } from "select2-react-component";
// import { Select } from "flowbite-react";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

// const MyComponent = () => (
//   <Select options={options} />
// )

const Broadcast = () => {
    return (
        <div className="flex h-full sm:h-full">
            <Sidebar />
            <div className="h-full sm:h-screen flex-1">
                <NavMenu />
                <div className="container-fluid max-h-screen px-2">
                    <h1 className="text-2xl font-semibold text-left mt-2 mb-2">Broadcast</h1>
                    <div className='flex max-h-screen'>
                        <div className="rounded-xl border p-5 shadow-md h-full w-full bg-white">
                            <Select2 data={options}
                                value={this.value}
                                update={value => this.update(value)}>
                            </Select2>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Broadcast;