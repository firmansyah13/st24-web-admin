import React from "react";
import NavMenu from "../Components/NavMenu";
import Sidebar from "../Components/SidebarMenu";
import { Table, Tabs } from "flowbite-react";
import { FaRedoAlt } from "react-icons/fa";

const Tiket = () => {
    return (
        <div className="flex h-full sm:h-full">
            <Sidebar />
            <div className="h-full sm:h-screen flex-1">
                <NavMenu />
                <div className="container-fluid max-h-screen px-2">
                    <h1 className="text-2xl font-semibold text-left mt-2 mb-2">Tiket Deposit</h1>
                    <div class='flex max-h-screen'>
                        <div class="rounded-xl border p-5 shadow-md h-full w-full bg-white">
                            <form>
                                <div className="grid grid-cols-4 gap-4">
                                    <div>
                                        <div>
                                            <label for="first_name" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Pengirim</label>
                                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="pengirim" required />
                                        </div>
                                        <div>
                                            <label for="first_name" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Nama Toko</label>
                                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="nama_toko" required />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <label for="first_name" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Nilai Tiket</label>
                                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="nilai_tiket" required />
                                        </div>
                                        <div>
                                            <label for="countries" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-gray-400">Status Tiket</label>
                                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option selected>Tampilkan Semua</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <div>
                                                <label for="countries" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-gray-400">Tanggal Mulai</label>
                                                <div className="relative">
                                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                                    </div>
                                                    <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" placeholder="Select date" />
                                                </div>
                                            </div>
                                            <div>
                                                <label for="countries" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-gray-400">Tanggal Berakhir</label>
                                                <div className="relative">
                                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                                    </div>
                                                    <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" placeholder="Select date" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mt-6 sm:mt-12">
                                            <div>
                                                <button type="reset" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    <FaRedoAlt className="mr-2" />
                                                    Reset
                                                </button>
                                            </div>
                                            <br />
                                            <div>
                                                <button type="submit" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Light</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div className="-mt-4 mb-6">
                                <div className="mt-6">
                                    <Tabs.Group
                                        aria-label="Tabs with underline"
                                        style="underline"
                                    >
                                        <Tabs.Item title="Tiket">
                                            <Table hoverable={true}>
                                                <Table.Head>
                                                    <Table.HeadCell>
                                                        Insert Time
                                                    </Table.HeadCell>
                                                    <Table.HeadCell>
                                                        Trans Date
                                                    </Table.HeadCell>
                                                    <Table.HeadCell>
                                                        Pengirim
                                                    </Table.HeadCell>
                                                    <Table.HeadCell>
                                                        Nama Toko
                                                    </Table.HeadCell>
                                                    <Table.HeadCell>
                                                        Nilai
                                                    </Table.HeadCell>
                                                    <Table.HeadCell>
                                                        Bank
                                                    </Table.HeadCell>
                                                    <Table.HeadCell>
                                                        Keterangan
                                                    </Table.HeadCell>
                                                    <Table.HeadCell>
                                                        Message ID
                                                    </Table.HeadCell>
                                                    <Table.HeadCell>
                                                        <span className="sr-only">
                                                            Edit
                                                        </span>
                                                    </Table.HeadCell>
                                                </Table.Head>
                                                <Table.Body className="divide-y">
                                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                        
                                                    </Table.Row>
                                                </Table.Body>
                                            </Table>
                                        </Tabs.Item>
                                        <Tabs.Item title="Mutasi Bank">
                                            <Table hoverable={true}>
                                                <Table.Head>
                                                    <Table.HeadCell>
                                                        Trans Date
                                                    </Table.HeadCell>
                                                    <Table.HeadCell>
                                                        Mutasi
                                                    </Table.HeadCell>
                                                    <Table.HeadCell>
                                                        Saldo
                                                    </Table.HeadCell>
                                                    <Table.HeadCell>
                                                        Kode Bank
                                                    </Table.HeadCell>
                                                    <Table.HeadCell>
                                                        DB CR
                                                    </Table.HeadCell>
                                                    <Table.HeadCell>
                                                        CAB
                                                    </Table.HeadCell>
                                                    <Table.HeadCell>
                                                        Keterangan
                                                    </Table.HeadCell>
                                                    <Table.HeadCell>
                                                        Message ID
                                                    </Table.HeadCell>
                                                    <Table.HeadCell>
                                                        Tipe Rekening
                                                    </Table.HeadCell>
                                                    <Table.HeadCell>
                                                        Catatan
                                                    </Table.HeadCell>
                                                </Table.Head>
                                                <Table.Body className="divide-y">
                                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                        
                                                    </Table.Row>
                                                </Table.Body>
                                            </Table>
                                        </Tabs.Item>
                                    </Tabs.Group>
                                    {/* <Card></Card> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Tiket;