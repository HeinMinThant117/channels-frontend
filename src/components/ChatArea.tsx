import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Flex, GridItem, Textarea } from "@chakra-ui/react";
import UserJoinedMessage from "./UserJoinedMessage";
import SocketContext from "../contexts/SocketContext";
import AuthContext from "../contexts/AuthContext";
import ChatMessage from "./ChatMessage";

export default function ChatArea(): JSX.Element {
  const socket = useContext(SocketContext);
  const userContext = useContext(AuthContext);
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
    socket?.emit("message", {
      user: userContext.user,
      message,
      type: "message",
    });
    setCurrentChatMessage("");
  };

  const renderMessages = (message): JSX.Element => {
    if (message.type === "message") {
      return <ChatMessage />;
    }
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
            disabled={userContext.user === null}
            resize="none"
            placeholder={
              userContext.user === null
                ? "Please login first to send a message..."
                : "Enter your message..."
            }
          />
          <Button
            onClick={() => {
              sendMessage(currentChatMessage);
            }}
            disabled={userContext.user === null}
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
