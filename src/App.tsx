import { useRecoilValue } from "recoil";
import { menuState } from "./atoms/hamburgerAtom";
import DrawerDemo from "./Components/DrawerDemo";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import SidebarSm from "./Components/SidebarSm";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
