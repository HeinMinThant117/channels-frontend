import React from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  List,
  ListItem,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App(): JSX.Element {
  return (
    <Grid h="100vh" templateRows="64px 1fr" templateColumns="20% 1fr">
      <Navbar />
      <GridItem borderRight="1px solid #eee">
        <Flex h="98%" direction="column" justifyContent="space-between">
          <List p={3}>
            <ListItem cursor="pointer">
              <Text fontWeight="bold" fontSize="lg">
                Channel 1
              </Text>
            </ListItem>
          </List>
          <Button colorScheme="purple" mx={2}>
            Add Channel
          </Button>
        </Flex>
      </GridItem>
      <GridItem>
        <Flex direction="column" justifyContent="space-between" h="100%" mx={4}>
          <Box mt={4}>
            <Flex alignItems="center">
              <Avatar
                src="https://avatars.dicebear.com/api/pixel-art/avdkfjdjdjdjd.svg"
                boxSize={10}
              />
              <Box ml={2}>
                <Text fontWeight="semibold" fontSize="sm">
                  Mob Psycho
                </Text>
                <Text color="GrayText" fontSize="xs">
                  10:50 AM
                </Text>
              </Box>
            </Flex>
            <Text mt={2} fontSize="sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
              officia asperiores expedita. Nam mollitia nobis, perferendis
              officiis temporibus, quod delectus ex ea dolorem reprehenderit
              corporis? Asperiores voluptates alias culpa hic.
            </Text>
          </Box>
          <Flex direction="column" h="140px">
            <Textarea resize="none" placeholder="Enter your message....." />
            <Button mt={2} ml="auto">
              Send
            </Button>
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default App;
