// import { useRoutes } from "react-router-dom";
import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import LoginPage from './Login';
// import RequireAuth from "./context/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./context/Auth";

// function App() {
//   const routes = useRoutes([
//     {
//       path: "/",
//       element: <Dashboard />
//     },
//     {
//       path: "/login",
//       element: <LoginPage />
//     }
//   ]);
//   return routes;
// }
const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};


export default App;
