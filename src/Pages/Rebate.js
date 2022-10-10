import React from "react";
import { Tabs, Button, Card } from "flowbite-react";
import NavMenu from "../Components/NavMenu";
import Sidebar from "../Components/SidebarMenu";
import { FaFolderOpen, FaFileExcel } from "react-icons/fa";

const Rebate = () => {
    return (
        <div className="flex sm:h-full">
            <Sidebar />
            <div className="h-full flex-1">
                <NavMenu />
                <div className="container-fluid px-2">
                    <h1 className="text-2xl font-semibold text-left mt-2 mb-2">Rebate</h1>
                    <Tabs.Group
                        aria-label="Tabs with underline"
                        style="underline"
                    >
                        <Tabs.Item title="Hitung Rebate">
                            <Card>
                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <label>Tanggal Awal</label>
                                        <div className="relative">
                                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                            </div>
                                            <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" placeholder="Select date" />
                                        </div>
                                    </div>
                                    <div>
                                        <label>Tanggal Akhir</label>
                                        <div className="relative">
                                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                            </div>
                                            <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" placeholder="Select date" />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap sm:mt-6 mt-12 gap-2">
                                        <Button color="gray" pill={true}>Hitung</Button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <Tabs.Group
                                        aria-label="Full width tabs"
                                        style="fullWidth"
                                    >
                                        <Tabs.Item title="Rekap">
                                            <Card>
                                                Profile content
                                            </Card>
                                        </Tabs.Item>
                                    </Tabs.Group>
                                </div>
                            </Card>
                        </Tabs.Item>
                        <Tabs.Item title="Import Rebate">
                            <Card>
                                <div className="absolute mt-4 mb-12">
                                    <div className="absolute">
                                        <Button
                                            outline={true}
                                            pill={true}
                                        >
                                            <FaFolderOpen className="h-6 w-6" />
                                            <span className="ml-2">Open</span>
                                        </Button>
                                    </div>
                                    <div className="absolute ml-28">
                                        <Button
                                            outline={true}
                                            pill={true}
                                        >
                                            <FaFileExcel className="h-6 w-6" />
                                            <span className="ml-2">Import</span>
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </Tabs.Item>
                    </Tabs.Group>
                </div>
            </div>
        </div >
    )
}
export default Rebate;