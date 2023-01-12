import React from "react";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ChatMessageProps {
  
}

export default function ChatMessage({}): JSX.Element {
  return (
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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat officia
        asperiores expedita. Nam mollitia nobis, perferendis officiis
        temporibus, quod delectus ex ea dolorem reprehenderit corporis?
        Asperiores voluptates alias culpa hic.
      </Text>
    </Box>
  );
}
