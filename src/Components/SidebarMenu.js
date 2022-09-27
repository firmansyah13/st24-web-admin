import React, { useState } from "react";
import logo from "../logo.svg"
// import { Sidebar, Item, ItemGroup } from "flowbite-react";
import { faChartPie, faClipboard, faInbox, faUser, faShoppingBag, faArrowLeft, faTable, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavMenu from "./NavMenu";
import './Sidebar.css';
import { Button } from "flowbite-react";
import Logo from "./logo.png"

const SidebarMenu = () => {
    const [open, setOpen] = useState(true);
    return (
        <div className="flex">
            <div
                className={` ${open ? "w-72" : "w-20 "
                    } h-screen p-5 pt-2.5 relative duration-300`}
            >

                {/* <FontAwesomeIcon icon={faChevronLeft} className={`absolute cursor-pointer -right-3 top-5 w-6 h-6 rounded-full border-grey hide-sidebar ${!open && "rotate-180"}`}
                        onClick={() => setOpen(!open)} /> */}

                <button className={`bg-white focus:ring-[#A1A1A1] focus:ring-1 outline-grey hover:bg-black px-2 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 absolute cursor-pointer -right-3 top-5 w-7 h-7 rounded-full ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)} >
                    <FontAwesomeIcon icon={faChevronLeft} style={{ color: '#A1A1A1', borderColor: "gray" }} />
                </button>

                <div className="flex gap-x-4 items-center">
                    <img
                        src={Logo}
                        className={`cursor-pointer duration-500 w-12 h-12 sm:w-10 sm:h-10 ${open && "rotate-[360deg]"
                            }`}
                    />
                    <h1
                        className={`text-black text-left font-medium text-sm duration-200 ${!open && "scale-0"
                            }`}
                    >
                        <span style={{ color: "#223E92", fontWeight: "bold", fontSize: "20px", textAlign: "left" }}>System</span>
                        <span style={{ fontWeight: "bold", fontSize: "20px" }}>Top</span>
                        <br />
                        <span style={{ color: "#223E92", fontWeight: "bold", fontSize: "20px" }}>Up</span>
                        <span style={{ fontWeight: "bold", fontSize: "20px" }}>24Jam</span>
                    </h1>
                </div>
                {/* <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-black-300 text-sm items-center gap-x-4 
                             ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
                        >
                            <FontAwesomeIcon icon={Menu.src} />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                {Menu.title}
                            </span>
                        </li>
                    ))}
                </ul> */}
                <div class="overflow-y-auto dark:bg-gray-800">
                    <ul class="pt-4 mt-4 space-y-2 dark:border-gray-700">
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-[#828E98] rounded-lg transition duration-75 hover:bg-[#F3F9FE] hover:text-[#223E92] dark:hover:bg-gray-700 dark:text-white group">
                                <svg viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-[#828E98] transition duration-75 dark:text-gray-400 group-hover:text-[#223E92] dark:group-hover:text-white" >
                                    <path d="M8.5022 11.25C8.5022 10.2835 7.7187 9.5 6.75224 9.5H4.75224C3.78574 9.5 3.00224 10.2835 3.00224 11.25V13.25C3.00224 14.2165 3.78574 15 4.75224 15H6.75224C7.7187 15 8.5022 14.2165 8.5022 13.25V11.25ZM4.75224 11H6.75224C6.89031 11 7.0022 11.1119 7.0022 11.25V13.25C7.0022 13.3881 6.89031 13.5 6.75224 13.5H4.75224C4.61417 13.5 4.50224 13.3881 4.50224 13.25V11.25C4.50224 11.1119 4.61417 11 4.75224 11ZM14.9997 11.25C14.9997 10.2835 14.2162 9.5 13.2497 9.5H11.2497C10.2832 9.5 9.4997 10.2835 9.4997 11.25V13.25C9.4997 14.2165 10.2832 15 11.2497 15H13.2497C14.2162 15 14.9997 14.2165 14.9997 13.25V11.25ZM11.2497 11H13.2497C13.3878 11 13.4997 11.1119 13.4997 11.25V13.25C13.4997 13.3881 13.3878 13.5 13.2497 13.5H11.2497C11.1116 13.5 10.9997 13.3881 10.9997 13.25V11.25C10.9997 11.1119 11.1116 11 11.2497 11ZM8.501 4.75C8.501 3.7835 7.7175 3 6.75098 3H4.75098C3.78448 3 3.00098 3.7835 3.00098 4.75V6.75C3.00098 7.7165 3.78448 8.5 4.75098 8.5H6.75098C7.7175 8.5 8.501 7.7165 8.501 6.75V4.75ZM4.75098 4.5H6.75098C6.88905 4.5 7.001 4.61193 7.001 4.75V6.75C7.001 6.88807 6.88905 7 6.75098 7H4.75098C4.61291 7 4.50098 6.88807 4.50098 6.75V4.75C4.50098 4.61193 4.61291 4.5 4.75098 4.5ZM14.9984 4.75C14.9984 3.7835 14.2149 3 13.2484 3H11.2484C10.2819 3 9.4984 3.7835 9.4984 4.75V6.75C9.4984 7.7165 10.2819 8.5 11.2484 8.5H13.2484C14.2149 8.5 14.9984 7.7165 14.9984 6.75V4.75ZM11.2484 4.5H13.2484C13.3865 4.5 13.4984 4.61193 13.4984 4.75V6.75C13.4984 6.88807 13.3865 7 13.2484 7H11.2484C11.1104 7 10.9984 6.88807 10.9984 6.75V4.75C10.9984 4.61193 11.1104 4.5 11.2484 4.5ZM3.25 0C1.45507 0 0 1.45507 0 3.25V14.75C0 16.5449 1.45507 18 3.25 18H14.75C16.5449 18 18 16.5449 18 14.75V3.25C18 1.45507 16.5449 0 14.75 0H3.25ZM1.5 3.25C1.5 2.2835 2.2835 1.5 3.25 1.5H14.75C15.7165 1.5 16.5 2.2835 16.5 3.25V14.75C16.5 15.7165 15.7165 16.5 14.75 16.5H3.25C2.2835 16.5 1.5 15.7165 1.5 14.75V3.25Z" />
                                </svg>

                                {/* <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white dark:text-gray-400" focusable="false" data-prefix="fas" data-icon="gem" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"></path></svg> */}
                                <span class="ml-4">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                                <span class="ml-3">Pesan</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                                <span class="ml-3">Rebate</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
                                <span class="ml-3">Tiket Deposit</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                                <span class="ml-3">Report</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                                <span class="ml-3">History</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
                                <span class="ml-3">Setting</span>
                            </a>
                        </li>
                    </ul>
                    <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white dark:text-gray-400" focusable="false" data-prefix="fas" data-icon="gem" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"></path></svg>
                                <span class="ml-4">Test</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                                <span class="ml-3">Documentation</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                                <span class="ml-3">Components</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
                                <span class="ml-3">Help</span>
                            </a>
                        </li>
                        <li>
                            <a class="flex items-center justify-center w-16 h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300" href="#">
                                <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="h-screen flex-1">
                <NavMenu />
                <div className="container-fluid">
                    <h1 className="text-2xl font-semibold ">Home Page</h1>
                </div>
            </div>
        </div>
    );
}
export default SidebarMenu;