import React, { useState } from "react";
import { Tabs, Button, Card } from "flowbite-react";
import NavMenu from "../Components/NavMenu";
import Sidebar from "../Components/SidebarMenu";
import { FaFolderOpen, FaFileExcel } from "react-icons/fa";

const Rebate = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="flex h-full sm:h-full">
            <Sidebar />
            <div className="h-full sm:h-screen flex-1">
                <NavMenu />
                <div className="container-fluid max-h-screen px-2">
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
                            <div className='flex max-h-screen'>
                                <div className="rounded-xl border p-5 shadow-md h-full w-full bg-white">
                                    <div className="flex gap-4">
                                        <div className="flex">
                                            <Button
                                                outline={true}
                                                pill={true}
                                            >
                                                <FaFolderOpen className="h-6 w-6" />
                                                <span className="ml-2">Open</span>
                                            </Button>
                                        </div>
                                        <div className="flex">
                                            <Button
                                                outline={true}
                                                pill={true}
                                                onClick={() => setShowModal(true)}
                                            >
                                                <FaFileExcel className="h-6 w-6" />
                                                <span className="ml-2">Import</span>
                                            </Button>
                                            {showModal ? (
                                                <>
                                                    <div className="flex mt-12 py-12 w-auto z-10 fixed top-0 right-0 bottom-0 left-0 outline-none focus:outline-none w-full md:inset-0 h-modal md:h-full">
                                                        <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                                                            <div className="flex justify-center items-center w-full">
                                                                <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                                                                    <label for="dropzone-file" className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                                        <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                                                            <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                                            <p className="text-xs text-gray-500 dark:text-gray-400">XLS, XLSX, CSV (MAX. 100mb)</p>
                                                                        </div>
                                                                        <input id="dropzone-file" type="file" className="hidden" />
                                                                    </label>
                                                                    <button className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onClick={() => setShowModal(false)} aria-label="close modal" role="button">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                                            <line x1="18" y1="6" x2="6" y2="18" />
                                                                            <line x1="6" y1="6" x2="18" y2="18" />
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : null}
                                        </div>
                                    </div>

                                    <div className="mt-4 mb-6 border-t">
                                        <div className="mt-6">
                                            <Card></Card>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tabs.Item>
                    </Tabs.Group>
                </div>
            </div>
        </div >
    )
}
export default Rebate;