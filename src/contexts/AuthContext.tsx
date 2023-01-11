import { createContext } from "react";

export interface AuthUser {
  token: string;
  username: string;
}

export interface AuthContextValues {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
}

const AuthContext = createContext<AuthContextValues>({
  user: null,
  setUser: () => null,
});

export default AuthContext;
