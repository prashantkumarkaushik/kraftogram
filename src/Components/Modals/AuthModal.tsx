import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { authModalState } from "../../atoms/authModalAtom";
import { AuthInputs } from "./AuthInputs";
import { OAuthButtons } from "./OAuthButtons";
import ResetPassword from "./ResetPassword";

const AuthModal = () => {
  const [authState, SetAuthState] = useRecoilState(authModalState);
  return (
    <>
      <Modal
        isOpen={authState.open}
        onClose={() =>
          SetAuthState((prev) => ({
            ...prev,
            open: !prev.open,
          }))
        }
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            {authState.view === "login" && "Login"}
            {authState.view === "signup" && "SignUp"}
            {authState.view === "resetPassword" && "Reset Password"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            pb={6}
          >
            <Flex
              direction="column"
              align="center"
              justify="center"
              width="70%"
            >
              {authState.view === "login" || authState.view === "signup" ? (
                <>
                  <OAuthButtons />
                  <Text color="gray.500" fontWeight={700}>
                    OR
                  </Text>
                  <AuthInputs />
                </>
              ) : (
                <ResetPassword />
              )}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
