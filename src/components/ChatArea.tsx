import React from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  GridItem,
  Text,
  Textarea,
} from "@chakra-ui/react";

export default function ChatArea(): JSX.Element {
  return (
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
  );
}
