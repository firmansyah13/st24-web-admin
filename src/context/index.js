import React from "react";
import { AuthContext, AuthProvider } from "./authContext";

const SuperProvider = (props) => {
  const { children } = props;

  return <AuthProvider>{children}</AuthProvider>;
};

export { AuthContext };

export default SuperProvider;