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
                                <svg viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-[#828E98] transition duration-75 dark:text-gray-400 group-hover:text-[#223E92] dark:group-hover:text-white">
                                    <path d="M8.5022 11.25C8.5022 10.2835 7.7187 9.5 6.75224 9.5H4.75224C3.78574 9.5 3.00224 10.2835 3.00224 11.25V13.25C3.00224 14.2165 3.78574 15 4.75224 15H6.75224C7.7187 15 8.5022 14.2165 8.5022 13.25V11.25ZM4.75224 11H6.75224C6.89031 11 7.0022 11.1119 7.0022 11.25V13.25C7.0022 13.3881 6.89031 13.5 6.75224 13.5H4.75224C4.61417 13.5 4.50224 13.3881 4.50224 13.25V11.25C4.50224 11.1119 4.61417 11 4.75224 11ZM14.9997 11.25C14.9997 10.2835 14.2162 9.5 13.2497 9.5H11.2497C10.2832 9.5 9.4997 10.2835 9.4997 11.25V13.25C9.4997 14.2165 10.2832 15 11.2497 15H13.2497C14.2162 15 14.9997 14.2165 14.9997 13.25V11.25ZM11.2497 11H13.2497C13.3878 11 13.4997 11.1119 13.4997 11.25V13.25C13.4997 13.3881 13.3878 13.5 13.2497 13.5H11.2497C11.1116 13.5 10.9997 13.3881 10.9997 13.25V11.25C10.9997 11.1119 11.1116 11 11.2497 11ZM8.501 4.75C8.501 3.7835 7.7175 3 6.75098 3H4.75098C3.78448 3 3.00098 3.7835 3.00098 4.75V6.75C3.00098 7.7165 3.78448 8.5 4.75098 8.5H6.75098C7.7175 8.5 8.501 7.7165 8.501 6.75V4.75ZM4.75098 4.5H6.75098C6.88905 4.5 7.001 4.61193 7.001 4.75V6.75C7.001 6.88807 6.88905 7 6.75098 7H4.75098C4.61291 7 4.50098 6.88807 4.50098 6.75V4.75C4.50098 4.61193 4.61291 4.5 4.75098 4.5ZM14.9984 4.75C14.9984 3.7835 14.2149 3 13.2484 3H11.2484C10.2819 3 9.4984 3.7835 9.4984 4.75V6.75C9.4984 7.7165 10.2819 8.5 11.2484 8.5H13.2484C14.2149 8.5 14.9984 7.7165 14.9984 6.75V4.75ZM11.2484 4.5H13.2484C13.3865 4.5 13.4984 4.61193 13.4984 4.75V6.75C13.4984 6.88807 13.3865 7 13.2484 7H11.2484C11.1104 7 10.9984 6.88807 10.9984 6.75V4.75C10.9984 4.61193 11.1104 4.5 11.2484 4.5ZM3.25 0C1.45507 0 0 1.45507 0 3.25V14.75C0 16.5449 1.45507 18 3.25 18H14.75C16.5449 18 18 16.5449 18 14.75V3.25C18 1.45507 16.5449 0 14.75 0H3.25ZM1.5 3.25C1.5 2.2835 2.2835 1.5 3.25 1.5H14.75C15.7165 1.5 16.5 2.2835 16.5 3.25V14.75C16.5 15.7165 15.7165 16.5 14.75 16.5H3.25C2.2835 16.5 1.5 15.7165 1.5 14.75V3.25Z" />
                                </svg>

                                {/* <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white dark:text-gray-400" focusable="false" data-prefix="fas" data-icon="gem" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"></path></svg> */}
                                <span class="ml-3">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-[#828E98] rounded-lg transition duration-75 hover:bg-[#F3F9FE] hover:text-[#223E92] dark:hover:bg-gray-700 dark:text-white group">
                                <svg viewBox="0 0 20 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-[#828E98] transition duration-75 dark:text-gray-400 group-hover:text-[#223E92] dark:group-hover:text-white">
                                    <path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C8.3817 20 6.81782 19.6146 5.41286 18.888L1.58704 19.9553C0.92212 20.141 0.23258 19.7525 0.04691 19.0876C-0.01454 18.8676 -0.0145099 18.6349 0.0469501 18.4151L1.11461 14.5922C0.38637 13.186 0 11.6203 0 10C0 4.47715 4.47715 0 10 0ZM10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 11.4696 1.87277 12.8834 2.57303 14.1375L2.72368 14.4072L1.61096 18.3914L5.59755 17.2792L5.86709 17.4295C7.12006 18.1281 8.5322 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5ZM6.75 11H11.2483C11.6625 11 11.9983 11.3358 11.9983 11.75C11.9983 12.1297 11.7161 12.4435 11.35 12.4932L11.2483 12.5H6.75C6.33579 12.5 6 12.1642 6 11.75C6 11.3703 6.28215 11.0565 6.64823 11.0068L6.75 11H11.2483H6.75ZM6.75 7.5H13.2545C13.6687 7.5 14.0045 7.83579 14.0045 8.25C14.0045 8.6297 13.7223 8.9435 13.3563 8.9932L13.2545 9H6.75C6.33579 9 6 8.6642 6 8.25C6 7.8703 6.28215 7.55651 6.64823 7.50685L6.75 7.5H13.2545H6.75Z"/>
                                </svg>

                                {/* <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg> */}
                                <span class="ml-3">&nbsp;Pesan</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-[#828E98] rounded-lg transition duration-75 hover:bg-[#F3F9FE] hover:text-[#223E92] dark:hover:bg-gray-700 dark:text-white group">
                                <svg viewBox="0 0 21 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-[#828E98] transition duration-75 dark:text-gray-400 group-hover:text-[#223E92] dark:group-hover:text-white">
                                    <path d="M19.9998 2.25C19.9998 1.00736 18.9925 0 17.7498 0H12.2845C11.4218 0 10.5946 0.34297 9.985 0.95334L1.48531 9.4632C0.216994 10.7334 0.218624 12.7913 1.48909 14.0592L5.95079 18.5143C7.22195 19.7807 9.2777 19.7798 10.5472 18.5129L10.5502 18.5099C10.3111 17.9908 10.1474 17.4401 10.0641 16.8745L9.487 17.4518C8.8033 18.134 7.69493 18.1345 7.01006 17.4522L2.54884 12.9977C1.86898 12.3191 1.86389 11.2207 2.53412 10.5358L11.0463 2.01333C11.3745 1.68467 11.82 1.5 12.2845 1.5H17.7498C18.164 1.5 18.4998 1.83579 18.4998 2.25V7.71196C18.4998 8.176 18.3155 8.6211 17.9874 8.9492L16.8731 10.0639C17.4387 10.147 17.9894 10.3106 18.5085 10.5496L19.0482 10.0098C19.6575 9.4003 19.9998 8.5738 19.9998 7.71196V2.25ZM16.4998 5.00216C16.4998 4.17374 15.8282 3.50218 14.9998 3.50218C14.1714 3.50218 13.4998 4.17374 13.4998 5.00216C13.4998 5.83057 14.1714 6.50213 14.9998 6.50213C15.8282 6.50213 16.4998 5.83057 16.4998 5.00216ZM12.7803 10.2803C13.0732 9.9874 13.0732 9.5126 12.7803 9.2197C12.4874 8.9268 12.0126 8.9268 11.7197 9.2197L9.7197 11.2197C9.4268 11.5126 9.4268 11.9874 9.7197 12.2803L11.7197 14.2803C12.0126 14.5732 12.4874 14.5732 12.7803 14.2803C13.0732 13.9874 13.0732 13.5126 12.7803 13.2197L12.0607 12.5H16C16.6922 12.5 17.3689 12.7053 17.9445 13.0899C18.5201 13.4744 18.9687 14.0211 19.2336 14.6606C19.4985 15.3001 19.5678 16.0039 19.4327 16.6828C19.2977 17.3617 18.9644 17.9854 18.4749 18.4749C17.9854 18.9644 17.3617 19.2977 16.6828 19.4327C16.0039 19.5678 15.3001 19.4985 14.6606 19.2336C14.0211 18.9687 13.4744 18.5201 13.0899 17.9445C12.7053 17.3689 12.5 16.6922 12.5 16C12.5 15.5858 12.1642 15.25 11.75 15.25C11.3358 15.25 11 15.5858 11 16C11 16.9889 11.2932 17.9556 11.8427 18.7779C12.3921 19.6001 13.173 20.241 14.0866 20.6194C15.0002 20.9978 16.0055 21.0969 16.9755 20.9039C17.9454 20.711 18.8363 20.2348 19.5355 19.5355C20.2348 18.8363 20.711 17.9454 20.9039 16.9755C21.0969 16.0055 20.9978 15.0002 20.6194 14.0866C20.241 13.173 19.6001 12.3921 18.7779 11.8427C17.9556 11.2932 16.9889 11 16 11H12.0607L12.7803 10.2803Z"/>
                                </svg>

                                {/* <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg> */}
                                <span class="ml-3">&nbsp;Rebate</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-[#828E98] rounded-lg transition duration-75 hover:bg-[#F3F9FE] hover:text-[#223E92] dark:hover:bg-gray-700 dark:text-white group">
                                <svg viewBox="0 0 20 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-[#828E98] transition duration-75 dark:text-gray-400 group-hover:text-[#223E92] dark:group-hover:text-white">
                                    <path d="M18.25 0C19.2165 0 20.0001 0.7835 20.0001 1.74996V4.01021C20.0001 4.40055 19.7008 4.72565 19.3118 4.75772C18.1512 4.85342 17.25 5.8273 17.25 7C17.25 8.1727 18.1512 9.1466 19.3118 9.2423C19.7008 9.2744 20.0001 9.5995 20.0001 9.9898V12.25C20.0001 13.2165 19.2165 14 18.25 14H1.75C0.7835 14 0 13.2165 0 12.2499L0.000289917 9.9896C0.000339917 9.5994 0.29964 9.2744 0.68856 9.2423C1.84903 9.1464 2.75 8.1726 2.75 7C2.75 5.8274 1.84903 4.8536 0.68856 4.75775C0.29964 4.72562 0.000339917 4.40063 0.000289917 4.01039L0 1.75C0 0.7835 0.7835 0 1.75 0H18.25ZM18.5001 3.38474V1.75C18.5001 1.61193 18.3881 1.5 18.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.7499L1.50021 3.38483C3.09313 3.82406 4.25 5.284 4.25 7C4.25 8.716 3.09313 10.1759 1.50021 10.6152L1.5 12.25C1.5 12.3881 1.61193 12.5 1.75 12.5H18.25C18.3881 12.5 18.5001 12.3881 18.5001 12.25V10.6153C16.907 10.1761 15.75 8.7161 15.75 7C15.75 5.3525 16.8163 3.94108 18.3111 3.44229L18.5001 3.38474Z"/>
                                </svg>

                                {/* <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg> */}
                                <span class="ml-3">&nbsp;Tiket Deposit</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-[#828E98] rounded-lg transition duration-75 hover:bg-[#F3F9FE] hover:text-[#223E92] dark:hover:bg-gray-700 dark:text-white group">
                                <svg viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-[#828E98] transition duration-75 dark:text-gray-400 group-hover:text-[#223E92] dark:group-hover:text-white">
                                    <path d="M9.75 0C10.9409 0 11.9156 0.92516 11.9948 2.09595L12 2.25C12 2.16531 11.9953 2.0817 11.9862 1.99944L13.75 2C14.9926 2 16 3.00736 16 4.25V17.75C16 18.9926 14.9926 20 13.75 20H2.25C1.00736 20 0 18.9926 0 17.75V4.25C0 3.00736 1.00736 2 2.25 2L4.01379 1.99944C4.00733 2.05774 4.0031 2.11671 4.00119 2.17626L4 2.25C4 1.00736 5.00736 0 6.25 0H9.75ZM9.75 4.5H6.25C5.45595 4.5 4.75797 4.08867 4.35751 3.46746L4.37902 3.5002L2.25 3.5C1.83579 3.5 1.5 3.83579 1.5 4.25V17.75C1.5 18.1642 1.83579 18.5 2.25 18.5H13.75C14.1642 18.5 14.5 18.1642 14.5 17.75V4.25C14.5 3.83579 14.1642 3.5 13.75 3.5L11.621 3.5002L11.6425 3.46746C11.242 4.08867 10.5441 4.5 9.75 4.5ZM9.75 1.5H6.25C5.83579 1.5 5.5 1.83579 5.5 2.25C5.5 2.66421 5.83579 3 6.25 3H9.75C10.1642 3 10.5 2.66421 10.5 2.25C10.5 1.83579 10.1642 1.5 9.75 1.5ZM4 12.5H8C8.4142 12.5 8.75 12.1642 8.75 11.75C8.75 11.3358 8.4142 11 8 11H4C3.58579 11 3.25 11.3358 3.25 11.75C3.25 12.1642 3.58579 12.5 4 12.5ZM4 8.5H12C12.4142 8.5 12.75 8.1642 12.75 7.75C12.75 7.33579 12.4142 7 12 7H4C3.58579 7 3.25 7.33579 3.25 7.75C3.25 8.1642 3.58579 8.5 4 8.5ZM4 16.5H10C10.4142 16.5 10.75 16.1642 10.75 15.75C10.75 15.3358 10.4142 15 10 15H4C3.58579 15 3.25 15.3358 3.25 15.75C3.25 16.1642 3.58579 16.5 4 16.5Z"/>
                                </svg>

                                {/* <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg> */}
                                <span class="ml-3">&nbsp;Report</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-[#828E98] rounded-lg transition duration-75 hover:bg-[#F3F9FE] hover:text-[#223E92] dark:hover:bg-gray-700 dark:text-white group">
                                <svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-[#828E98] transition duration-75 dark:text-gray-400 group-hover:text-[#223E92] dark:group-hover:text-white">
                                    <path d="M10 0C15.523 0 20 4.478 20 10C20 15.522 15.523 20 10 20C4.477 20 0 15.522 0 10C0 4.478 4.477 0 10 0ZM10 1.667C5.405 1.667 1.667 5.405 1.667 10C1.667 14.595 5.405 18.333 10 18.333C14.595 18.333 18.333 14.595 18.333 10C18.333 5.405 14.595 1.667 10 1.667ZM9.25 4C9.6295 4 9.9435 4.28233 9.9931 4.64827L10 4.75V10H13.25C13.664 10 14 10.336 14 10.75C14 11.1295 13.7177 11.4435 13.3517 11.4931L13.25 11.5H9.25C8.8705 11.5 8.5565 11.2177 8.5069 10.8517L8.5 10.75V4.75C8.5 4.336 8.836 4 9.25 4Z"/>
                                </svg>

                                {/* <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg> */}
                                <span class="ml-3">&nbsp;History</span>
                            </a>
                        </li>
                        <li> 
                            <a href="#" class="flex items-center p-2 text-base font-normal text-[#828E98] rounded-lg transition duration-75 hover:bg-[#F3F9FE] hover:text-[#223E92] dark:hover:bg-gray-700 dark:text-white group">
                                <svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-[#828E98] transition duration-75 dark:text-gray-400 group-hover:text-[#223E92] dark:group-hover:text-white">
                                    <path d="M10.0127 0.25C10.7466 0.25846 11.4777 0.34326 12.1942 0.50304C12.5069 0.57279 12.7408 0.83351 12.7763 1.15196L12.9465 2.67881C13.0235 3.37986 13.6155 3.91084 14.3211 3.91158C14.5108 3.91188 14.6984 3.87238 14.8737 3.79483L16.2743 3.17956C16.5656 3.05159 16.906 3.12136 17.1234 3.35362C18.1356 4.43464 18.8894 5.73115 19.3282 7.14558C19.4228 7.45058 19.3139 7.78203 19.0568 7.9715L17.8154 8.8866C17.4612 9.1468 17.2521 9.56 17.2521 9.9995C17.2521 10.4389 17.4612 10.8521 17.8161 11.1129L19.0587 12.0283C19.3158 12.2177 19.4248 12.5492 19.3302 12.8543C18.8916 14.2685 18.1382 15.5649 17.1266 16.6461C16.9093 16.8783 16.5693 16.9483 16.278 16.8206L14.8716 16.2045C14.4693 16.0284 14.0072 16.0542 13.627 16.274C13.2468 16.4937 12.9938 16.8812 12.9454 17.3177L12.7764 18.8444C12.7415 19.1592 12.5126 19.4182 12.2045 19.4915C10.7561 19.8361 9.247 19.8361 7.79852 19.4915C7.49039 19.4182 7.26153 19.1592 7.22667 18.8444L7.05785 17.32C7.00826 16.8843 6.75483 16.498 6.37491 16.279C5.995 16.06 5.53369 16.0343 5.13269 16.2094L3.72606 16.8256C3.43471 16.9533 3.09452 16.8833 2.87727 16.6509C1.86511 15.5685 1.11168 14.2705 0.673691 12.8548C0.579351 12.5499 0.68835 12.2186 0.94533 12.0293L2.18867 11.1133C2.54281 10.8531 2.75196 10.4399 2.75196 10.0005C2.75196 9.561 2.54281 9.1478 2.1882 8.8873L0.945651 7.97285C0.688281 7.78345 0.579181 7.45178 0.673861 7.14658C1.11261 5.73215 1.86643 4.43564 2.87861 3.35462C3.09608 3.12236 3.43643 3.05259 3.72773 3.18056L5.12811 3.79572C5.53105 3.97256 5.99429 3.94585 6.37626 3.72269C6.75658 3.50209 7.00977 3.11422 7.05866 2.67764L7.22873 1.15196C7.26425 0.83335 7.49835 0.57254 7.81129 0.50294C8.5286 0.34342 9.2604 0.25865 10.0127 0.25ZM10.0128 1.7499C9.5588 1.75524 9.106 1.79443 8.6583 1.86702L8.5494 2.84418C8.4476 3.75368 7.92052 4.56102 7.13091 5.01903C6.33646 5.48317 5.36785 5.53903 4.52507 5.16917L3.62678 4.77456C3.05485 5.46873 2.59963 6.25135 2.27901 7.09168L3.07681 7.67879C3.81562 8.2216 4.25196 9.0837 4.25196 10.0005C4.25196 10.9172 3.81562 11.7793 3.07759 12.3215L2.27853 12.9102C2.59887 13.752 3.05417 14.5361 3.62649 15.2316L4.53162 14.8351C5.36971 14.4692 6.33173 14.5227 7.12402 14.9794C7.9163 15.4361 8.4448 16.2417 8.5485 17.1526L8.6574 18.1365C9.5471 18.2878 10.4559 18.2878 11.3456 18.1365L11.4545 17.1527C11.5553 16.2421 12.0832 15.4337 12.8765 14.9753C13.6697 14.5168 14.6337 14.463 15.4733 14.8305L16.3777 15.2267C16.9495 14.5323 17.4046 13.7495 17.7252 12.909L16.9272 12.3211C16.1884 11.7783 15.7521 10.9162 15.7521 9.9995C15.7521 9.0827 16.1884 8.2206 16.9263 7.67847L17.7232 7.09109C17.4026 6.25061 16.9473 5.46784 16.3753 4.77356L15.4788 5.16737C15.1134 5.32901 14.7183 5.4122 14.3192 5.41158C12.8495 5.41004 11.616 4.30355 11.4556 2.84383L11.3467 1.8667C10.9012 1.7942 10.4531 1.75512 10.0128 1.7499ZM10.0002 6.24995C12.0713 6.24995 13.7502 7.92888 13.7502 10C13.7502 12.071 12.0713 13.75 10.0002 13.75C7.92912 13.75 6.25018 12.071 6.25018 10C6.25018 7.92888 7.92912 6.24995 10.0002 6.24995ZM10.0002 7.74995C8.7575 7.74995 7.75018 8.7573 7.75018 10C7.75018 11.2426 8.7575 12.25 10.0002 12.25C11.2428 12.25 12.2502 11.2426 12.2502 10C12.2502 8.7573 11.2428 7.74995 10.0002 7.74995Z"/>
                                </svg>

                                {/* <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg> */}
                                <span class="ml-3">&nbsp;Setting</span>
                            </a>
                        </li>
                    </ul>
                    <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                {/* <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white dark:text-gray-400" focusable="false" data-prefix="fas" data-icon="gem" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"></path></svg> */}
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