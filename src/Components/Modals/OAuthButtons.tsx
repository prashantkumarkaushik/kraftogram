import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";

export const OAuthButtons: React.FC = () => {
  return (
    <Flex flexDirection="column" mb={4}>
      <Button
        background="background"
        color="gray.200"
        width="full"
        _hover={{ color: "background", background: "gray.200" }}
        mb={2}
        // isLoading={loading}
      >
        <Image src="./google_logo.png" alt="google logo" height="20px" mr={4} />
        Continue with Google
      </Button>
      {/* <Button variant="oauth">Some other Provider</Button> */}
      {/* {error && <Text>{error.message}</Text>} */}
    </Flex>
  );
};
