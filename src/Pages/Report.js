import React, { useState } from "react";
import { Tabs, Table } from "flowbite-react";
import NavMenu from "../Components/NavMenu";
import Sidebar from "../Components/SidebarMenu";
import { HiOutlineViewList, HiOutlineTrendingUp, HiOutlineSwitchHorizontal, HiOutlineSortAscending, HiOutlineCash, HiOutlineScale, HiOutlineCog } from "react-icons/hi";

const Report = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="flex h-full sm:h-full">
            <Sidebar />
            <div className="h-full sm:h-screen flex-1">
                <NavMenu />
                <div className="container max-h-screen px-4">
                    <h1 className="text-2xl font-semibold text-left mt-2 mb-2">
                        Report
                    </h1>
                    <Tabs.Group
                        aria-label="Tabs with icons"
                        style="underline"
                    >
                        <Tabs.Item
                            active={true}
                            title="List Mitra"
                            icon={HiOutlineViewList}
                        >
                            List Mitra
                            <div className="mt-4">
                                <Table>
                                    <Table.Head className="bg-[#E8F8FD] text-[#223E92] text-base font-semibold">
                                        <Table.HeadCell>
                                            Product name
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Color
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Category
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Price
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            <span className="sr-only">
                                                Edit
                                            </span>
                                        </Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body className="divide-y">
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Apple MacBook Pro 17"
                                            </Table.Cell>
                                            <Table.Cell>
                                                Sliver
                                            </Table.Cell>
                                            <Table.Cell>
                                                Laptop
                                            </Table.Cell>
                                            <Table.Cell>
                                                $2999
                                            </Table.Cell>
                                            <Table.Cell>
                                                <button
                                                    onClick={() => setShowModal(true)}
                                                    // href="/tables"
                                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                >
                                                    Edit
                                                </button>
                                                {showModal ? (
                                                    <>
                                                        <div className="flex mt-12 py-12 w-auto overflow-x-hidden overflow-y-auto z-10 fixed top-0 right-0 bottom-0 left-0 outline-none focus:outline-none w-full md:inset-0 h-modal md:h-full">
                                                            <div
                                                                role="alert"
                                                                className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
                                                            >
                                                                <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                                                                    <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
                                                                        Edit Product
                                                                    </h1>
                                                                    <label
                                                                        for="name"
                                                                        className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                                                                    >
                                                                        Owner Name
                                                                    </label>
                                                                    <input
                                                                        id="name"
                                                                        name="name"
                                                                        className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                                                                        placeholder="James"
                                                                    />
                                                                    <label
                                                                        for="email2"
                                                                        className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                                                                    >
                                                                        Card Number
                                                                    </label>
                                                                    <div className="relative mb-5 mt-2">
                                                                        <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                className="icon icon-tabler icon-tabler-credit-card"
                                                                                width="20"
                                                                                height="20"
                                                                                viewBox="0 0 24 24"
                                                                                stroke-width="1.5"
                                                                                stroke="currentColor"
                                                                                fill="none"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                            >
                                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                                <rect x="3" y="5" width="18" height="14" rx="3" />
                                                                                <line x1="3" y1="10" x2="21" y2="10" />
                                                                                <line x1="7" y1="15" x2="7.01" y2="15" />
                                                                                <line x1="11" y1="15" x2="13" y2="15" />
                                                                            </svg>
                                                                        </div>
                                                                        <input
                                                                            id="email2"
                                                                            className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border"
                                                                            placeholder="XXXX - XXXX - XXXX - XXXX"
                                                                        />
                                                                    </div>
                                                                    <label
                                                                        for="expiry"
                                                                        className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                                                                    >
                                                                        Expiry Date
                                                                    </label>
                                                                    <div className="relative mb-5 mt-2">
                                                                        <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                className="icon icon-tabler icon-tabler-calendar-event"
                                                                                width="20"
                                                                                height="20"
                                                                                viewBox="0 0 24 24"
                                                                                stroke-width="1.5"
                                                                                stroke="currentColor"
                                                                                fill="none"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                            >
                                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                                <rect x="4" y="5" width="16" height="16" rx="2" />
                                                                                <line x1="16" y1="3" x2="16" y2="7" />
                                                                                <line x1="8" y1="3" x2="8" y2="7" />
                                                                                <line x1="4" y1="11" x2="20" y2="11" />
                                                                                <rect x="8" y="15" width="2" height="2" />
                                                                            </svg>
                                                                        </div>
                                                                        <input
                                                                            id="expiry"
                                                                            className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                                                                            placeholder="MM/YY"
                                                                        />
                                                                    </div>
                                                                    <label
                                                                        for="cvc"
                                                                        className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                                                                    >
                                                                        CVC
                                                                    </label>
                                                                    <div className="relative mb-5 mt-2">
                                                                        <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                className="icon icon-tabler icon-tabler-info-circle"
                                                                                width="20"
                                                                                height="20"
                                                                                viewBox="0 0 24 24"
                                                                                stroke-width="1.5"
                                                                                stroke="currentColor"
                                                                                fill="none"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                            >
                                                                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                                                                <circle cx="12" cy="12" r="9"></circle>
                                                                                <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                                                                <polyline points="11 12 12 12 12 16 13 16"></polyline>
                                                                            </svg>
                                                                        </div>
                                                                        <input
                                                                            id="cvc"
                                                                            className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                                                                            placeholder="MM/YY"
                                                                        />
                                                                    </div>
                                                                    <div className="flex items-center justify-start w-full">
                                                                        <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                                                                            Submit
                                                                        </button>
                                                                        <button
                                                                            className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                                                                            onClick={() => setShowModal(false)}
                                                                        >
                                                                            Cancel
                                                                        </button>
                                                                    </div>
                                                                    <button
                                                                        className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                                                                        onClick={() => setShowModal(false)}
                                                                        aria-label="close modal"
                                                                        role="button"
                                                                    >
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            className="icon icon-tabler icon-tabler-x"
                                                                            width="20"
                                                                            height="20"
                                                                            viewBox="0 0 24 24"
                                                                            stroke-width="2.5"
                                                                            stroke="currentColor"
                                                                            fill="none"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                        >
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
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Microsoft Surface Pro
                                            </Table.Cell>
                                            <Table.Cell>
                                                White
                                            </Table.Cell>
                                            <Table.Cell>
                                                Laptop PC
                                            </Table.Cell>
                                            <Table.Cell>
                                                $1999
                                            </Table.Cell>
                                            <Table.Cell>
                                                <a
                                                    href="/tables"
                                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                >
                                                    Edit
                                                </a>
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Magic Mouse 2
                                            </Table.Cell>
                                            <Table.Cell>
                                                Black
                                            </Table.Cell>
                                            <Table.Cell>
                                                Accessories
                                            </Table.Cell>
                                            <Table.Cell>
                                                $99
                                            </Table.Cell>
                                            <Table.Cell>
                                                {/* <a
                                                    href="/tables"
                                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                >
                                                    Edit
                                                </a> */}

                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </div>
                        </Tabs.Item>
                        <Tabs.Item
                            title="Penjualan"
                            icon={HiOutlineTrendingUp}
                        >
                            Dashboard content
                            <div className="mt-4">
                                <Table>
                                    <Table.Head className="bg-[#E8F8FD] text-[#223E92] text-base font-semibold">
                                        <Table.HeadCell>
                                            Product name
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Color
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Category
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Price
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            <span className="sr-only">
                                                Edit
                                            </span>
                                        </Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body className="divide-y">
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Apple MacBook Pro 17"
                                            </Table.Cell>
                                            <Table.Cell>
                                                Sliver
                                            </Table.Cell>
                                            <Table.Cell>
                                                Laptop
                                            </Table.Cell>
                                            <Table.Cell>
                                                $2999
                                            </Table.Cell>
                                            <Table.Cell>
                                                <a
                                                    href="/tables"
                                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                >
                                                    Edit
                                                </a>
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Microsoft Surface Pro
                                            </Table.Cell>
                                            <Table.Cell>
                                                White
                                            </Table.Cell>
                                            <Table.Cell>
                                                Laptop PC
                                            </Table.Cell>
                                            <Table.Cell>
                                                $1999
                                            </Table.Cell>
                                            <Table.Cell>
                                                <a
                                                    href="/tables"
                                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                >
                                                    Edit
                                                </a>
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Magic Mouse 2
                                            </Table.Cell>
                                            <Table.Cell>
                                                Black
                                            </Table.Cell>
                                            <Table.Cell>
                                                Accessories
                                            </Table.Cell>
                                            <Table.Cell>
                                                $99
                                            </Table.Cell>
                                            <Table.Cell>
                                                <a
                                                    href="/tables"
                                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                >
                                                    Edit
                                                </a>
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </div>
                        </Tabs.Item>
                        <Tabs.Item
                            title="Transfer / Tarik Saldo"
                            icon={HiOutlineSwitchHorizontal}
                        >
                            Settings content
                            <div className="mt-4">
                                <Table>
                                    <Table.Head className="bg-[#E8F8FD] text-[#223E92] text-base font-semibold">
                                        <Table.HeadCell>
                                            Product name
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Color
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Category
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Price
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            <span className="sr-only">
                                                Edit
                                            </span>
                                        </Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body className="divide-y">
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Apple MacBook Pro 17"
                                            </Table.Cell>
                                            <Table.Cell>
                                                Sliver
                                            </Table.Cell>
                                            <Table.Cell>
                                                Laptop
                                            </Table.Cell>
                                            <Table.Cell>
                                                $2999
                                            </Table.Cell>
                                            <Table.Cell>
                                                <a
                                                    href="/tables"
                                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                >
                                                    Edit
                                                </a>
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Microsoft Surface Pro
                                            </Table.Cell>
                                            <Table.Cell>
                                                White
                                            </Table.Cell>
                                            <Table.Cell>
                                                Laptop PC
                                            </Table.Cell>
                                            <Table.Cell>
                                                $1999
                                            </Table.Cell>
                                            <Table.Cell>
                                                <a
                                                    href="/tables"
                                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                >
                                                    Edit
                                                </a>
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Magic Mouse 2
                                            </Table.Cell>
                                            <Table.Cell>
                                                Black
                                            </Table.Cell>
                                            <Table.Cell>
                                                Accessories
                                            </Table.Cell>
                                            <Table.Cell>
                                                $99
                                            </Table.Cell>
                                            <Table.Cell>
                                                <a
                                                    href="/tables"
                                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                >
                                                    Edit
                                                </a>
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </div>
                        </Tabs.Item>
                        <Tabs.Item
                            title="Profit"
                            icon={HiOutlineSortAscending}
                        >
                            Contacts content
                            <div className="mt-4">
                                <Table>
                                    <Table.Head className="bg-[#E8F8FD] text-[#223E92] text-base font-semibold">
                                        <Table.HeadCell>
                                            Product name
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Color
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Category
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Price
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            <span className="sr-only">
                                                Edit
                                            </span>
                                        </Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body className="divide-y">
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Apple MacBook Pro 17"
                                            </Table.Cell>
                                            <Table.Cell>
                                                Sliver
                                            </Table.Cell>
                                            <Table.Cell>
                                                Laptop
                                            </Table.Cell>
                                            <Table.Cell>
                                                $2999
                                            </Table.Cell>
                                            <Table.Cell>
                                                <a
                                                    href="/tables"
                                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                >
                                                    Edit
                                                </a>
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Microsoft Surface Pro
                                            </Table.Cell>
                                            <Table.Cell>
                                                White
                                            </Table.Cell>
                                            <Table.Cell>
                                                Laptop PC
                                            </Table.Cell>
                                            <Table.Cell>
                                                $1999
                                            </Table.Cell>
                                            <Table.Cell>
                                                <a
                                                    href="/tables"
                                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                >
                                                    Edit
                                                </a>
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Magic Mouse 2
                                            </Table.Cell>
                                            <Table.Cell>
                                                Black
                                            </Table.Cell>
                                            <Table.Cell>
                                                Accessories
                                            </Table.Cell>
                                            <Table.Cell>
                                                $99
                                            </Table.Cell>
                                            <Table.Cell>
                                                <a
                                                    href="/tables"
                                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                >
                                                    Edit
                                                </a>
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </div>
                        </Tabs.Item>
                        <Tabs.Item
                            title="Debit / Kredit Saldo"
                            icon={HiOutlineCash}
                        >
                            Saldo
                            <div className="mt-4">
                                <Table>
                                    <Table.Head className="bg-[#E8F8FD] text-[#223E92] text-base font-semibold">
                                        <Table.HeadCell>
                                            Product name
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Color
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Category
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Price
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            <span className="sr-only">
                                                Edit
                                            </span>
                                        </Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body className="divide-y">
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Apple MacBook Pro 17"
                                            </Table.Cell>
                                            <Table.Cell>
                                                Sliver
                                            </Table.Cell>
                                            <Table.Cell>
                                                Laptop
                                            </Table.Cell>
                                            <Table.Cell>
                                                $2999
                                            </Table.Cell>
                                            <Table.Cell>
                                                <a
                                                    href="/tables"
                                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                >
                                                    Edit
                                                </a>
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Microsoft Surface Pro
                                            </Table.Cell>
                                            <Table.Cell>
                                                White
                                            </Table.Cell>
                                            <Table.Cell>
                                                Laptop PC
                                            </Table.Cell>
                                            <Table.Cell>
                                                $1999
                                            </Table.Cell>
                                            <Table.Cell>
                                                <a
                                                    href="/tables"
                                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                >
                                                    Edit
                                                </a>
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Magic Mouse 2
                                            </Table.Cell>
                                            <Table.Cell>
                                                Black
                                            </Table.Cell>
                                            <Table.Cell>
                                                Accessories
                                            </Table.Cell>
                                            <Table.Cell>
                                                $99
                                            </Table.Cell>
                                            <Table.Cell>
                                                <a
                                                    href="/tables"
                                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                >
                                                    Edit
                                                </a>
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </div>
                        </Tabs.Item>
                        <Tabs.Item
                            title="Rekap Balance"
                            icon={HiOutlineScale}
                        >
                            Settings content
                            <div className="mt-4">
                                <Table>
                                    <Table.Head className="bg-[#E8F8FD] text-[#223E92] text-base font-semibold">
                                        <Table.HeadCell>
                                            Product name
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Color
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Category
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Price
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            <span className="sr-only">
                                                Edit
                                            </span>
                                        </Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body className="divide-y">
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Apple MacBook Pro 17"
                                            </Table.Cell>
                                            <Table.Cell>
                                                Sliver
                                            </Table.Cell>
                                            <Table.Cell>
                                                Laptop
                                            </Table.Cell>
                                            <Table.Cell>
                                                $2999
                                            </Table.Cell>
                                            <Table.Cell>
                                                <a
                                                    href="/tables"
                                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                >
                                                    Edit
                                                </a>
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Microsoft Surface Pro
                                            </Table.Cell>
                                            <Table.Cell>
                                                White
                                            </Table.Cell>
                                            <Table.Cell>
                                                Laptop PC
                                            </Table.Cell>
                                            <Table.Cell>
                                                $1999
                                            </Table.Cell>
                                            <Table.Cell>
                                                <a
                                                    href="/tables"
                                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                >
                                                    Edit
                                                </a>
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Magic Mouse 2
                                            </Table.Cell>
                                            <Table.Cell>
                                                Black
                                            </Table.Cell>
                                            <Table.Cell>
                                                Accessories
                                            </Table.Cell>
                                            <Table.Cell>
                                                $99
                                            </Table.Cell>
                                            <Table.Cell>
                                                <a
                                                    href="/tables"
                                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                >
                                                    Edit
                                                </a>
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </div>
                        </Tabs.Item>
                        <Tabs.Item
                            title="Custom Query Report"
                            icon={HiOutlineCog}
                        >
                            Costom Query Report
                            <div className="mt-4">
                                <Table>
                                    <Table.Head className="bg-[#E8F8FD] text-[#223E92] text-base font-semibold">
                                        <Table.HeadCell>
                                            Product name
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Color
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Category
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            Price
                                        </Table.HeadCell>
                                        <Table.HeadCell>
                                            <span className="sr-only">
                                                Edit
                                            </span>
                                        </Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body className="divide-y">
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Apple MacBook Pro 17"
                                            </Table.Cell>
                                            <Table.Cell>
                                                Sliver
                                            </Table.Cell>
                                            <Table.Cell>
                                                Laptop
                                            </Table.Cell>
                                            <Table.Cell>
                                                $2999
                                            </Table.Cell>
                                            <Table.Cell>
                                                <a
                                                    href="/tables"
                                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                >
                                                    Edit
                                                </a>
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Microsoft Surface Pro
                                            </Table.Cell>
                                            <Table.Cell>
                                                White
                                            </Table.Cell>
                                            <Table.Cell>
                                                Laptop PC
                                            </Table.Cell>
                                            <Table.Cell>
                                                $1999
                                            </Table.Cell>
                                            <Table.Cell>
                                                <a
                                                    href="/tables"
                                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                >
                                                    Edit
                                                </a>
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                Magic Mouse 2
                                            </Table.Cell>
                                            <Table.Cell>
                                                Black
                                            </Table.Cell>
                                            <Table.Cell>
                                                Accessories
                                            </Table.Cell>
                                            <Table.Cell>
                                                $99
                                            </Table.Cell>
                                            <Table.Cell>
                                                <a
                                                    href="/tables"
                                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                >
                                                    Edit
                                                </a>
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </div>
                        </Tabs.Item>
                    </Tabs.Group>
                </div>
            </div>
        </div>
    )
}
export default Report;