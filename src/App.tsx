import React, { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
import { Grid } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import ChannelsSideBar from "./components/ChannelsSideBar";
import ChatArea from "./components/ChatArea";
import AuthContext, { AuthUser } from "./contexts/AuthContext";
import SocketContext from "./contexts/SocketContext";

function getUserFromStorage(): AuthUser | null {
  const user = localStorage.getItem("channelsUserData");
  if (user != null) {
    return JSON.parse(user) as AuthUser | null;
  }
  return null;
}

const socket = io("ws://localhost:3000");

function App(): JSX.Element {
  const [user, setUser] = useState<AuthUser | null>(getUserFromStorage);

  useEffect(() => {
    if (user != null) {
      socket.emit("joined", `${user.username} has joined the chat`);
    }

    localStorage.setItem("channelsUserData", JSON.stringify(user));
  }, [user]);

  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <SocketContext.Provider value={socket}>
      <AuthContext.Provider value={providerValue}>
        <Grid h="100vh" templateRows="64px 1fr" templateColumns="1fr">
          <Navbar />
          {/* <ChannelsSideBar /> */}
          <ChatArea />
        </Grid>
      </AuthContext.Provider>
    </SocketContext.Provider>
  );
}

export default App;
