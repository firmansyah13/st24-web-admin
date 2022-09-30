import React, { useState, Fragment } from "react";
import { Navbar, Dropdown, Avatar, Label, TextInput, Button } from "flowbite-react";
// import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { Transition, Disclosure, Menu } from "@headlessui/react";
import { HiOutlineSearch, HiOutlineBell, HiOutlineMenuAlt1, HiOutlineX } from "react-icons/hi";
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const NavMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Disclosure as="nav" className="bg-[#11133E]">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                {/* <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <HiOutlineX className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <HiOutlineMenuAlt1 className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button> */}
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                {/* <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="block h-8 w-auto lg:hidden"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    />
                                    <img
                                        className="hidden h-8 w-auto lg:block"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div> */}
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div>
                                    <div className=" w-16 mr-2 ml-2 sm:w-96" style={{ marginTop: "-20px" }}>
                                        <Label
                                            htmlFor="email4"
                                            value="Your email"
                                        />
                                    </div>
                                    <TextInput
                                        id="email4"
                                        type="email"
                                        placeholder="name@flowbite.com"
                                        required={true}
                                        icon={HiOutlineSearch}
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <HiOutlineBell className="h-6 w-6" aria-hidden="true" />
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
        // <div>
        //     <nav className="bg-[#11133E]">
        //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        //             <div className="flex items-center justify-between h-16">
        //                 <div className="flex items-center">
        //                     <div className="hidden justify-end text-right md:block">
        //                         <div className="absolute pr-3 ml-96 items-right space-y-2">
        //                             <div className="flex mr-20 ml-40" style={{ marginTop: "-20px", width: "360px" }}>
        //                                 <div className="mb-2 block">
        //                                     <Label
        //                                         htmlFor="email4"
        //                                         value="Your email"
        //                                     />
        //                                 </div>
        //                                 <TextInput
        //                                     id="email4"
        //                                     type="email"
        //                                     placeholder="name@flowbite.com"
        //                                     required={true}
        //                                     icon={HiOutlineSearch}
        //                                 />
        //                             </div>
        //                             <div className="relative ml-96 right-0 w-10 md:order-2" style={{ marginTop: "-20px" }}>
        //                                 <Dropdown
        //                                     arrowIcon={false}
        //                                     color="transparent"
        //                                     label={<HiOutlineBell className="h-6 w-6 text-white" />}
        //                                 >
        //                                     <Dropdown.Header>
        //                                         <span className=" text-sm">
        //                                             Bonnie Green
        //                                         </span>
        //                                         <span className=" truncate text-sm font-medium">
        //                                             name@flowbite.com
        //                                         </span>
        //                                     </Dropdown.Header>
        //                                     <Dropdown.Item>
        //                                         Dashboard
        //                                     </Dropdown.Item>
        //                                     <Dropdown.Item>
        //                                         Settings
        //                                     </Dropdown.Item>
        //                                     <Dropdown.Item>
        //                                         Earnings
        //                                     </Dropdown.Item>
        //                                     <Dropdown.Divider />
        //                                     <Dropdown.Item>
        //                                         Sign out
        //                                     </Dropdown.Item>
        //                                 </Dropdown>
        //                             </div>
        //  <a
        //     href="#"
        //     className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
        // >
        //     Dashboard
        // </a>

        // <a
        //     href="#"
        //     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        // >
        //     Team
        // </a>

        // <a
        //     href="#"
        //     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        // >
        //     Projects
        // </a>

        // <a
        //     href="#"
        //     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        // >
        //     Calendar
        // </a>

        // <a
        //     href="#"
        //     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        // >
        //     Reports
        // </a> 
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="-mr-2 flex md:hidden">
        //                     <button
        //                         onClick={() => setIsOpen(!isOpen)}
        //                         type="button"
        //                         className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        //                         aria-controls="mobile-menu"
        //                         aria-expanded="false"
        //                     >
        //                         <span className="sr-only">Open main menu</span>
        //                         {!isOpen ? (
        //                             <svg
        //                                 className="block h-6 w-6"
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 fill="none"
        //                                 viewBox="0 0 24 24"
        //                                 stroke="currentColor"
        //                                 aria-hidden="true"
        //                             >
        //                                 <path
        //                                     strokeLinecap="round"
        //                                     strokeLinejoin="round"
        //                                     strokeWidth="2"
        //                                     d="M4 6h16M4 12h16M4 18h16"
        //                                 />
        //                             </svg>
        //                         ) : (
        //                             <svg
        //                                 className="block h-6 w-6"
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 fill="none"
        //                                 viewBox="0 0 24 24"
        //                                 stroke="currentColor"
        //                                 aria-hidden="true"
        //                             >
        //                                 <path
        //                                     strokeLinecap="round"
        //                                     strokeLinejoin="round"
        //                                     strokeWidth="2"
        //                                     d="M6 18L18 6M6 6l12 12"
        //                                 />
        //                             </svg>
        //                         )}
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>

        //         <Transition
        //             show={isOpen}
        //             enter="transition ease-out duration-100 transform"
        //             enterFrom="opacity-0 scale-95"
        //             enterTo="opacity-100 scale-100"
        //             leave="transition ease-in duration-75 transform"
        //             leaveFrom="opacity-100 scale-100"
        //             leaveTo="opacity-0 scale-95"
        //         >
        //             {(ref) => (
        //                 <div className="md:hidden" id="mobile-menu">
        //                     <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        //                         <a
        //                             href="#"
        //                             className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
        //                         >
        //                             Dashboard
        //                         </a>

        //                         <a
        //                             href="#"
        //                             className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        //                         >
        //                             Team
        //                         </a>

        //                         <a
        //                             href="#"
        //                             className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        //                         >
        //                             Projects
        //                         </a>

        //                         <a
        //                             href="#"
        //                             className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        //                         >
        //                             Calendar
        //                         </a>

        //                         <a
        //                             href="#"
        //                             className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        //                         >
        //                             Reports
        //                         </a>
        //                     </div>
        //                 </div>
        //             )}
        //         </Transition>
        //     </nav>
        // </div>
    );
}
export default NavMenu;