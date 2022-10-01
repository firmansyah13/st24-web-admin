import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import LoginPage from './Login';
import Toko from './Toko';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./context/Auth";


const App = () => {
  return (
    // <AuthProvider>
      // <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          {/* <Route element={<RequireAuth />}> */}
            <Route path="/" element={<Dashboard />} />
            <Route path='/toko' element={<Toko />} />
          {/* </Route> */}
        </Routes>
      {/* </BrowserRouter> */}
    // </AuthProvider >
  );
};

export default App;