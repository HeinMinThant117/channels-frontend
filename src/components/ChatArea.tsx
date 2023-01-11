import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Flex, GridItem, Textarea } from "@chakra-ui/react";
import UserJoinedMessage from "./UserJoinedMessage";
import SocketContext from "../contexts/SocketContext";

export default function ChatArea(): JSX.Element {
  const socket = useContext(SocketContext);
  const [messages, setMessages] = useState<string[]>([]);
  const [currentChatMessage, setCurrentChatMessage] = useState<string>("");

  useEffect(() => {
    socket?.on("joined", (arg) => {
      setMessages([...messages, arg]);
    });

    socket?.on("logout", (arg) => {
      setMessages([...messages, arg]);
    });

    socket?.on("message", (arg) => {
      setMessages([...messages, arg]);
    });

    return () => {
      socket?.off("joined");
      socket?.off("logout");
      socket?.off("message");
    };
  }, [socket, messages]);

  const sendMessage = (message: string): void => {
    socket?.emit("message", message);
    setCurrentChatMessage("");
  };

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
          <Textarea
            value={currentChatMessage}
            onChange={(e) => {
              setCurrentChatMessage(e.target.value);
            }}
            resize="none"
            placeholder="Enter your message....."
          />
          <Button
            onClick={() => {
              sendMessage(currentChatMessage);
            }}
            mt={2}
            ml="auto"
          >
            Send
          </Button>
        </Flex>
      </Flex>
    </GridItem>
  );
}
