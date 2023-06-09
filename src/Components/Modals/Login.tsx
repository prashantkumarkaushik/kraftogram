import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { SignIn } from "@clerk/clerk-react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../atoms/authModalAtom";

type LoginProps = {};

export const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  return <SignIn />;
  {
    /* <form> */
  }
  {
    /*   <Input */
  }
  {
    /*     required */
  }
  {
    /*     name="email" */
  }
  {
    /*     placeholder="email" */
  }
  {
    /*     type="email" */
  }
  {
    /*     mb={2} */
  }
  {
    /*     // onChange={handleChange} */
  }
  {
    /*     fontSize="10pt" */
  }
  {
    /*     _placeholder={{ color: "gray.500" }} */
  }
  {
    /*     _hover={{ */
  }
  {
    /*       bg: "white", */
  }
  {
    /*       border: "1px solid", */
  }
  {
    /*       borderColor: "blue.500", */
  }
  {
    /*     }} */
  }
  {
    /*     _focus={{ */
  }
  {
    /*       outline: "none", */
  }
  {
    /*       bg: "white", */
  }
  {
    /*       border: "1px solid", */
  }
  {
    /*       borderColor: "blue.500", */
  }
  {
    /*     }} */
  }
  {
    /*     bg="gray.50" */
  }
  {
    /*   /> */
  }
  {
    /**/
  }
  {
    /*   <Input */
  }
  {
    /*     required */
  }
  {
    /*     name="password" */
  }
  {
    /*     placeholder="password" */
  }
  {
    /*     type="password" */
  }
  {
    /*     mb={2} */
  }
  {
    /*     // onChange={handleChange} */
  }
  {
    /*     fontSize="10pt" */
  }
  {
    /*     _placeholder={{ color: "gray.500" }} */
  }
  {
    /*     _hover={{ */
  }
  {
    /*       bg: "white", */
  }
  {
    /*       border: "1px solid", */
  }
  {
    /*       borderColor: "blue.500", */
  }
  {
    /*     }} */
  }
  {
    /*     _focus={{ */
  }
  {
    /*       outline: "none", */
  }
  {
    /*       bg: "white", */
  }
  {
    /*       border: "1px solid", */
  }
  {
    /*       borderColor: "blue.500", */
  }
  {
    /*     }} */
  }
  {
    /*     bg="gray.50" */
  }
  {
    /*   /> */
  }
  {
    /*   <Button */
  }
  {
    /*     // type="submit" */
  }
  {
    /*     background="background" */
  }
  {
    /*     _hover={{ color: "background", background: "gray.200" }} */
  }
  {
    /*     color="gray.200" */
  }
  {
    /*     width="100%" */
  }
  {
    /*     height="36px" */
  }
  {
    /*     mt={2} */
  }
  {
    /*     mb={2} */
  }
  {
    /*     // isLoading={loading} */
  }
  {
    /*   > */
  }
  {
    /*     Log In */
  }
  {
    /*   </Button> */
  }
  {
    /*   <Flex justifyContent="center" mb={2}> */
  }
  {
    /*     <Text fontSize="9pt" mr={1}> */
  }
  {
    /*       Reset Password */
  }
  {
    /*     </Text> */
  }
  {
    /*     <Text */
  }
  {
    /*       fontSize="9pt" */
  }
  {
    /*       color="blue.500" */
  }
  {
    /*       cursor="pointer" */
  }
  {
    /*       onClick={() => */
  }
  {
    /*         setAuthModalState((prev) => ({ */
  }
  {
    /*           ...prev, */
  }
  {
    /*           view: "resetPassword", */
  }
  {
    /*         })) */
  }
  {
    /*       } */
  }
  {
    /*     > */
  }
  {
    /*       Reset */
  }
  {
    /*     </Text> */
  }
  {
    /*   </Flex> */
  }
  {
    /*   <Flex fontSize="9pt" justifyContent="center"> */
  }
  {
    /*     <Text mr={1}>New here?</Text> */
  }
  {
    /*     <Text */
  }
  {
    /*       color="blue.500" */
  }
  {
    /*       fontWeight={700} */
  }
  {
    /*       cursor="pointer" */
  }
  {
    /*       onClick={() => */
  }
  {
    /*         setAuthModalState((prev) => ({ */
  }
  {
    /*           ...prev, */
  }
  {
    /*           view: "signup", */
  }
  {
    /*         })) */
  }
  {
    /*       } */
  }
  {
    /*     > */
  }
  {
    /*       SIGN UP */
  }
  {
    /*     </Text> */
  }
  {
    /*   </Flex> */
  }
  {
    /* </form> */
  }
};
