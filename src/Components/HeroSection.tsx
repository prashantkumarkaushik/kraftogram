import { Box, Image, Text, Flex, Input, Button } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <>
      <Box position="relative">
        <Image pt="65px" src="hero3.jpg" height="88vh" w="100vw" />
        <Box
          position="absolute"
          color="background"
          top="50%"
          pl="20px"
          fontSize="3xl"
          fontWeight="800"
          width="500px"
        >
          {/* <Text fontWeight="600" fontStyle="italic"></Text> */}
          <Text fontWeight="700" fontStyle="italic">
            Inspiring Art and Craft for the Artists and By the Artists
          </Text>
          <Flex gap={2}>
            <Input
              type="text"
              placeholder="Search Post"
              border="2px"
              borderColor="background"
              background="gray.200"
            />
            <Button
              background="background"
              color="gray.200"
              _hover={{ background: "gray.200", color: "background" }}
            >
              Search
            </Button>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
