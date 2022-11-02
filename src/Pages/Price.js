import React, { useState, useEffect } from "react";
import NavMenu from "../Components/NavMenu";
import Sidebar from "../Components/SidebarMenu";
import { Button, Select } from "flowbite-react";
import axios from "axios";
import { data } from "autoprefixer";

const Price = () => {

    const url = "http://localhost:3005/product/variant"
    const [variant, setVariant] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(url, {
                    data: {
                        VARIANT_NAME: data.VARIANT_NAME,
                        VALUE: data.VALUE
                    },
                });
                setVariant(response.data);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div className="flex h-full sm:h-full bg-gray-200">
            <Sidebar />
            <div className="h-full sm:h-screen flex-1">
                <NavMenu />
                <div className="container-fluid px-2" style={{ height: "auto", background: "#E5E7EB" }}>
                    <h1 className="text-2xl font-semibold text-left mt-2 mb-2">Price</h1>
                    <div className='flex max-h-screen'>
                        <div className="rounded-xl border p-5 shadow-md h-full w-full bg-white">
                            <form>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="w-full">
                                        <label htmlFor="countries" className="block mb-2 w-full text-sm text-left font-medium text-gray-900 dark:text-gray-400">Select PRICE PLAN</label>
                                        {loading && <div>Loading</div>}
                                        {!loading && (
                                            <Select>
                                                {variant.map(item =>
                                                    <option value={item[1]}>{item[1]}</option>
                                                )}
                                            </Select>
                                        )}
                                    </div>
                                    <div className="mt-7">
                                        <div className="grid grid-flow-col">
                                            <div>
                                                <Button>
                                                    Add
                                                </Button>
                                            </div>
                                            <div>
                                                <Button color="gray">
                                                    View
                                                </Button>
                                            </div>
                                            <div>
                                                <Button color="failure">
                                                    Delete
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-start -mt-2 mb-4">
                                        <div className="flex items-center h-5">
                                            <input id="copy_price" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                        </div>
                                        <label htmlFor="copy_price" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Copy Dari H2H ke PRICE PLAN baru</label>
                                    </div>
                                </div>
                                <div className="grid grid-flow-col gap-4">
                                    <div className="w-auto">
                                        <label htmlFor="countries" className="block mb-2 text-sm text-left font-medium text-gray-500 dark:text-gray-400">Ketik PRICE PLAN baru</label>
                                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Silahkan Masukkan PRICE PLAN" required />
                                    </div>
                                    <div className="flex mt-7">
                                        <Button color="gray">
                                            Copy
                                        </Button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div className="w-full">
                                        <label htmlFor="countries" className="block mb-2 w-full text-sm text-left font-medium text-gray-900 dark:text-gray-400">Select NOM (Produk)</label>
                                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Tampilkan Semua</option>
                                            <option value="">H2H</option>
                                            <option value="">RETAIL</option>
                                        </select>
                                    </div>
                                    <div className="mt-7">
                                        <Button color="gray">
                                            View
                                        </Button>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="text-white mt-4 bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Price;