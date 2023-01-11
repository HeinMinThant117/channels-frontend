import React from "react";
import { Grid } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import ChannelsSideBar from "./components/ChannelsSideBar";
import ChatArea from "./components/ChatArea";

function App(): JSX.Element {
  return (
    <Grid h="100vh" templateRows="64px 1fr" templateColumns="20% 1fr">
      <Navbar />
      <ChannelsSideBar />
      <ChatArea />
    </Grid>
  );
}

export default App;
