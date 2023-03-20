import { Box, Container, Flex } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { menuState } from "../atoms/hamburgerAtom";
import Navbar from "../Components/Navbar";
import PostSection from "../Components/Posts/PostSection";
import Sidebar from "../Components/Sidebar";
import SidebarSm from "../Components/SidebarSm";

const Home = () => {
  const { isOpen } = useRecoilValue(menuState);
  return (
    <div>
      <Navbar />
      <Flex>
        <Flex>{isOpen ? <Sidebar /> : <SidebarSm />}</Flex>
        <PostSection />
      </Flex>
    </div>
  );
};

export default Home;
