import React, { useRef, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
} from "@chakra-ui/react";

const DrawerDemo = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={() => setIsOpen(true)}>
        Open
      </Button>
      <Drawer
        isFullHeight={ false }
        isOpen={isOpen}
        placement="left"
        size="xs"
        onClose={() => setIsOpen(false)}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          {/* <DrawerFooter> */}
          {/*   <Button variant='outline' mr={3} onClick={onClose}> */}
          {/*     Cancel */}
          {/*   </Button> */}
          {/*   <Button colorScheme='blue'>Save</Button> */}
          {/* </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerDemo;
