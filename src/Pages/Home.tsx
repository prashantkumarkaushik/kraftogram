import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { menuState } from "../atoms/hamburgerAtom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import SidebarSm from "../Components/SidebarSm";

const Home = () => {
  const { isOpen } = useRecoilValue(menuState);
  return (
    <>
      <Navbar />
      <Flex>
        <Flex>{isOpen ? <Sidebar /> : <SidebarSm />}</Flex>
      </Flex>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Home;
