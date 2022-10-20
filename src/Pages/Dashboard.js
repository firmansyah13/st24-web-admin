import React from "react";
import NavMenu from "../Components/NavMenu";
import Sidebar from "../Components/SidebarMenu";

const Dashboard = () => {
  return (
    <div className="flex h-full sm:h-full bg-gray-200">
      <Sidebar />
      <div className="h-full sm:h-screen flex-1">
        <NavMenu />
        <div className="container-fluid max-h-screen px-2" style={{ height: "auto", background: "#E5E7EB" }}>
          <h1 className="text-2xl font-semibold text-left mt-2 mb-2">Dashboard</h1>
          <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mb-8 gap-8">
            <div className="bg-[#F1FCF6] dark:bg-gray-800 rounded py-5 pl-6 flex items-start shadow">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="#D7F2D7" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="10" fill="#D7F2D7" />
                <path d="M18 8C23.5228 8 28 12.4771 28 18C28 23.5228 23.5228 28 18 28C12.4771 28 8 23.5228 8 18C8 12.4771 12.4771 8 18 8ZM18 9.5C13.3056 9.5 9.5 13.3056 9.5 18C9.5 22.6944 13.3056 26.5 18 26.5C22.6944 26.5 26.5 22.6944 26.5 18C26.5 13.3056 22.6944 9.5 18 9.5ZM16.75 19.4393L21.2197 14.9697C21.5126 14.6768 21.9874 14.6768 22.2803 14.9697C22.5466 15.2359 22.5708 15.6526 22.3529 15.9462L22.2803 16.0303L17.2803 21.0303C17.0141 21.2966 16.5974 21.3208 16.3038 21.1029L16.2197 21.0303L13.7197 18.5303C13.4268 18.2374 13.4268 17.7626 13.7197 17.4697C13.9859 17.2034 14.4026 17.1792 14.6962 17.3971L14.7803 17.4697L16.75 19.4393L21.2197 14.9697L16.75 19.4393Z" fill="#27AE60" />
              </svg>
              <div className="mt-1">
                <p tabIndex="0" className="focus:outline-none font-medium leading-4 mt-1.5 ml-2 text-gray-800 dark:text-gray-100 text-lg">Jumlah Trx <span className="text-[#27AE60]">Berhasil</span> hari ini</p>
                <p className="text-left mt-3 -ml-8 text-[#363740] text-3xl">10.000</p>
                <p className="text-[#7D7E7F] mt-4 -ml-8 text-left font-medium text-base">Nilai Trx</p>
                <p className="text-left -ml-8 text-[#363740] text-2xl">Rp 100.000.000.000</p>
              </div>
            </div>
            <div className="bg-[#FFF8F1] dark:bg-gray-800 rounded py-5 pl-6 flex items-start shadow">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="#FFEFC6" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="10" fill="#FFEFC6" />
                <path d="M18 8C23.523 8 28 12.478 28 18C28 23.522 23.523 28 18 28C12.477 28 8 23.522 8 18C8 12.478 12.477 8 18 8ZM18 9.667C13.405 9.667 9.667 13.405 9.667 18C9.667 22.595 13.405 26.333 18 26.333C22.595 26.333 26.333 22.595 26.333 18C26.333 13.405 22.595 9.667 18 9.667ZM17.25 12C17.6295 12 17.9435 12.2823 17.9931 12.6483L18 12.75V18H21.25C21.664 18 22 18.336 22 18.75C22 19.1295 21.7177 19.4435 21.3517 19.4931L21.25 19.5H17.25C16.8705 19.5 16.5565 19.2177 16.5069 18.8517L16.5 18.75V12.75C16.5 12.336 16.836 12 17.25 12Z" fill="#F5B51B" />
              </svg>
              <div className="mt-1">
                <p tabIndex="0" className="focus:outline-none font-medium leading-4 mt-1.5 ml-2 text-gray-800 dark:text-gray-100 text-lg">Jumlah Trx <span className="text-[#F5B51B]">Menunggu</span> hari ini</p>
                <p className="text-left mt-3 -ml-8 text-[#363740] text-3xl">10.000</p>
                <p className="text-[#7D7E7F] mt-4 -ml-8 text-left font-medium text-base">Nilai Trx</p>
                <p className="text-left -ml-8 text-[#363740] text-2xl">Rp 100.000.000.000</p>
              </div>
            </div>
            <div className="bg-[#FEEEEF] dark:bg-gray-800 rounded py-5 pl-6 flex items-start shadow">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="10" fill="#FBD6D6" />
                <path d="M18 8C23.5228 8 28 12.4771 28 18C28 23.5228 23.5228 28 18 28C12.4771 28 8 23.5228 8 18C8 12.4771 12.4771 8 18 8ZM18 9.5C13.3056 9.5 9.5 13.3056 9.5 18C9.5 22.6944 13.3056 26.5 18 26.5C22.6944 26.5 26.5 22.6944 26.5 18C26.5 13.3056 22.6944 9.5 18 9.5ZM21.4462 14.397L21.5303 14.4697C21.7966 14.7359 21.8208 15.1526 21.6029 15.4462L21.5303 15.5303L19.061 18L21.5303 20.4697C21.7966 20.7359 21.8208 21.1526 21.6029 21.4462L21.5303 21.5303C21.2641 21.7966 20.8474 21.8208 20.5538 21.6029L20.4697 21.5303L18 19.061L15.5303 21.5303C15.2641 21.7966 14.8474 21.8208 14.5538 21.6029L14.4697 21.5303C14.2034 21.2641 14.1792 20.8474 14.397 20.5538L14.4697 20.4697L16.939 18L14.4697 15.5303C14.2034 15.2641 14.1792 14.8474 14.397 14.5538L14.4697 14.4697C14.7359 14.2034 15.1526 14.1792 15.4462 14.397L15.5303 14.4697L18 16.939L20.4697 14.4697C20.7359 14.2034 21.1526 14.1792 21.4462 14.397Z" fill="#ED2D2F" />
              </svg>
              <div className="mt-1">
                <p tabIndex="0" className="focus:outline-none font-medium leading-4 mt-1.5 ml-2 text-gray-800 dark:text-gray-100 text-lg">Jumlah Trx <span className="text-[#ED2D2F]">Gagal</span> hari ini</p>
                <p className="text-left mt-3 -ml-8 text-[#363740] text-3xl">10.000</p>
                <p className="text-[#7D7E7F] mt-4 -ml-8 text-left font-medium text-base">Nilai Trx</p>
                <p className="text-left -ml-8 text-[#363740] text-2xl">Rp 100.000.000.000</p>
              </div>
            </div>
          </div>

          <div className="overflow-auto relative shadow-md sm:rounded-lg rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-black">
              <thead className="bg-[#11133E] text-white text-base font-semibold uppercase dark:bg-gray-700 dark:text-gray-400">
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
