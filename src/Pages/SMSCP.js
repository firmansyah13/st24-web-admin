import React from "react";
import NavMenu from "../Components/NavMenu";
import Sidebar from "../Components/SidebarMenu";
import { Tabs, Table } from "flowbite-react";

const SMSCP = () => {
    return (
        <div className="flex h-full sm:h-full">
            <Sidebar />
            <div className="h-full sm:h-screen flex-1">
                <NavMenu />
                <div className="container-fluid max-h-screen px-2" style={{ height: "auto" }}>
                    <h1 className="text-2xl font-semibold text-left mt-2 mb-2">SMS CP</h1>
                    <div className='flex max-h-screen'>
                        <div className="rounded-xl border p-5 shadow-md h-full w-full bg-white">
                            <Tabs.Group
                                aria-label="Tabs with underline"
                                style="underline"
                            >
                                <Tabs.Item
                                    active={true}
                                    title="Command">
                                    <Table>
                                        <Table.Head className="bg-[#E8F8FD] text-[#223E92] text-base font-semibold">
                                            <Table.HeadCell>
                                               Fitur
                                            </Table.HeadCell>
                                            <Table.HeadCell>
                                                Command
                                            </Table.HeadCell>
                                            <Table.HeadCell>
                                                Format
                                            </Table.HeadCell>
                                        </Table.Head>
                                        <Table.Body className="divide-y">
                                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                
                                            </Table.Row>
                                        </Table.Body>
                                    </Table>
                                </Tabs.Item>
                                <Tabs.Item title="Response" >
                                    <Table>
                                        <Table.Head className="bg-[#E8F8FD] text-[#223E92] text-base font-semibold">
                                            <Table.HeadCell>
                                                RESP
                                            </Table.HeadCell>
                                            <Table.HeadCell>
                                            RESP STRING
                                            </Table.HeadCell>
                                        </Table.Head>
                                        <Table.Body className="divide-y">
                                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                
                                            </Table.Row>
                                        </Table.Body>
                                    </Table>
                                </Tabs.Item>
                            </Tabs.Group>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SMSCP;