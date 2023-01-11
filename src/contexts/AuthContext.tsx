import { createContext } from "react";

interface AuthContextValues {
  token: string;
  username: string;
}

const AuthContext = createContext<AuthContextValues | null>(null);

export default AuthContext;
