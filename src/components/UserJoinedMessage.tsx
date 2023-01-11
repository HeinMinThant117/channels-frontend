import React from "react";
import { Text } from "@chakra-ui/react";

interface UserJoinedMessageProps {
  message: string;
}

export default function UserJoinedMessage({
  message,
}: UserJoinedMessageProps): JSX.Element {
  return (
    <Text mt={2} color="grey" fontSize="sm">
      {message}
    </Text>
  );
}
