import React, { useState, useContext } from "react";
import {
  faChevronLeft,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.css";
import Logo from "./logo.svg";
// import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

const SidebarMenu = () => {
  const [open, setOpen] = useState(true);
  const auth = useContext(AuthContext);

  return (
    <div
      className={` ${
        open ? "w-56" : "w-20 "
      } p-5 pt-2.5 bg-[#11133E] relative duration-300`}
    >
      <button
        className={`bg-[#282B51] focus:ring-white focus:ring-1 ring-1 ring-white outline-grey hover:bg-[#1DBDED] px-1.5 text-center inline-flex items-center dark:focus:ring-[#1DBDED]/55 absolute cursor-pointer -right-6 top-5 w-6 h-6 rounded-full ${!open && "rotate-180"
          }`}
        onClick={() => setOpen(!open)}
      >
        <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#FDFDFE" }} />
      </button>

      <div className="flex gap-x-4 items-center">
        <img
          src={Logo}
          className={`cursor-pointer duration-500 w-14 h-14 sm:h-9 sm:w-9 ${open && "rotate-[360deg]"
            }`}
        />
        <h1
          className={`text-black text-left font-medium text-xl duration-200 w-64 ${!open && "scale-0"
            }`}
        >
          <div className="w-64">
            <span className="mr-3.5 text-white font-2xl font-bold">S</span>
            <span className="mr-3.5 text-white font-2xl font-bold">T</span>
            <span className="mr-3.5 text-white font-2xl font-bold">-</span>
            <span className="mr-3.5 text-white font-2xl font-bold">2</span>
            <span className="text-white font-2xl font-bold">4</span>
          </div>
          <div className="w-72 -mt-3">
            <span className="text-white text-xs">SystemTopUp24Jam</span>
          </div>
        </h1>
      </div>
      <div className="overflow-y-auto">
        <ul className="pt-4 mt-4 space-y-2">
          <li>
            <a
              href="/"
              className="flex items-center p-2 text-sm font-bold text-[#F3F9FE] rounded-lg transition duration-75 hover:bg-[#F3F9FE] hover:text-[#223E92] active:bg-[#F3F9FE] active:text-[#223E92] hover:line-clamp-[#223E92] dark:hover:bg-gray-700 dark:text-white group"
            >
              <svg
                viewBox="0 0 18 18"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-6 h-6 text-[#F3F9FE] transition duration-75 dark:text-gray-400 group-hover:text-[#223E92] dark:group-hover:text-white"
              >
                <path d="M8.5022 11.25C8.5022 10.2835 7.7187 9.5 6.75224 9.5H4.75224C3.78574 9.5 3.00224 10.2835 3.00224 11.25V13.25C3.00224 14.2165 3.78574 15 4.75224 15H6.75224C7.7187 15 8.5022 14.2165 8.5022 13.25V11.25ZM4.75224 11H6.75224C6.89031 11 7.0022 11.1119 7.0022 11.25V13.25C7.0022 13.3881 6.89031 13.5 6.75224 13.5H4.75224C4.61417 13.5 4.50224 13.3881 4.50224 13.25V11.25C4.50224 11.1119 4.61417 11 4.75224 11ZM14.9997 11.25C14.9997 10.2835 14.2162 9.5 13.2497 9.5H11.2497C10.2832 9.5 9.4997 10.2835 9.4997 11.25V13.25C9.4997 14.2165 10.2832 15 11.2497 15H13.2497C14.2162 15 14.9997 14.2165 14.9997 13.25V11.25ZM11.2497 11H13.2497C13.3878 11 13.4997 11.1119 13.4997 11.25V13.25C13.4997 13.3881 13.3878 13.5 13.2497 13.5H11.2497C11.1116 13.5 10.9997 13.3881 10.9997 13.25V11.25C10.9997 11.1119 11.1116 11 11.2497 11ZM8.501 4.75C8.501 3.7835 7.7175 3 6.75098 3H4.75098C3.78448 3 3.00098 3.7835 3.00098 4.75V6.75C3.00098 7.7165 3.78448 8.5 4.75098 8.5H6.75098C7.7175 8.5 8.501 7.7165 8.501 6.75V4.75ZM4.75098 4.5H6.75098C6.88905 4.5 7.001 4.61193 7.001 4.75V6.75C7.001 6.88807 6.88905 7 6.75098 7H4.75098C4.61291 7 4.50098 6.88807 4.50098 6.75V4.75C4.50098 4.61193 4.61291 4.5 4.75098 4.5ZM14.9984 4.75C14.9984 3.7835 14.2149 3 13.2484 3H11.2484C10.2819 3 9.4984 3.7835 9.4984 4.75V6.75C9.4984 7.7165 10.2819 8.5 11.2484 8.5H13.2484C14.2149 8.5 14.9984 7.7165 14.9984 6.75V4.75ZM11.2484 4.5H13.2484C13.3865 4.5 13.4984 4.61193 13.4984 4.75V6.75C13.4984 6.88807 13.3865 7 13.2484 7H11.2484C11.1104 7 10.9984 6.88807 10.9984 6.75V4.75C10.9984 4.61193 11.1104 4.5 11.2484 4.5ZM3.25 0C1.45507 0 0 1.45507 0 3.25V14.75C0 16.5449 1.45507 18 3.25 18H14.75C16.5449 18 18 16.5449 18 14.75V3.25C18 1.45507 16.5449 0 14.75 0H3.25ZM1.5 3.25C1.5 2.2835 2.2835 1.5 3.25 1.5H14.75C15.7165 1.5 16.5 2.2835 16.5 3.25V14.75C16.5 15.7165 15.7165 16.5 14.75 16.5H3.25C2.2835 16.5 1.5 15.7165 1.5 14.75V3.25Z" />
              </svg>
              <span className="ml-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-sm font-bold text-[#F3F9FE] rounded-lg transition duration-75 hover:bg-[#F3F9FE] hover:text-[#223E92] dark:hover:bg-gray-700 dark:text-white group"
            >
              <svg
                viewBox="0 0 20 21"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-6 h-6 text-[#F3F9FE] transition duration-75 dark:text-gray-400 group-hover:text-[#223E92] dark:group-hover:text-white"
              >
                <path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C8.3817 20 6.81782 19.6146 5.41286 18.888L1.58704 19.9553C0.92212 20.141 0.23258 19.7525 0.04691 19.0876C-0.01454 18.8676 -0.0145099 18.6349 0.0469501 18.4151L1.11461 14.5922C0.38637 13.186 0 11.6203 0 10C0 4.47715 4.47715 0 10 0ZM10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 11.4696 1.87277 12.8834 2.57303 14.1375L2.72368 14.4072L1.61096 18.3914L5.59755 17.2792L5.86709 17.4295C7.12006 18.1281 8.5322 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5ZM6.75 11H11.2483C11.6625 11 11.9983 11.3358 11.9983 11.75C11.9983 12.1297 11.7161 12.4435 11.35 12.4932L11.2483 12.5H6.75C6.33579 12.5 6 12.1642 6 11.75C6 11.3703 6.28215 11.0565 6.64823 11.0068L6.75 11H11.2483H6.75ZM6.75 7.5H13.2545C13.6687 7.5 14.0045 7.83579 14.0045 8.25C14.0045 8.6297 13.7223 8.9435 13.3563 8.9932L13.2545 9H6.75C6.33579 9 6 8.6642 6 8.25C6 7.8703 6.28215 7.55651 6.64823 7.50685L6.75 7.5H13.2545H6.75Z" />
              </svg>
              <span className="ml-3">&nbsp;Pesan</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-sm font-bold text-[#F3F9FE] rounded-lg transition duration-75 hover:bg-[#F3F9FE] hover:text-[#223E92] dark:hover:bg-gray-700 dark:text-white group"
            >
              <svg
                viewBox="0 0 21 21"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-6 h-6 text-[#F3F9FE] transition duration-75 dark:text-gray-400 group-hover:text-[#223E92] dark:group-hover:text-white"
              >
                <path d="M19.9998 2.25C19.9998 1.00736 18.9925 0 17.7498 0H12.2845C11.4218 0 10.5946 0.34297 9.985 0.95334L1.48531 9.4632C0.216994 10.7334 0.218624 12.7913 1.48909 14.0592L5.95079 18.5143C7.22195 19.7807 9.2777 19.7798 10.5472 18.5129L10.5502 18.5099C10.3111 17.9908 10.1474 17.4401 10.0641 16.8745L9.487 17.4518C8.8033 18.134 7.69493 18.1345 7.01006 17.4522L2.54884 12.9977C1.86898 12.3191 1.86389 11.2207 2.53412 10.5358L11.0463 2.01333C11.3745 1.68467 11.82 1.5 12.2845 1.5H17.7498C18.164 1.5 18.4998 1.83579 18.4998 2.25V7.71196C18.4998 8.176 18.3155 8.6211 17.9874 8.9492L16.8731 10.0639C17.4387 10.147 17.9894 10.3106 18.5085 10.5496L19.0482 10.0098C19.6575 9.4003 19.9998 8.5738 19.9998 7.71196V2.25ZM16.4998 5.00216C16.4998 4.17374 15.8282 3.50218 14.9998 3.50218C14.1714 3.50218 13.4998 4.17374 13.4998 5.00216C13.4998 5.83057 14.1714 6.50213 14.9998 6.50213C15.8282 6.50213 16.4998 5.83057 16.4998 5.00216ZM12.7803 10.2803C13.0732 9.9874 13.0732 9.5126 12.7803 9.2197C12.4874 8.9268 12.0126 8.9268 11.7197 9.2197L9.7197 11.2197C9.4268 11.5126 9.4268 11.9874 9.7197 12.2803L11.7197 14.2803C12.0126 14.5732 12.4874 14.5732 12.7803 14.2803C13.0732 13.9874 13.0732 13.5126 12.7803 13.2197L12.0607 12.5H16C16.6922 12.5 17.3689 12.7053 17.9445 13.0899C18.5201 13.4744 18.9687 14.0211 19.2336 14.6606C19.4985 15.3001 19.5678 16.0039 19.4327 16.6828C19.2977 17.3617 18.9644 17.9854 18.4749 18.4749C17.9854 18.9644 17.3617 19.2977 16.6828 19.4327C16.0039 19.5678 15.3001 19.4985 14.6606 19.2336C14.0211 18.9687 13.4744 18.5201 13.0899 17.9445C12.7053 17.3689 12.5 16.6922 12.5 16C12.5 15.5858 12.1642 15.25 11.75 15.25C11.3358 15.25 11 15.5858 11 16C11 16.9889 11.2932 17.9556 11.8427 18.7779C12.3921 19.6001 13.173 20.241 14.0866 20.6194C15.0002 20.9978 16.0055 21.0969 16.9755 20.9039C17.9454 20.711 18.8363 20.2348 19.5355 19.5355C20.2348 18.8363 20.711 17.9454 20.9039 16.9755C21.0969 16.0055 20.9978 15.0002 20.6194 14.0866C20.241 13.173 19.6001 12.3921 18.7779 11.8427C17.9556 11.2932 16.9889 11 16 11H12.0607L12.7803 10.2803Z" />
              </svg>
              <span className="ml-3">&nbsp;Rebate</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-sm font-bold text-[#F3F9FE] rounded-lg transition duration-75 hover:bg-[#F3F9FE] hover:text-[#223E92] dark:hover:bg-gray-700 dark:text-white group"
            >
              <svg
                viewBox="0 0 20 14"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-6 h-6 text-[#F3F9FE] transition duration-75 dark:text-gray-400 group-hover:text-[#223E92] dark:group-hover:text-white"
              >
                <path d="M18.25 0C19.2165 0 20.0001 0.7835 20.0001 1.74996V4.01021C20.0001 4.40055 19.7008 4.72565 19.3118 4.75772C18.1512 4.85342 17.25 5.8273 17.25 7C17.25 8.1727 18.1512 9.1466 19.3118 9.2423C19.7008 9.2744 20.0001 9.5995 20.0001 9.9898V12.25C20.0001 13.2165 19.2165 14 18.25 14H1.75C0.7835 14 0 13.2165 0 12.2499L0.000289917 9.9896C0.000339917 9.5994 0.29964 9.2744 0.68856 9.2423C1.84903 9.1464 2.75 8.1726 2.75 7C2.75 5.8274 1.84903 4.8536 0.68856 4.75775C0.29964 4.72562 0.000339917 4.40063 0.000289917 4.01039L0 1.75C0 0.7835 0.7835 0 1.75 0H18.25ZM18.5001 3.38474V1.75C18.5001 1.61193 18.3881 1.5 18.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.7499L1.50021 3.38483C3.09313 3.82406 4.25 5.284 4.25 7C4.25 8.716 3.09313 10.1759 1.50021 10.6152L1.5 12.25C1.5 12.3881 1.61193 12.5 1.75 12.5H18.25C18.3881 12.5 18.5001 12.3881 18.5001 12.25V10.6153C16.907 10.1761 15.75 8.7161 15.75 7C15.75 5.3525 16.8163 3.94108 18.3111 3.44229L18.5001 3.38474Z" />
              </svg>
              <span className="ml-3 mr-1">&nbsp;Tiket</span>
              <span>Deposit</span>
            </a>
          </li>
          <li>
            <a
              href="/report"
              className="flex items-center p-2 text-sm font-bold text-[#F3F9FE] rounded-lg transition duration-75 hover:bg-[#F3F9FE] hover:text-[#223E92] dark:hover:bg-gray-700 dark:text-white group"
            >
              <svg
                viewBox="0 0 16 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-6 h-6 text-[#F3F9FE] transition duration-75 dark:text-gray-400 group-hover:text-[#223E92] dark:group-hover:text-white"
              >
                <path d="M9.75 0C10.9409 0 11.9156 0.92516 11.9948 2.09595L12 2.25C12 2.16531 11.9953 2.0817 11.9862 1.99944L13.75 2C14.9926 2 16 3.00736 16 4.25V17.75C16 18.9926 14.9926 20 13.75 20H2.25C1.00736 20 0 18.9926 0 17.75V4.25C0 3.00736 1.00736 2 2.25 2L4.01379 1.99944C4.00733 2.05774 4.0031 2.11671 4.00119 2.17626L4 2.25C4 1.00736 5.00736 0 6.25 0H9.75ZM9.75 4.5H6.25C5.45595 4.5 4.75797 4.08867 4.35751 3.46746L4.37902 3.5002L2.25 3.5C1.83579 3.5 1.5 3.83579 1.5 4.25V17.75C1.5 18.1642 1.83579 18.5 2.25 18.5H13.75C14.1642 18.5 14.5 18.1642 14.5 17.75V4.25C14.5 3.83579 14.1642 3.5 13.75 3.5L11.621 3.5002L11.6425 3.46746C11.242 4.08867 10.5441 4.5 9.75 4.5ZM9.75 1.5H6.25C5.83579 1.5 5.5 1.83579 5.5 2.25C5.5 2.66421 5.83579 3 6.25 3H9.75C10.1642 3 10.5 2.66421 10.5 2.25C10.5 1.83579 10.1642 1.5 9.75 1.5ZM4 12.5H8C8.4142 12.5 8.75 12.1642 8.75 11.75C8.75 11.3358 8.4142 11 8 11H4C3.58579 11 3.25 11.3358 3.25 11.75C3.25 12.1642 3.58579 12.5 4 12.5ZM4 8.5H12C12.4142 8.5 12.75 8.1642 12.75 7.75C12.75 7.33579 12.4142 7 12 7H4C3.58579 7 3.25 7.33579 3.25 7.75C3.25 8.1642 3.58579 8.5 4 8.5ZM4 16.5H10C10.4142 16.5 10.75 16.1642 10.75 15.75C10.75 15.3358 10.4142 15 10 15H4C3.58579 15 3.25 15.3358 3.25 15.75C3.25 16.1642 3.58579 16.5 4 16.5Z" />
              </svg>
              <span className="ml-3">&nbsp;Report</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-sm font-bold text-[#F3F9FE] rounded-lg transition duration-75 hover:bg-[#F3F9FE] hover:text-[#223E92] dark:hover:bg-gray-700 dark:text-white group"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-6 h-6 text-[#F3F9FE] transition duration-75 dark:text-gray-400 group-hover:text-[#223E92] dark:group-hover:text-white"
              >
                <path d="M10 0C15.523 0 20 4.478 20 10C20 15.522 15.523 20 10 20C4.477 20 0 15.522 0 10C0 4.478 4.477 0 10 0ZM10 1.667C5.405 1.667 1.667 5.405 1.667 10C1.667 14.595 5.405 18.333 10 18.333C14.595 18.333 18.333 14.595 18.333 10C18.333 5.405 14.595 1.667 10 1.667ZM9.25 4C9.6295 4 9.9435 4.28233 9.9931 4.64827L10 4.75V10H13.25C13.664 10 14 10.336 14 10.75C14 11.1295 13.7177 11.4435 13.3517 11.4931L13.25 11.5H9.25C8.8705 11.5 8.5565 11.2177 8.5069 10.8517L8.5 10.75V4.75C8.5 4.336 8.836 4 9.25 4Z" />
              </svg>
              <span className="ml-3 mr-14">&nbsp;History</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-sm font-bold text-[#F3F9FE] rounded-lg transition duration-75 hover:bg-[#F3F9FE] hover:text-[#223E92] dark:hover:bg-gray-700 dark:text-white group"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-6 h-6 text-[#F3F9FE] transition duration-75 dark:text-gray-400 group-hover:text-[#223E92] dark:group-hover:text-white"
              >
                <path d="M10.0127 0.25C10.7466 0.25846 11.4777 0.34326 12.1942 0.50304C12.5069 0.57279 12.7408 0.83351 12.7763 1.15196L12.9465 2.67881C13.0235 3.37986 13.6155 3.91084 14.3211 3.91158C14.5108 3.91188 14.6984 3.87238 14.8737 3.79483L16.2743 3.17956C16.5656 3.05159 16.906 3.12136 17.1234 3.35362C18.1356 4.43464 18.8894 5.73115 19.3282 7.14558C19.4228 7.45058 19.3139 7.78203 19.0568 7.9715L17.8154 8.8866C17.4612 9.1468 17.2521 9.56 17.2521 9.9995C17.2521 10.4389 17.4612 10.8521 17.8161 11.1129L19.0587 12.0283C19.3158 12.2177 19.4248 12.5492 19.3302 12.8543C18.8916 14.2685 18.1382 15.5649 17.1266 16.6461C16.9093 16.8783 16.5693 16.9483 16.278 16.8206L14.8716 16.2045C14.4693 16.0284 14.0072 16.0542 13.627 16.274C13.2468 16.4937 12.9938 16.8812 12.9454 17.3177L12.7764 18.8444C12.7415 19.1592 12.5126 19.4182 12.2045 19.4915C10.7561 19.8361 9.247 19.8361 7.79852 19.4915C7.49039 19.4182 7.26153 19.1592 7.22667 18.8444L7.05785 17.32C7.00826 16.8843 6.75483 16.498 6.37491 16.279C5.995 16.06 5.53369 16.0343 5.13269 16.2094L3.72606 16.8256C3.43471 16.9533 3.09452 16.8833 2.87727 16.6509C1.86511 15.5685 1.11168 14.2705 0.673691 12.8548C0.579351 12.5499 0.68835 12.2186 0.94533 12.0293L2.18867 11.1133C2.54281 10.8531 2.75196 10.4399 2.75196 10.0005C2.75196 9.561 2.54281 9.1478 2.1882 8.8873L0.945651 7.97285C0.688281 7.78345 0.579181 7.45178 0.673861 7.14658C1.11261 5.73215 1.86643 4.43564 2.87861 3.35462C3.09608 3.12236 3.43643 3.05259 3.72773 3.18056L5.12811 3.79572C5.53105 3.97256 5.99429 3.94585 6.37626 3.72269C6.75658 3.50209 7.00977 3.11422 7.05866 2.67764L7.22873 1.15196C7.26425 0.83335 7.49835 0.57254 7.81129 0.50294C8.5286 0.34342 9.2604 0.25865 10.0127 0.25ZM10.0128 1.7499C9.5588 1.75524 9.106 1.79443 8.6583 1.86702L8.5494 2.84418C8.4476 3.75368 7.92052 4.56102 7.13091 5.01903C6.33646 5.48317 5.36785 5.53903 4.52507 5.16917L3.62678 4.77456C3.05485 5.46873 2.59963 6.25135 2.27901 7.09168L3.07681 7.67879C3.81562 8.2216 4.25196 9.0837 4.25196 10.0005C4.25196 10.9172 3.81562 11.7793 3.07759 12.3215L2.27853 12.9102C2.59887 13.752 3.05417 14.5361 3.62649 15.2316L4.53162 14.8351C5.36971 14.4692 6.33173 14.5227 7.12402 14.9794C7.9163 15.4361 8.4448 16.2417 8.5485 17.1526L8.6574 18.1365C9.5471 18.2878 10.4559 18.2878 11.3456 18.1365L11.4545 17.1527C11.5553 16.2421 12.0832 15.4337 12.8765 14.9753C13.6697 14.5168 14.6337 14.463 15.4733 14.8305L16.3777 15.2267C16.9495 14.5323 17.4046 13.7495 17.7252 12.909L16.9272 12.3211C16.1884 11.7783 15.7521 10.9162 15.7521 9.9995C15.7521 9.0827 16.1884 8.2206 16.9263 7.67847L17.7232 7.09109C17.4026 6.25061 16.9473 5.46784 16.3753 4.77356L15.4788 5.16737C15.1134 5.32901 14.7183 5.4122 14.3192 5.41158C12.8495 5.41004 11.616 4.30355 11.4556 2.84383L11.3467 1.8667C10.9012 1.7942 10.4531 1.75512 10.0128 1.7499ZM10.0002 6.24995C12.0713 6.24995 13.7502 7.92888 13.7502 10C13.7502 12.071 12.0713 13.75 10.0002 13.75C7.92912 13.75 6.25018 12.071 6.25018 10C6.25018 7.92888 7.92912 6.24995 10.0002 6.24995ZM10.0002 7.74995C8.7575 7.74995 7.75018 8.7573 7.75018 10C7.75018 11.2426 8.7575 12.25 10.0002 12.25C11.2428 12.25 12.2502 11.2426 12.2502 10C12.2502 8.7573 11.2428 7.74995 10.0002 7.74995Z" />
              </svg>
              <span className="ml-3 mr-14">&nbsp;Setting</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </a>
          </li>
        </ul>
        <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-sm font-bold text-[#F3F9FE] rounded-lg transition duration-75 hover:bg-[#F3F9FE] hover:text-[#223E92] dark:hover:bg-gray-700 dark:text-white group"
            >
              <svg
                viewBox="0 0 21 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-6 h-6 text-[#F3F9FE] transition duration-75 dark:text-gray-400 group-hover:text-[#223E92] dark:group-hover:text-white"
              >
                <path d="M3.5 4C3.5 2.61929 4.61929 1.5 6 1.5C7.38071 1.5 8.5 2.61929 8.5 4C8.5 5.38071 7.38071 6.5 6 6.5C4.61929 6.5 3.5 5.38071 3.5 4ZM6 0C3.79086 0 2 1.79086 2 4C2 6.20914 3.79086 8 6 8C8.2091 8 10 6.20914 10 4C10 1.79086 8.2091 0 6 0ZM13.5 5C13.5 4.17157 14.1716 3.5 15 3.5C15.8284 3.5 16.5 4.17157 16.5 5C16.5 5.82843 15.8284 6.5 15 6.5C14.1716 6.5 13.5 5.82843 13.5 5ZM15 2C13.3431 2 12 3.34315 12 5C12 6.65685 13.3431 8 15 8C16.6569 8 18 6.65685 18 5C18 3.34315 16.6569 2 15 2ZM2.25 10C1.00736 10 0 11.0074 0 12.25V12.5011V12.5022L1.00136e-05 12.5048L7.00951e-05 12.5111L0.000349998 12.5277C0.000639998 12.5406 0.00116999 12.5571 0.00209999 12.5771C0.00395999 12.6169 0.00744991 12.6705 0.0139799 12.7358C0.0270099 12.8661 0.05233 13.045 0.10165 13.2564C0.19995 13.6776 0.39654 14.2404 0.79183 14.8051C1.61066 15.9749 3.17178 17 6 17C7.36897 17 8.4411 16.7598 9.2758 16.3793C9.1268 15.8851 9.035 15.366 9.0082 14.8299C8.3633 15.2108 7.41267 15.5 6 15.5C3.57822 15.5 2.51434 14.6501 2.02067 13.9449C1.75971 13.5721 1.62818 13.1974 1.56241 12.9155C1.5297 12.7753 1.514 12.6612 1.50653 12.5865C1.50281 12.5493 1.50117 12.5222 1.50047 12.5072L1.5 12.4947V12.25C1.5 11.8358 1.83579 11.5 2.25 11.5H9.7322C9.9807 11.0233 10.2865 10.5813 10.6405 10.1831C10.3674 10.0653 10.0663 10 9.75 10H2.25ZM12.2772 10.9759C12.592 12.0661 11.9376 13.1995 10.836 13.4721L10.2518 13.6166C10.2069 13.9043 10.1836 14.1995 10.1836 14.5003C10.1836 14.815 10.2091 15.1235 10.2582 15.4237L10.7976 15.5536C11.9102 15.8216 12.5715 16.9666 12.2476 18.0641L12.0613 18.6954C12.5005 19.081 13.0009 19.3942 13.5455 19.6169L14.0388 19.0982C14.8273 18.269 16.1496 18.2692 16.9379 19.0987L17.4366 19.6235C17.9801 19.4032 18.4801 19.093 18.9194 18.7106L18.7214 18.0247C18.4066 16.9344 19.061 15.801 20.1626 15.5285L20.7463 15.384C20.7912 15.0963 20.8145 14.8011 20.8145 14.5003C20.8145 14.1856 20.789 13.877 20.7399 13.5767L20.2009 13.4469C19.0884 13.179 18.4271 12.034 18.751 10.9364L18.9371 10.3056C18.498 9.9198 17.9975 9.6066 17.4529 9.3838L16.9598 9.9023C16.1713 10.7316 14.849 10.7313 14.0607 9.9018L13.5619 9.377C13.0184 9.5972 12.5184 9.9073 12.0791 10.2897L12.2772 10.9759ZM15.4991 16.0003C14.6984 16.0003 14.0494 15.3287 14.0494 14.5003C14.0494 13.6719 14.6984 13.0003 15.4991 13.0003C16.2997 13.0003 16.9487 13.6719 16.9487 14.5003C16.9487 15.3287 16.2997 16.0003 15.4991 16.0003Z" />
              </svg>
              <span className="ml-4 mr-3">Management</span>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-6 h-6 text-[#F3F9FE] transition duration-75 dark:text-gray-400 group-hover:text-[#223E92] dark:group-hover:text-white"
              >
                <path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5ZM10 5C10.4142 5 10.75 5.33579 10.75 5.75V9.25H14.25C14.6642 9.25 15 9.5858 15 10C15 10.4142 14.6642 10.75 14.25 10.75H10.75V14.25C10.75 14.6642 10.4142 15 10 15C9.5858 15 9.25 14.6642 9.25 14.25V10.75H5.75C5.33579 10.75 5 10.4142 5 10C5 9.5858 5.33579 9.25 5.75 9.25H9.25V5.75C9.25 5.33579 9.5858 5 10 5Z" />
                <path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5ZM10 5C10.4142 5 10.75 5.33579 10.75 5.75V9.25H14.25C14.6642 9.25 15 9.5858 15 10C15 10.4142 14.6642 10.75 14.25 10.75H10.75V14.25C10.75 14.6642 10.4142 15 10 15C9.5858 15 9.25 14.6642 9.25 14.25V10.75H5.75C5.33579 10.75 5 10.4142 5 10C5 9.5858 5.33579 9.25 5.75 9.25H9.25V5.75C9.25 5.33579 9.5858 5 10 5Z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-sm font-bold text-[#F3F9FE] rounded-lg transition duration-75 hover:bg-[#F3F9FE] hover:text-[#223E92] dark:hover:bg-gray-700 dark:text-white group"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-6 h-6 text-[#F3F9FE] transition duration-75 dark:text-gray-400 group-hover:text-[#223E92] dark:group-hover:text-white"
              >
                <circle cx="12" cy="12" r="12" fill="#D7F2D7" />
                <path
                  d="M15.8361 13.3335C16.6641 13.3335 17.3353 14.0047 17.3353 14.8327V15.2163C17.3353 15.8125 17.1222 16.3891 16.7345 16.842C15.6883 18.0643 14.0969 18.6675 11.9999 18.6675C9.90267 18.6675 8.312 18.0641 7.2678 16.8413C6.88129 16.3887 6.66895 15.813 6.66895 15.2178V14.8327C6.66895 14.0047 7.34018 13.3335 8.16819 13.3335H15.8361ZM15.8361 14.3335H8.16819C7.89247 14.3335 7.66895 14.557 7.66895 14.8327V15.2178C7.66895 15.5749 7.79635 15.9203 8.02826 16.1919C8.86379 17.1703 10.1744 17.6675 11.9999 17.6675C13.8255 17.6675 15.1372 17.1703 15.9749 16.1917C16.2075 15.9199 16.3353 15.574 16.3353 15.2163V14.8327C16.3353 14.557 16.1117 14.3335 15.8361 14.3335ZM11.9999 5.33659C13.8409 5.33659 15.3333 6.82897 15.3333 8.66992C15.3333 10.5109 13.8409 12.0033 11.9999 12.0033C10.159 12.0033 8.66659 10.5109 8.66659 8.66992C8.66659 6.82897 10.159 5.33659 11.9999 5.33659ZM11.9999 6.33659C10.7113 6.33659 9.66659 7.38126 9.66659 8.66992C9.66659 9.95859 10.7113 11.0033 11.9999 11.0033C13.2886 11.0033 14.3333 9.95859 14.3333 8.66992C14.3333 7.38126 13.2886 6.33659 11.9999 6.33659Z"
                  fill="#42BF32"
                />
              </svg>
              <span className="ml-4">User</span>
            </a>
          </li>
          <li>
            <a
              href="/toko"
              className="flex items-center p-2 text-sm font-bold text-[#F3F9FE] rounded-lg transition duration-75 hover:bg-[#F3F9FE] hover:text-[#223E92] dark:hover:bg-gray-700 dark:text-white group"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-6 h-6 text-[#F3F9FE] transition duration-75 dark:text-gray-400 group-hover:text-[#223E92] dark:group-hover:text-white"
              >
                <circle cx="12" cy="12" r="12" fill="#FBD6D6" />
                <path
                  d="M12.6667 13.3667V13.3333H6.83518C6.00717 13.3333 5.33594 14.0045 5.33594 14.8325V15.2177C5.33594 15.8129 5.54828 16.3885 5.93479 16.8411C6.97899 18.0639 8.56966 18.6674 10.6669 18.6674C10.9053 18.6674 11.137 18.6596 11.3623 18.644C11.3433 18.5433 11.3333 18.4395 11.3333 18.3333V17.6437C11.1193 17.6595 10.8972 17.6674 10.6669 17.6674C8.84137 17.6674 7.53078 17.1702 6.69524 16.1917C6.46334 15.9201 6.33594 15.5748 6.33594 15.2177V14.8325C6.33594 14.5568 6.55946 14.3333 6.83518 14.3333H11.4721C11.6863 13.843 12.1296 13.4757 12.6667 13.3667ZM10.6669 5.33643C12.5079 5.33643 14.0003 6.82881 14.0003 8.66976C14.0003 10.5107 12.5079 12.0031 10.6669 12.0031C8.82596 12.0031 7.33357 10.5107 7.33357 8.66976C7.33357 6.82881 8.82596 5.33643 10.6669 5.33643ZM10.6669 6.33643C9.37824 6.33643 8.33357 7.38109 8.33357 8.66976C8.33357 9.95843 9.37824 11.0031 10.6669 11.0031C11.9556 11.0031 13.0003 9.95843 13.0003 8.66976C13.0003 7.38109 11.9556 6.33643 10.6669 6.33643ZM13.3333 14.0001H13C12.4477 14.0001 12 14.4477 12 15.0001V18.3333C12 18.8856 12.4477 19.3333 13 19.3333H18.3333C18.8856 19.3333 19.3333 18.8856 19.3333 18.3333V15.0001C19.3333 14.4477 18.8856 14.0001 18.3333 14.0001H18V13.1667C18 12.5223 17.4777 12 16.8333 12H14.5C13.8557 12 13.3333 12.5223 13.3333 13.1667V14.0001ZM14.3333 13.1667C14.3333 13.0746 14.4079 13 14.5 13H16.8333C16.9254 13 17 13.0746 17 13.1667V14.0001H14.3333V13.1667Z"
                  fill="#ED2D2F"
                />
              </svg>
              <span className="ml-4">Toko</span>
            </a>
          </li>
          <li>
            <a
              href="/produk"
              className="flex items-center p-2 text-sm font-bold text-[#F3F9FE] rounded-lg transition duration-75 hover:bg-[#F3F9FE] hover:text-[#223E92] dark:hover:bg-gray-700 dark:text-white group"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-6 h-6 text-[#F3F9FE] transition duration-75 dark:text-gray-400 group-hover:text-[#223E92] dark:group-hover:text-white"
              >
                <circle cx="12" cy="12" r="12" fill="#E0DBFE" />
                <path
                  d="M11.332 13.3304V14.3304H6.83287C6.55709 14.3304 6.33352 14.5539 6.33352 14.8297V15.2148C6.33352 15.5719 6.46095 15.9173 6.69291 16.1889C7.52862 17.1674 8.83948 17.6646 10.6654 17.6646C11.4026 17.6646 12.0561 17.5835 12.6284 17.4225L13.4092 18.2171C12.6223 18.5161 11.7061 18.6647 10.6654 18.6647C8.56771 18.6647 6.97671 18.0612 5.93229 16.8383C5.5457 16.3857 5.33331 15.81 5.33331 15.2148V14.8297C5.33331 14.0017 6.00469 13.3304 6.83287 13.3304H11.332ZM13.9994 8.66675C13.9994 6.82575 12.5067 5.33333 10.6654 5.33333C8.82406 5.33333 7.33137 6.82575 7.33137 8.66675C7.33137 10.5077 8.82406 12.0002 10.6654 12.0002C12.5067 12.0002 13.9994 10.5077 13.9994 8.66675ZM8.33157 8.66675C8.33157 7.37805 9.37646 6.33335 10.6654 6.33335C11.9543 6.33335 12.9992 7.37805 12.9992 8.66675C12.9992 9.95544 11.9543 11.0001 10.6654 11.0001C9.37646 11.0001 8.33157 9.95544 8.33157 8.66675ZM15.0475 18.9333L12.3802 16.2185C12.1357 15.9696 11.9988 15.6352 11.9988 15.287V13.3293C11.9988 12.5947 12.5961 11.9991 13.3334 11.9985L15.2785 11.9972C15.6304 11.9969 15.9683 12.1351 16.2186 12.3817L18.9363 15.0578C19.4624 15.5759 19.4661 16.4213 18.9444 16.9436L16.9489 18.9414C16.4237 19.4671 15.5684 19.4635 15.0475 18.9333ZM13.9968 14.6638C14.3646 14.6638 14.6627 14.3653 14.6627 13.9971C14.6627 13.6289 14.3646 13.3305 13.9968 13.3305C13.629 13.3305 13.3308 13.6289 13.3308 13.9971C13.3308 14.3653 13.629 14.6638 13.9968 14.6638Z"
                  fill="#664DF9"
                />
              </svg>
              <span className="ml-4">Produk</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-sm font-bold text-[#F3F9FE] rounded-lg transition duration-75 hover:bg-[#F3F9FE] hover:text-[#223E92] dark:hover:bg-gray-700 dark:text-white group"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-6 h-6 text-[#F3F9FE] transition duration-75 dark:text-gray-400 group-hover:text-[#223E92] dark:group-hover:text-white"
              >
                <circle cx="12" cy="12" r="12" fill="#FFEFC6" />
                <path
                  d="M15.8363 13.3335C16.3562 13.3335 16.8143 13.5981 17.0832 14H13.0001C12.6248 14 12.2784 14.1241 11.9998 14.3335H8.1685C7.89277 14.3335 7.66925 14.557 7.66925 14.8327V15.2178C7.66925 15.5749 7.79666 15.9203 8.02856 16.1919C8.75863 17.0469 9.8514 17.5344 11.3334 17.6438V18.3333C11.3334 18.4409 11.3436 18.5461 11.3631 18.648C9.57842 18.5355 8.20384 17.9371 7.2681 16.8413C6.88159 16.3887 6.66925 15.813 6.66925 15.2178V14.8327C6.66925 14.0047 7.34048 13.3335 8.1685 13.3335H15.8363ZM12.0002 5.33659C13.8412 5.33659 15.3336 6.82898 15.3336 8.66993C15.3336 10.5109 13.8412 12.0033 12.0002 12.0033C10.1593 12.0033 8.66688 10.5109 8.66688 8.66993C8.66688 6.82898 10.1593 5.33659 12.0002 5.33659ZM12.0002 6.33659C10.7116 6.33659 9.66688 7.38127 9.66688 8.66993C9.66688 9.95859 10.7116 11.0033 12.0002 11.0033C13.2889 11.0033 14.3336 9.95859 14.3336 8.66993C14.3336 7.38127 13.2889 6.33659 12.0002 6.33659ZM12.0001 15.6667C12.0001 15.1144 12.4478 14.6667 13.0001 14.6667H18.3334C18.8858 14.6667 19.3334 15.1144 19.3334 15.6667V18.3333C19.3334 18.8856 18.8858 19.3333 18.3334 19.3333H13.0001C12.4478 19.3333 12.0001 18.8856 12.0001 18.3333V15.6667ZM18.6668 16C18.2986 16 18.0001 15.7015 18.0001 15.3333H17.3334C17.3334 16.0697 17.9304 16.6667 18.6668 16.6667V16ZM18.6668 17.3333C17.9304 17.3333 17.3334 17.9303 17.3334 18.6667H18.0001C18.0001 18.2985 18.2986 18 18.6668 18V17.3333ZM13.3334 15.3333C13.3334 15.7015 13.035 16 12.6668 16V16.6667C13.4032 16.6667 14.0001 16.0697 14.0001 15.3333H13.3334ZM14.0001 18.6667C14.0001 17.9303 13.4032 17.3333 12.6668 17.3333V18C13.035 18 13.3334 18.2985 13.3334 18.6667H14.0001ZM16.8334 17C16.8334 16.3557 16.3111 15.8333 15.6668 15.8333C15.0224 15.8333 14.5001 16.3557 14.5001 17C14.5001 17.6443 15.0224 18.1667 15.6668 18.1667C16.3111 18.1667 16.8334 17.6443 16.8334 17Z"
                  fill="#F5B51B"
                />
              </svg>
              <span className="ml-4">Harga</span>
            </a>
          </li>
        </ul>
        <ul className="pt-4 mt-16 space-y-2 border-t border-gray-200 bottom-0 relative dark:border-gray-700">
          <li>
            <a
              href="/login"
              className="flex items-center p-2 text-sm font-bold text-[#F3F9FE] rounded-lg transition duration-75 hover:bg-[#F3F9FE] hover:text-[#223E92] dark:hover:bg-gray-700 dark:text-white group"
              onClick={auth.logout}
            >
              <svg
                viewBox="0 0 19 18"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-6 h-6 text-[#F3F9FE] transition duration-75 dark:text-gray-400 group-hover:text-[#223E92] dark:group-hover:text-white"
              >
                <path d="M12 17.4C12.3313 17.4 12.6 17.1313 12.6 16.8C12.6 16.4687 12.3313 16.2 12 16.2H4.19998C2.87449 16.2 1.79998 15.1255 1.79998 13.8V4.20001C1.79998 2.87452 2.87449 1.80001 4.19998 1.80001H12C12.3313 1.80001 12.6 1.53137 12.6 1.20001C12.6 0.868638 12.3313 0.600006 12 0.600006H4.19998C2.21176 0.600006 0.599976 2.21179 0.599976 4.20001V13.8C0.599976 15.7883 2.21176 17.4 4.19998 17.4H12ZM13.3757 4.37575C13.61 4.14142 13.9899 4.14142 14.2243 4.37575L18.4243 8.57575C18.6585 8.81006 18.6585 9.18997 18.4243 9.42432L14.2243 13.6243C13.9899 13.8586 13.61 13.8586 13.3757 13.6243C13.1414 13.39 13.1414 13.01 13.3757 12.7757L16.5515 9.60001H5.99998C5.66861 9.60001 5.39998 9.33133 5.39998 9.00001C5.39998 8.66864 5.66861 8.40001 5.99998 8.40001H16.5515L13.3757 5.22427C13.1414 4.98995 13.1414 4.61006 13.3757 4.37575Z" />
              </svg>
              <span className="ml-4 mr-1">Log</span>
              <span>Out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SidebarMenu;
