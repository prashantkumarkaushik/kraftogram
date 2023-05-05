import { Flex, Stack, Icon, background, Box } from "@chakra-ui/react";
import { FaHome, FaFire } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { IoTimerSharp } from "react-icons/io5";

const SidebarSm = () => {
  return (
    <>
      <Flex
        background="background"
        width="75px"
        position="fixed"
        height="95vh"
        top="50px"
        p={1}
      >
        <Stack
          color="gray.100"
          fontSize="3xl"
          align="center"
          width="90%"
          mx="auto"
          mt={4}
        >
          <Flex
            _hover={{ background: "gray.400" }}
            width="100%"
            align="center"
            justify="center"
            p={2}
            cursor="pointer"
          >
            <Icon as={FaHome} />
          </Flex>
          <Flex
            _hover={{ background: "gray.400" }}
            width="100%"
            align="center"
            justify="center"
            p={2}
            cursor="pointer"
          >
            <Icon as={FaFire} />
          </Flex>
          <Flex
            _hover={{ background: "gray.400" }}
            width="100%"
            align="center"
            justify="center"
            p={2}
            cursor="pointer"
          >
            <Icon as={MdVideoLibrary} />
          </Flex>
          <Flex
            _hover={{ background: "gray.400" }}
            width="100%"
            align="center"
            justify="center"
            p={2}
            cursor="pointer"
          >
            <Icon as={IoTimerSharp} />
          </Flex>
        </Stack>
      </Flex>
    </>
  );
};

export default SidebarSm;
