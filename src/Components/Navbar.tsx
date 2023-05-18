import { Button, Flex, Icon, Input, Text } from "@chakra-ui/react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  useClerk,
  UserProfile,
  useUser,
} from "@clerk/clerk-react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { authModalState } from "../atoms/authModalAtom";
import { menuState } from "../atoms/hamburgerAtom";
import AuthModal from "./Modals/AuthModal";

const Navbar = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut } = useClerk();

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

  const navigate = useNavigate();
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
          gap={2}
          justifyContent="space-between"
          mx="auto"
        >
          <Flex align="center">
            {/* <Icon */}
            {/*   as={GiHamburgerMenu} */}
            {/*   color="gray.100" */}
            {/*   fontSize="20pt" */}
            {/*   onClick={() => */}
            {/*     setHamburgerState((prev) => ({ */}
            {/*       ...prev, */}
            {/*       isOpen: !prev.isOpen, */}
            {/*     })) */}
            {/*   } */}
            {/*   cursor="pointer" */}
            {/* /> */}
            <Flex ml={2} onClick={() => navigate("/")} cursor="pointer">
              <Text color="text2" fontSize="18pt" fontWeight={500}>
                Krafto
              </Text>
              <Text fontSize="18pt" color="gray.100" fontWeight={500}>
                Gram
              </Text>
            </Flex>
          </Flex>
          {/* <Flex */}
          {/*   align="center" */}
          {/*   width="43vw" */}
          {/*   display={{ base: "none", md: "flex" }} */}
          {/*   gap={1} */}
          {/* > */}
          {/*   <Input */}
          {/*     variant="filled" */}
          {/*     placeholder="Search Post" */}
          {/*     rounded="md" */}
          {/*     color="gray.200" */}
          {/*   /> */}
          {/*   <Icon */}
          {/*     as={AiOutlineSearch} */}
          {/*     color="gray.200" */}
          {/*     height="24px" */}
          {/*     width="24px" */}
          {/*   /> */}
          {/* </Flex> */}
          <Flex align="center" gap={2} borderRadius="lg">
            <Flex gap={4}>
              <Text
                color="gray.200"
                fontSize="lg"
                cursor="pointer"
                onClick={() => navigate("/")}
              >
                Home
              </Text>
              <Text
                color="gray.200"
                fontSize="lg"
                cursor="pointer"
                onClick={() => navigate("/explore")}
              >
                Explore
              </Text>
              <Text
                color="gray.200"
                fontSize="lg"
                cursor="pointer"
                onClick={() => navigate("/challenges")}
              >
                Challenges
              </Text>
            </Flex>
            <SignedOut>
              <SignInButton mode="modal">
                <Button background="gray.200" className="btn">
                  Join
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              {/* <UserProfile /> */}
              <Button onClick={() => navigate("/user")}>User</Button>
              <Button background="gray.200" onClick={() => signOut()}>
                SignOut
              </Button>
            </SignedIn>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
