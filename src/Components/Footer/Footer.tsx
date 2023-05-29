import {
  Box,
  chakra,
  Container,
  Flex,
  Link,
  Stack,
  Icon,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { BsFillHeartFill } from "react-icons/bs";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Flex align="center">
      <Flex ml={2} onClick={() => navigate("/")} cursor="pointer">
        <Text color="text2" fontSize="18pt" fontWeight={500}>
          Krafto
        </Text>
        <Text fontSize="18pt" color="gray.100" fontWeight={500}>
          Gram
        </Text>
      </Flex>
    </Flex>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  return (
    <Box
      mt={4}
      bg={useColorModeValue("background", "black")}
      color={useColorModeValue("gray.200", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo />
        <Stack direction={"row"} spacing={6}>
          <Link href={'/'}>Home</Link>
          <Link href={"/explore"}>Explore</Link>
          <Link href={"/challenges"}>Challenges</Link>
          {/* <Link href={"#"}>Contact</Link> */}
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Flex justify="center" align="center" gap='2'>
            <Text>Made with </Text>
            <Icon as={BsFillHeartFill} color="red.600" />
          </Flex>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
