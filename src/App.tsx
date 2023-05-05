import { Fragment } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Post from "./Components/Posts/Post";
import PostSection from "./Components/Posts/PostSection";
import Home from "./Pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route index element={<PostSection />} />
      <Route path="/:id" element={<Post />} />
    </Route>
  )
);

function App() {
  return (
    <Fragment>
      <div>Hello world</div>
      {/* <RouterProvider router={router} /> */}
    </Fragment>
  );
}

export default App;
