import { createContext } from "react";
import useAuth from "../hooks/useAuth";

const AuthContext = createContext({});

const AuthProvider = (props) => {
  const { children } = props;
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth} {...props}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };