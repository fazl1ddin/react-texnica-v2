import React from "react";
import { IAuthContext } from "./store";
import { initialData } from "./store/auth";

const AuthContext = React.createContext<IAuthContext>(initialData);

const { Provider: AuthProvider } = AuthContext;
export { AuthProvider, AuthContext };
