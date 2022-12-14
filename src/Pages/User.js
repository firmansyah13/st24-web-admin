import React, { useState, useEffect } from "react";
import NavMenu from "../Components/NavMenu";
import Sidebar from "../Components/SidebarMenu";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Label, Checkbox, Select } from "flowbite-react";
import axios from "axios";
import { data } from "autoprefixer";

const User = () => {
    const [showModal, setShowModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(!showPassword);
    }
    const url = "http://localhost:3005/users"
    const [users, setUsers] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(url, {
                    data: {
                        KODE_USER: data.KODE_USER,
                        KET: data.KET
                    },
                });

                setUsers(response.data);
                // console.log(response.data);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div className="flex h-full sm:h-full bg-gray-200">
            <Sidebar />
            <div className="h-full sm:h-screen flex-1">
                <NavMenu />
                <div className="container-fluid max-h-screen px-2" style={{ height: "auto", background: "#E5E7EB" }}>
                    <h1 className="text-2xl font-semibold text-left ml-4 mt-2 mb-2">
                        User Administration
                    </h1>
                    <div className='flex max-h-screen'>
                        <div className="rounded-xl border p-5 shadow-md h-full w-full bg-white">
                            <div className="grid grid-cols-3 gap-4 -pb-4">
                                <div className="col-span-2">
                                    <form className="flex items-center w-full">
                                        <label htmlFor="simple-search" className="sr-only">Search</label>
                                        <div className="relative w-full">
                                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                            </div>
                                            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                                        </div>
                                        <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                            <span className="sr-only">Search</span>
                                        </button>
                                    </form>
                                </div>
                                <div>
                                    <button className="flex mt-1 right-9 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mx-auto transition duration-150 ease-in-out hover:bg-blue-600 bg-blue-500 text-white px-4 sm:px-8 sm:mb-12 py-2.5 text-xs sm:text-sm  focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full"
                                        onClick={() => setShowModal(true)}>
                                        &nbsp;List User
                                    </button>
                                    {showModal ? (
                                        <>
                                            <div className="flex mt-12 py-12 w-auto z-10 fixed top-0 right-0 bottom-0 left-0 outline-none focus:outline-none w-full md:inset-0 h-modal md:h-full">
                                                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                                                    <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                                                        <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Enter Billing Details</h1>
                                                        <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">User Login</label>
                                                        <div className="relative mb-6">
                                                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                                            </div>
                                                            <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                                                        </div>
                                                        <label htmlFor="cvc" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">CVC</label>
                                                        <div className="relative mb-5 mt-2">
                                                            <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                                    <circle cx="12" cy="12" r="9"></circle>
                                                                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                                                    <polyline points="11 12 12 12 12 16 13 16"></polyline>
                                                                </svg>
                                                            </div>
                                                            <input id="cvc" className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="MM/YY" />
                                                        </div>
                                                        <div className="flex items-center justify-start w-full">
                                                            <button claclassNamess="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Submit</button>
                                                            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onClick={() => setShowModal(false)}>Cancel</button>
                                                        </div>
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
                                        </>
                                    ) : null}
                                </div>
                            </div>

                            <div class="-mt-6 mb-6 border-t">
                                <div className="mt-6">
                                    <div>
                                        <label htmlFor="input-group-1" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">User Login</label>
                                        <div className="relative mb-6">
                                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                            </div>
                                            <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="input-group-1" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                                        <div className="relative mb-6">
                                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" stroke="currentColor" viewBox="0 0 448 512">
                                                    <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                                                </svg>
                                            </div>
                                            <input type={showPassword ? "text" : "password"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required />
                                            <button onClick={togglePassword} className="text-gray-500 absolute right-1.5 bottom-1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><FontAwesomeIcon icon={faKey} /></button>
                                        </div>
                                    </div>
                                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">User Privilage</label>

                                    <div className="grid grid-cols-4 gap-4 mb-3">
                                        <div className="text-left">
                                            <Checkbox id="promotion" />
                                            <Label htmlFor="promotion">
                                                MGMT TOKO
                                            </Label>
                                            <br />
                                            <Checkbox id="promotion" />
                                            <Label htmlFor="promotion">
                                                MGMT TOKO (NOFIN)
                                            </Label>
                                            <br />
                                            <Checkbox id="promotion" />
                                            <Label htmlFor="promotion">
                                                MGMT USER
                                            </Label>
                                            <br />
                                            <Checkbox id="promotion" />
                                            <Label htmlFor="promotion">
                                                MGMT PRODUK
                                            </Label>
                                            <br />
                                            <Checkbox id="promotion" />
                                            <Label htmlFor="promotion">
                                                MGMT HARGA
                                            </Label>
                                            <br />
                                        </div>
                                        <div className="text-left">
                                            <Checkbox id="promotion" />
                                            <Label htmlFor="promotion">
                                                TRANSAKSI
                                            </Label>
                                            <br />
                                            <Checkbox id="promotion" />
                                            <Label htmlFor="promotion">
                                                TRANSAKSI (NOFIN)
                                            </Label>
                                            <br />
                                            <Checkbox id="promotion" />
                                            <Label htmlFor="promotion">
                                                SMS IN/OUT BOX
                                            </Label>
                                            <br />
                                            <Checkbox id="promotion" />
                                            <Label htmlFor="promotion">
                                                SYSTEM LOGS
                                            </Label>
                                            <br />
                                            <Checkbox id="promotion" />
                                            <Label htmlFor="promotion">
                                                TIKET DEPOSIT
                                            </Label>
                                            <br />
                                        </div>
                                        <div className="text-left">
                                            <Checkbox id="promotion" />
                                            <Label htmlFor="promotion">
                                                REPORT
                                            </Label>
                                            <br />
                                            <Checkbox id="promotion" />
                                            <Label htmlFor="promotion">
                                                KEUANGAN
                                            </Label>
                                            <br />
                                            <Checkbox id="promotion" />
                                            <Label htmlFor="promotion">
                                                TERM SETTING
                                            </Label>
                                            <br />
                                            <Checkbox id="promotion" />
                                            <Label htmlFor="promotion">
                                                ROUTES
                                            </Label>
                                            <br />
                                            <Checkbox id="promotion" />
                                            <Label htmlFor="promotion">
                                                SMS CP
                                            </Label>
                                            <br />
                                        </div>
                                        <div className="text-left">
                                            <Checkbox id="promotion" />
                                            <Label htmlFor="promotion">
                                                BROADCAST SMS
                                            </Label>
                                            <br />
                                            <Checkbox id="promotion" />
                                            <Label htmlFor="promotion">
                                                REBATE
                                            </Label>
                                            <br />
                                            <Checkbox id="promotion" />
                                            <Label htmlFor="promotion">
                                                LOOK UP
                                            </Label>
                                            <br />
                                            <Checkbox id="promotion" />
                                            <Label htmlFor="promotion">
                                                GANTI PASSWORD
                                            </Label>
                                        </div>
                                    </div>
                                </div>
                                <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">User Level</label>
                                <div className="grid grid-cols-3 gap-4">
                                    <div id="select" className="col-span-2">
                                        {loading && <div>Loading</div>}
                                        {!loading && (
                                            <Select>
                                                {users.map(item =>
                                                    <option value={item[1]}>{item[1]}</option>
                                                )}
                                            </Select>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="remember" />
                                        <Label htmlFor="remember">
                                            Enable Web Admin
                                        </Label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
export default User;