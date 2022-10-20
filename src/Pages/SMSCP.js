import React, { useEffect, useState } from "react";
import NavMenu from "../Components/NavMenu";
import Sidebar from "../Components/SidebarMenu";
import { Tabs, Table } from "flowbite-react";
import axios from "axios";
import { data } from "autoprefixer";

const SMSCP = () => {
    const url = "http://localhost:3005/smscp/response"
    const [response, getResponse] = useState();
    const [loading, setLoading] = useState(true);

    // const showResponse = () => {
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(url, {
                    data: {
                        ERR: data.ERR,
                        DSC: data.DSC
                    },
                });

                getResponse(response.data);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }
        fetchData();
    }, []);
    // }

    return (
        <div className="flex h-full sm:h-full bg-gray-200">
            <Sidebar />
            <div className="h-full sm:h-screen flex-1">
                <NavMenu />
                <div className="container-fluid max-h-screen px-2" style={{ height: "auto", background: "#E5E7EB" }}>
                    <h1 className="text-2xl font-semibold text-left mt-2 mb-2">SMS CP</h1>
                    <div className='flex max-h-screen'>
                        <div className="rounded-xl border p-5 shadow-md h-full w-full bg-white">
                            <button
                                type="submit"
                                class="flex text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-left mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Update DB ERR
                            </button>
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
                                        <Table.Head>
                                            <Table.HeadCell className="bg-[#11133E] text-white text-sm font-semibold">
                                                RESP
                                            </Table.HeadCell>
                                            <Table.HeadCell className="bg-[#11133E] text-white text-sm font-semibold">
                                                RESP STRING
                                            </Table.HeadCell>
                                        </Table.Head>
                                        {loading && <div>Loading</div>}
                                        {!loading && (
                                            <Table.Body className="divide-y">
                                                {response.map((res, i) => {
                                                    return (
                                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                            <Table.Cell key={i}>{res[0]}</Table.Cell>
                                                            <Table.Cell>{res[1]}</Table.Cell>
                                                        </Table.Row>
                                                    );
                                                })}
                                            </Table.Body>
                                        )}
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