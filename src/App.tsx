import { ClerkProvider } from "@clerk/clerk-react";
import { Fragment } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Challenges from "./Components/Challenges";
import Explore from "./Components/Explore";
import Post from "./Components/Posts/Post";
import PostSection from "./Components/Posts/PostSection";
import User from "./Components/User";
import Home from "./Pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route index element={<PostSection />} />
      <Route path="/:id" element={<Post />} />
      <Route path="/user" element={<User />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/challenges" element={<Challenges />} />
    </Route>
  )
);

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable key");
}

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
function App() {
  return (
    <Fragment>
      {/* <div>Hello world</div> */}
      <ClerkProvider publishableKey={clerkPubKey}>
        <RouterProvider router={router} />
      </ClerkProvider>
    </Fragment>
  );
}

export default App;
