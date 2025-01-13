import { createBrowserRouter } from "react-router";
import Login from "./pages/Login.jsx";
import Feed from "./pages/Feed.jsx";
import Registration from "./pages/Registration.jsx";
import Comments from "./pages/Comments.jsx";
import Profile from "./pages/Profile.jsx";
import Post from "./pages/Post.jsx";

export const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    path: "/feed",
    element: <Feed />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/post",
    element: <Post />,
  },
  {
    path: "/post/comment",
    element: <Comments />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
const App = () => {
  return <div>App</div>;
};

export default App;
