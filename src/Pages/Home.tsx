import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { menuState } from "../atoms/hamburgerAtom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar";

const Home = () => {
  const { isOpen } = useRecoilValue(menuState);

  return (
    <>
      <Navbar />
      {/* <Flex> */}
      {/*   <Flex>{isOpen ? <Sidebar /> : <SidebarSm />}</Flex> */}
      {/* </Flex> */}
      <main>
        <Outlet />
      </main>
    <Footer />
    </>
  );
};

export default Home;
