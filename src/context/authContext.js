// import { createContext, useContext, useState } from "react";
// import { useLocation, Navigate, Outlet } from "react-router-dom";

// const AuthContext = createContext(null);

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     return (
//         <AuthContext.Provider value={{ user, setUser }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

import { createContext, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useLocation, Navigate, Outlet } from "react-router-dom";

// const AuthContext = createContext({});
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const RequireAuth = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
      return (
          <Navigate
              to={{ pathname: "/login", state: { from: location } }}
              replace
          />
      );
  }

  return <Outlet />;
};

export { AuthProvider, AuthContext, RequireAuth };
