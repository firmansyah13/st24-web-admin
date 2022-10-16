import React from "react";
import NavMenu from "../Components/NavMenu";
import Sidebar from "../Components/SidebarMenu";
import Select from "react-select";
import { Label, Textarea } from "flowbite-react";

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
                <div className="container-fluid px-2" style={{ height: "auto" }}>
                    <h1 className="text-2xl font-semibold text-left mt-2 mb-2">Broadcast</h1>
                    <div className='flex max-h-screen'>
                        <div className="rounded-xl border p-5 shadow-md h-full w-full bg-white">
                            <form>
                                <div>
                                    <label htmlFor="countries" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-gray-400">Send To List of Recipient</label>
                                    <Select options={options} value={options.values.value}></Select>
                                </div>
                                <div id="textarea">
                                    <div className="mb-2 text-left block">
                                        <Label
                                            htmlFor="comment"
                                            value="Your message"
                                        />
                                    </div>
                                    <Textarea
                                        id="comment"
                                        placeholder="Leave a comment..."
                                        required={true}
                                        rows={4}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mt-5 px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                >
                                    Broadcast
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Broadcast;