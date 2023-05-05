import { FaHome, FaFire } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { IoTimerSharp } from "react-icons/io5";
import { Flex, Stack, Icon, Text } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <>
      <Flex
        background="background"
        width="12rem"
        position="fixed"
        height="95vh"
        top="50px"
        zIndex="10"
      >
        <Stack
          color="gray.100"
          fontSize="xl"
          width="90%"
          gap={2}
          mx="auto"
          mt={4}
        >
          <Flex
            gap={2}
            align="center"
            p={1}
            _hover={{ background: "gray.400", color: "background" }}
            cursor="pointer"
          >
            <Icon fontSize="2xl" as={FaHome} />
            <Text>Home</Text>
          </Flex>
          <Flex
            align="center"
            gap={2}
            p={1}
            _hover={{ background: "gray.400", color: "background" }}
            cursor="pointer"
          >
            <Icon fontSize="2xl" as={FaFire} />
            <Text>Trending</Text>
          </Flex>
          <Flex
            align="center"
            gap={2}
            p={1}
            _hover={{ background: "gray.400", color: "background" }}
            cursor="pointer"
          >
            <Icon fontSize="2xl" as={MdVideoLibrary} />
            <Text>DIY</Text>
          </Flex>
          <Flex
            align="center"
            gap={2}
            p={1}
            _hover={{ background: "gray.400", color: "background" }}
            cursor="pointer"
          >
            <Icon fontSize="2xl" as={IoTimerSharp} />
            <Text>Challenges</Text>
          </Flex>
        </Stack>
      </Flex>
    </>
  );
};

export default Sidebar;
