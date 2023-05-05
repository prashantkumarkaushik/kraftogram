import {
  Button,
  Flex,
  Icon,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRecoilState, useSetRecoilState } from "recoil";
import { authModalState } from "../atoms/authModalAtom";
import { menuState } from "../atoms/hamburgerAtom";
import AuthModal from "./Modals/AuthModal";

const Navbar = () => {
  const [hamburgerStateValue, setHamburgerState] = useRecoilState(menuState);
  const setModalState = useSetRecoilState(authModalState);
  function handleSignIn() {
    setModalState((prev) => ({
      ...prev,
      open: !prev.open,
    }));
  }

  function handleSignUp() {
    setModalState((prev) => ({
      ...prev,
      open: !prev.open,
      view: "signup",
    }));
  }
  return (
    <>
      <AuthModal />
      <Flex
        background="background"
        position="fixed"
        width="100%"
        zIndex="10"
        mb="100px"
      >
        <Flex
          width="98%"
          py={3}
          align="center"
          justifyContent="space-between"
          mx="auto"
        >
          <Flex align="center">
            <Icon
              as={GiHamburgerMenu}
              color="gray.100"
              fontSize="20pt"
              onClick={() =>
                setHamburgerState((prev) => ({
                  ...prev,
                  isOpen: !prev.isOpen,
                }))
              }
              cursor="pointer"
            />
            <Flex ml={2}>
              <Text color="text2" fontSize="18pt" fontWeight={500}>
                Krafto
              </Text>
              <Text fontSize="18pt" color="gray.100" fontWeight={500}>
                Gram
              </Text>
            </Flex>
          </Flex>
          <Flex
            align="center"
            width="43vw"
            display={{ base: "none", md: "flex" }}
            gap={1}
          >
            <Input
              variant="filled"
              placeholder="Search Post"
              rounded="md"
              color="gray.200"
            />
            <Icon
              as={AiOutlineSearch}
              color="gray.200"
              height="24px"
              width="24px"
            />
          </Flex>
          <Flex
            align="center"
            gap={2}
            border="solid"
            borderColor="gray.200"
            // p={1}
            borderRadius="lg"
          >
            <Popover>
              <PopoverTrigger>
                <Button background="background">
                  <Icon fontSize="3xl" as={CgProfile} color="gray.200" />
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>You are not signed in</PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody>
                    <Stack>
                      <Button colorScheme="blue" onClick={handleSignIn}>
                        SignIn
                      </Button>
                      <Button onClick={handleSignUp} colorScheme="blue">
                        SignUp
                      </Button>
                    </Stack>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
