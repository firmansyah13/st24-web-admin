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
    const Menus = [
        { title: "Dashboard", src: "./assets/Dasboard.svg" },
        { title: "Inbox", src: "Chat" },
        { title: "Accounts", src: "User", gap: true },
        { title: "Schedule ", src: "Calendar" },
        { title: "Search", src: "Search" },
        { title: "Analytics", src: "Chart" },
        { title: "Files ", src: "Folder", gap: true },
        { title: "Setting", src: "Setting" },
    ];

    return (
        <div className="flex">
            <div
                className={` ${open ? "w-72" : "w-20 "
                    } h-screen p-5 pt-2.5 relative duration-300`}
            >

                {/* <FontAwesomeIcon icon={faChevronLeft} className={`absolute cursor-pointer -right-3 top-5 w-6 h-6 rounded-full border-grey hide-sidebar ${!open && "rotate-180"}`}
                        onClick={() => setOpen(!open)} /> */}
                       
                <button type="button"  className={`bg-white border-grey-700 hover:bg-black px-2 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 absolute cursor-pointer -right-3 top-5 w-7 h-7 rounded-full ${!open && "rotate-180"}`} 
                onClick= {() => setOpen(!open)} >
                    <FontAwesomeIcon icon={faChevronLeft} style={{color: '#A1A1A1', borderColor: "gray" }} />
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
                        <span style={{  fontWeight: "bold", fontSize: "20px" }}>Top</span>
                        <br />
                        <span style={{  color: "#223E92", fontWeight: "bold", fontSize: "20px" }}>Up</span>
                        <span style={{  fontWeight: "bold", fontSize: "20px" }}>24Jam</span>
                    </h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black-300 text-sm items-center gap-x-4 
                             ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
                        >
                            <img src={Menu.src} />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                {Menu.title}
                            </span>
                        </li>
                    ))}
                </ul>
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