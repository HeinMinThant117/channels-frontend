import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

function App(): JSX.Element {
  return (
    <Grid h="100vh" templateRows="60px 1fr" templateColumns="20% 1fr">
      <GridItem colSpan={3}>Nav Bar</GridItem>
      <GridItem>Contacts</GridItem>
      <GridItem>Chat Area</GridItem>
    </Grid>
  );
}

export default App;
