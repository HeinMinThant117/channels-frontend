import React, { useEffect, useMemo, useState } from "react";
import { Grid } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import ChannelsSideBar from "./components/ChannelsSideBar";
import ChatArea from "./components/ChatArea";
import AuthContext, { AuthUser } from "./contexts/AuthContext";

function getUserFromStorage(): AuthUser | null {
  const user = localStorage.getItem("channelsUserData");
  if (user != null) {
    return JSON.parse(user) as AuthUser | null;
  }
  return null;
}

function App(): JSX.Element {
  const [user, setUser] = useState<AuthUser | null>(getUserFromStorage);

  useEffect(() => {
    localStorage.setItem("channelsUserData", JSON.stringify(user));
  }, [user]);

  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <AuthContext.Provider value={providerValue}>
      <Grid h="100vh" templateRows="64px 1fr" templateColumns="20% 1fr">
        <Navbar />
        <ChannelsSideBar />
        <ChatArea />
      </Grid>
    </AuthContext.Provider>
  );
}

export default App;
