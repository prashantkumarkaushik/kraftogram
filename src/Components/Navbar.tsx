import { Flex, Icon, Input, Text } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from 'react-icons/cg'
import { useRecoilState } from "recoil";
import { menuState } from "../atoms/hamburgerAtom";

const Navbar = () => {
  const [hamburgerStateValue, setHamburgerState] = useRecoilState(menuState)
  return (
    <>
      <Flex background='background' position='fixed' width='100%' zIndex='10'>
        <Flex width='98%' py={3} align='center' justifyContent='space-between' mx='auto'>
          <Flex align='center'>
            <Icon
              as={GiHamburgerMenu}
              color="gray.100"
              fontSize="20pt"
              onClick={() => setHamburgerState((prev) => ({
                ...prev,
                isOpen: !prev.isOpen
              }))}
              cursor="pointer"
            />
            <Flex ml={2}>
              <Text color='text2' fontSize='18pt' fontWeight={500}>Krafto</Text>
              <Text fontSize='18pt' color='gray.100' fontWeight={500}>Gram</Text>
            </Flex>
          </Flex>
          <Flex align='center' width='43vw' display={{ base: 'none', md: 'flex' }} gap={1}>
            <Input variant='filled' placeholder='Search Post' rounded='md' size='sm' />
            <Icon as={AiOutlineSearch} color='gray.200' height='24px' width='24px' />
          </Flex>
          <Flex>
            <Icon fontSize='3xl' as={CgProfile} color='gray.200' />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
