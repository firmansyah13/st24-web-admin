import React, { Fragment, useState } from "react";
import { Label, TextInput } from "flowbite-react";
import { Transition, Disclosure, Menu } from "@headlessui/react";
import { HiOutlineSearch, HiOutlineBell } from "react-icons/hi";
// import { AuthContext } from "../context";

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
    const [showModal, setShowModal] = useState(false);
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
                            <div className="absolute inset-y-0 right-0 flex items-center mt-2 sm:static sm:inset-auto sm:ml-24 sm:pr-0">
                                <div className="mr-2 w-24 sm:w-96" style={{ marginTop: "-30px" }}>
                                    <div className="ml-24">
                                        <Label
                                            htmlFor="search"
                                            value="Search"
                                        />
                                    </div>
                                    <TextInput
                                        id="search"
                                        type="text"
                                        placeholder="Cari..."
                                        required={true}
                                        icon={HiOutlineSearch}
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="p-1 text-gray-400 hover:text-white focus:outline-none focus:rounded-full focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
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
                                            {/* <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item> */}
                                            <Menu.Item>
                                                {({ active }) => (
                                                    //     <button className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    //         onClick={() => setShowModal(true)}>
                                                    //         <FontAwesomeIcon icon={faPlus} />
                                                    //         &nbsp;Tambah Toko
                                                    //     </button>
                                                    // {({ showModal }) ? (
                                                    //     <>
                                                    //         <div class="flex mt-12 py-12 w-auto z-10 fixed top-0 right-0 bottom-0 left-0 outline-none focus:outline-none w-full md:inset-0 h-modal md:h-full">
                                                    //             <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                                                    //                 <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                                                    //                     <div className="w-full flex justify-start text-gray-600 mb-3">
                                                    //                         <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wallet" width="52" height="52" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    //                             <path stroke="none" d="M0 0h24v24H0z" />
                                                    //                             <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                                                    //                             <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                                                    //                         </svg>
                                                    //                     </div>
                                                    //                     <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Enter Billing Details</h1>
                                                    //                     <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Owner Name</label>
                                                    //                     <input id="name" name='name' className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="James" />
                                                    //                     <label for="email2" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Card Number</label>
                                                    //                     <div className="relative mb-5 mt-2">
                                                    //                         <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
                                                    //                             <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    //                                 <path stroke="none" d="M0 0h24v24H0z" />
                                                    //                                 <rect x="3" y="5" width="18" height="14" rx="3" />
                                                    //                                 <line x1="3" y1="10" x2="21" y2="10" />
                                                    //                                 <line x1="7" y1="15" x2="7.01" y2="15" />
                                                    //                                 <line x1="11" y1="15" x2="13" y2="15" />
                                                    //                             </svg>
                                                    //                         </div>
                                                    //                         <input id="email2" className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border" placeholder="XXXX - XXXX - XXXX - XXXX" />
                                                    //                     </div>
                                                    //                     <label for="expiry" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Expiry Date</label>
                                                    //                     <div className="relative mb-5 mt-2">
                                                    //                         <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                                                    //                             <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    //                                 <path stroke="none" d="M0 0h24v24H0z" />
                                                    //                                 <rect x="4" y="5" width="16" height="16" rx="2" />
                                                    //                                 <line x1="16" y1="3" x2="16" y2="7" />
                                                    //                                 <line x1="8" y1="3" x2="8" y2="7" />
                                                    //                                 <line x1="4" y1="11" x2="20" y2="11" />
                                                    //                                 <rect x="8" y="15" width="2" height="2" />
                                                    //                             </svg>
                                                    //                         </div>
                                                    //                         <input id="expiry" className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="MM/YY" />
                                                    //                     </div>
                                                    //                     <label for="cvc" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">CVC</label>
                                                    //                     <div className="relative mb-5 mt-2">
                                                    //                         <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                                                    //                             <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    //                                 <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    //                                 <circle cx="12" cy="12" r="9"></circle>
                                                    //                                 <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                                    //                                 <polyline points="11 12 12 12 12 16 13 16"></polyline>
                                                    //                             </svg>
                                                    //                         </div>
                                                    //                         <input id="cvc" className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="MM/YY" />
                                                    //                     </div>
                                                    //                     <div className="flex items-center justify-start w-full">
                                                    //                         <button claclassNamess="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Submit</button>
                                                    //                         <button className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onClick={() => setShowModal(false)}>Cancel</button>
                                                    //                     </div>
                                                    //                     <button className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onClick={() => setShowModal(false)} aria-label="close modal" role="button">
                                                    //                         <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    //                             <path stroke="none" d="M0 0h24v24H0z" />
                                                    //                             <line x1="18" y1="6" x2="6" y2="18" />
                                                    //                             <line x1="6" y1="6" x2="18" y2="18" />
                                                    //                         </svg>
                                                    //                     </button>
                                                    //                 </div>
                                                    //             </div>
                                                    //         </div>
                                                    //     </>
                                                    // ) : null}
                                                    <a
                                                        href="#"
                                                        // onClick={auth.logout}
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Edit Password
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="/login"
                                                        // onClick={auth.logout}
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
            )
            }
        </Disclosure >
    );
}
export default NavMenu;