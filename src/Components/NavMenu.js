import React from "react";
import { Navbar, Dropdown, Avatar, Label, TextInput } from "flowbite-react";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

const NavMenu = () => {
    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <div class="container flex flex-wrap justify-between items-center py-3.5 mx-auto sm:w-auto">
                {/* <Navbar.Brand href="https://flowbite.com/"> */}
                {/*<img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite
                </span> */}
                {/* </Navbar.Brand> */}
                <div className="flex items-center"></div>
                <Navbar.Toggle />

                <Navbar.Collapse>
                    <form>
                        {/* <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label> */}
                        <div class="relative w-80 sm:w-auto">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="default-search" class="block flex p-1 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                                {/* <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                        </div>
                    </form>
                    <Navbar.Link
                        href="/navbars"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Services
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </div>
        </Navbar >
        // <Navbar
        //     fluid={true}
        //     rounded={true}
        // >
        //     <div className="flex-2 md:order-2 ml-4">
        //         <Dropdown
        //             arrowIcon={false}
        //             inline={true}
        //             label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
        //         >
        //             <Dropdown.Header>
        //                 <span className="block text-sm">
        //                     Bonnie Green
        //                 </span>
        //                 <span className="block truncate text-sm font-medium">
        //                     name@flowbite.com
        //                 </span>
        //             </Dropdown.Header>
        //             <Dropdown.Item>
        //                 Dashboard
        //             </Dropdown.Item>
        //             <Dropdown.Item>
        //                 Settings
        //             </Dropdown.Item>
        //             <Dropdown.Item>
        //                 Earnings
        //             </Dropdown.Item>
        //             <Dropdown.Divider />
        //             <Dropdown.Item>
        //                 Sign out
        //             </Dropdown.Item>
        //         </Dropdown>
        //         <Navbar.Toggle />
        //     </div>
        //     <Navbar.Collapse className="navbar-collapse">
        //         <div className="flex items-center">
        //             <div className="flex space-x-1">
        //             </div>
        //         </div>
        //     </Navbar.Collapse>
        // </Navbar>
    )
}
export default NavMenu;