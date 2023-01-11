import {
  Avatar,
  Box,
  Button,
  Flex,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import SocketContext from "../contexts/SocketContext";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

export default function Navbar(): JSX.Element {
  const { user, setUser } = useContext(AuthContext);
  const socket = useContext(SocketContext);

  const handleLogout = (): void => {
    setUser(null);
    if (user != null) {
      socket?.emit("logout", `${user?.username} has loggedo out`);
    }
  };

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
          <Stack direction="row" alignItems="center">
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
                src={`https://avatars.dicebear.com/api/pixel-art/${user.username}.svg`}
              />
            </Flex>
            <Button onClick={handleLogout}>Logout</Button>
          </Stack>
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
