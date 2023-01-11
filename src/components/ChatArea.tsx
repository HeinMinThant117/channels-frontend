import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Flex, GridItem, Textarea } from "@chakra-ui/react";
import ChatMessage from "./ChatMessage";
import UserJoinedMessage from "./UserJoinedMessage";
import SocketContext from "../contexts/SocketContext";

export default function ChatArea(): JSX.Element {
  const socket = useContext(SocketContext);
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket?.on("joined", (arg) => {
      setMessages([...messages, arg]);
    });

    socket?.on("logout", (arg) => {
      setMessages([...messages, arg]);
    });

    return () => {
      socket?.off("joined");
    };
  }, [socket, messages]);

  return (
    <GridItem>
      <Flex direction="column" justifyContent="space-between" h="100%" mx={4}>
        <Box>
          {/* <ChatMessage /> */}
          {messages.map((message) => (
            <UserJoinedMessage message={message} />
          ))}
        </Box>
        <Flex direction="column" h="140px">
          <Textarea resize="none" placeholder="Enter your message....." />
          <Button mt={2} ml="auto">
            Send
          </Button>
        </Flex>
      </Flex>
    </GridItem>
  );
}
