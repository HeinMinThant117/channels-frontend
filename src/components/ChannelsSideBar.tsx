import React from "react";
import { Button, Flex, GridItem, List, ListItem, Text } from "@chakra-ui/react";

export default function ChannelsSideBar(): JSX.Element {
  return (
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
  );
}
