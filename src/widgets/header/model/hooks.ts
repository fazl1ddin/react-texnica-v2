import React from "react";
import { AuthContext } from "./context";

const useAuthContext = () => {
  return React.useContext(AuthContext);
};

export { useAuthContext };
