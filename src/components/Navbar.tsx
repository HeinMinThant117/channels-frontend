import {
  Avatar,
  Box,
  Flex,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

export default function Navbar(): JSX.Element {
  const { user } = useContext(AuthContext);

  return (
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
        {user != null ? (
          <Flex
            alignItems="center"
            border="2px solid #eee"
            borderRadius={5}
            p={2}
            px={4}
            cursor="pointer"
          >
            <Text fontSize="sm" mr={6} fontWeight="semibold">
              {user.username}
            </Text>
            <Avatar
              boxSize={7}
              mb={1}
              src="https://avatars.dicebear.com/api/pixel-art/avdkfjdjdjdjd.svg"
            />
          </Flex>
        ) : (
          <Stack direction="row">
            <RegisterModal />
            <LoginModal />
          </Stack>
        )}
      </Flex>
    </GridItem>
  );
}
