import React from "react";
import NavMenu from "../Components/NavMenu";
import Sidebar from "../Components/SidebarMenu";
import { FaEraser, FaSearch, FaTrashAlt } from "react-icons/fa";
import { Table } from "flowbite-react";

const Logs = () => {
    return (
        <div className="flex h-full sm:h-full bg-gray-200">
            <Sidebar />
            <div className="h-full sm:h-screen flex-1">
                <NavMenu />
                <div className="container-fluid px-2" style={{ height: "auto", background: "#E5E7EB" }}>
                    <h1 className="text-2xl font-semibold text-left mt-2 mb-2">Logs History</h1>
                    <div className='flex max-h-screen'>
                        <div className="rounded-xl border p-5 shadow-md h-full w-full bg-white">
                            <form>
                                <div className="grid grid-cols-4 gap-4">
                                    <div>
                                        <div>
                                            <label htmlFor="first_name" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Pilih Modul</label>
                                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="pengirim" required />
                                        </div>
                                        <div>
                                            <label htmlFor="countries" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-gray-400">Trans Date</label>
                                            <div className="relative">
                                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                                </div>
                                                <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" placeholder="Select date" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="first_name" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Modul</label>
                                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="nama_toko" required />
                                        </div>
                                        <div>
                                            <label htmlFor="first_name" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Message</label>
                                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="nama_toko" required />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="countries" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-gray-400">Pilih Tampilkan Data</label>
                                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option>Tampilkan Semua</option>
                                                <option value="">Terbaru</option>
                                                <option value="">Terlama</option>
                                            </select>
                                        </div>
                                        <div className="mt-8">
                                            <button type="reset" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                                <FaEraser className="mr-2" />
                                                Clear All Filter
                                            </button>
                                        </div>
                                        {/* <div>
                                            <label htmlFor="countries" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-gray-400">In/Out</label>
                                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option>Tampilkan Semua</option>
                                                <option value="">1</option>
                                            </select>
                                        </div> */}
                                    </div>
                                    <div>
                                        
                                        <div className="mb-3">
                                            <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                                <FaSearch className="mr-2" />
                                                Cari
                                            </button>
                                        </div>
                                        <div className="mb-3">
                                            <button type="submit" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                                <FaTrashAlt className="mr-2" />
                                                Hapus Semua Log
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div class="mt-4 mb-6 border-t">
                                <div className="mt-6">
                                    <Table hoverable={true}>
                                        <Table.Head className="bg-[#E8F8FD] text-[#223E92]">
                                            <Table.HeadCell>
                                                Trans Date
                                            </Table.HeadCell>
                                            <Table.HeadCell>
                                                MSISDN
                                            </Table.HeadCell>
                                            <Table.HeadCell>
                                                Nama Toko
                                            </Table.HeadCell>
                                            <Table.HeadCell>
                                                SMSCID
                                            </Table.HeadCell>
                                            <Table.HeadCell>
                                                Message
                                            </Table.HeadCell>
                                        </Table.Head>
                                        <Table.Body className="divide-y">
                                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">

                                            </Table.Row>
                                        </Table.Body>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Logs;