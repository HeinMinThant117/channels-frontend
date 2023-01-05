import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

function App(): JSX.Element {
  return (
    <Grid h="100vh" templateRows="64px 1fr" templateColumns="20% 1fr">
      <GridItem colSpan={3} borderBottom="1px solid #eee">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          h="100%"
          mx="10px"
        >
          <Box />
          <Flex alignItems="center">
            <Image
              src="/tv.png"
              alt="company logo showing a tv"
              boxSize={6}
              mb={1}
              mr={2}
            />
            <Heading size="md">Channels</Heading>
          </Flex>
          <Flex
            alignItems="center"
            border="2px solid #eee"
            borderRadius={5}
            p={2}
            px={4}
            cursor="pointer"
          >
            <Text fontSize="sm" mr={6} fontWeight="semibold">
              Mob Psycho
            </Text>
            <Image
              boxSize={6}
              mb={1}
              borderRadius="2xl"
              src="https://avatars.dicebear.com/api/pixel-art/avdkfjdjdjdjd.svg"
            />
          </Flex>
        </Flex>
      </GridItem>
      <GridItem>Contacts</GridItem>
      <GridItem>Chat Area</GridItem>
    </Grid>
  );
}

export default App;
