import React, { useContext, memo } from "react";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Toko from "./Pages/Toko";
import Produk from "./Pages/Produk";
import Report from "./Pages/Report";
import User from "./Pages/User";
import Rebate from "./Pages/Rebate";
import Tiket from "./Pages/Tiket";
import Inout from "./Pages/Inout";
import Broadcast from "./Pages/Broadcast";
import SMSCP from "./Pages/SMSCP";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { AuthContext } from "./context";

export default function RouterApp() {
  const auth = useContext(AuthContext);
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/toko" element={<Toko />} />
            <Route path="/produk" element={<Produk />} />
            <Route path="/user" element={<User />} />
            <Route path="/report" element={<Report />} />
            <Route path="/rebate" element={<Rebate />} />
            <Route path="/tiket-deposit" element={<Tiket />} />
            <Route path="/inout" element={<Inout />} />
            <Route path="/broadcast" element={<Broadcast />} />
            <Route path="/smscp" element={<SMSCP />} />
        </Routes>
      </BrowserRouter>
  );
}
