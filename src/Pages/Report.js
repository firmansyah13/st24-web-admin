import React from "react";
import { Tabs, Table } from "flowbite-react";
import NavMenu from "../Components/NavMenu";
import Sidebar from "../Components/SidebarMenu";
import { HiOutlineViewList, HiOutlineTrendingUp, HiOutlineSwitchHorizontal, HiOutlineSortAscending, HiOutlineCash, HiOutlineScale, HiOutlineCog } from "react-icons/hi";

const Report = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="h-full flex-1">
                <NavMenu />
                <div className="container px-4">
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
                                    <Table.Head>
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
                            title="Penjualan"
                            icon={HiOutlineTrendingUp}
                        >
                            Dashboard content
                            <div className="mt-4">
                                <Table>
                                    <Table.Head>
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
                                    <Table.Head>
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
                                    <Table.Head>
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
                                    <Table.Head>
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
                                    <Table.Head>
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
                                    <Table.Head>
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