import React from "react";
import NavMenu from "../Components/NavMenu";
import Sidebar from "../Components/SidebarMenu";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="h-full flex-1">
        <NavMenu />
        <div className="container px-4">
          <h1 className="text-2xl font-semibold text-left mt-2 mb-2">Dashboard</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-5 gap-2">
            <div className="bg-green-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-green-600 dark:border-gray-600 text-white font-medium group">
              <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                <svg
                  viewBox="0 0 512 512"
                  width="30"
                  height="30"
                  stroke="currentColor"
                  className="stroke-current fill-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                  ></path>
                </svg>
              </div>
              <div className="text-center">
                <p className="text-2xl">557</p>
                <p>Transaksi Selesai</p>
              </div>
              <div className="text-right">
              </div>
            </div>
            <div className="bg-amber-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-amber-600 dark:border-gray-600 text-white font-medium group">
              <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 512 512"
                  stroke="currentColor"
                  className="stroke-current fill-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M200 160C186.8 160 176 170.8 176 184v144C176 341.3 186.8 352 200 352S224 341.3 224 328v-144C224 170.8 213.3 160 200 160zM312 160C298.8 160 288 170.8 288 184v144c0 13.25 10.75 24 24 24s24-10.75 24-24v-144C336 170.8 325.3 160 312 160zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                  ></path>
                </svg>
              </div>
              <div className="text-center">
                <p className="text-2xl">11,257</p>
                <p>Transaksi Belum Diproses</p>
              </div>
              <div className="text-right">
              </div>
            </div>
            <div className="bg-red-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-red-600 dark:border-gray-600 text-white font-medium group">
              <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                <svg
                  width="30"
                  height="30"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  stroke="currentColor"
                  className="stroke-current fill-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
                >
                  <path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                </svg>
                {/* <svg width="30" height="30" viewBox="0 0 384 512" stroke="currentColor" class="stroke-current fill-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M101.5 64C114.6 26.7 150.2 0 192 0s77.4 26.7 90.5 64H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h37.5zM224 96c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM160 368c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zM96 392c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24zm64-120c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zM96 296c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24z" /></svg> */}
              </div>
              <div className="text-center">
                <p className="text-2xl">1,257</p>
                <p>Transaksi Gagal</p>
              </div>
              <div className="text-right">
              </div>
            </div>
          </div>
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-[#E7E8EA]">
              <thead className="text-xs text-[#223E92] bg-[#F8F8FA] uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    No
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Nama Produk
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <td className="py-4 px-6">Laptop</td>
                  <td className="py-4 px-6">100000</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    2
                  </th>
                  <td className="py-4 px-6">Minyak</td>
                  <td className="py-4 px-6">2000</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    3
                  </th>
                  <td className="py-4 px-6">Pulsa Indosat 5.000</td>
                  <td className="py-4 px-6">50000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
