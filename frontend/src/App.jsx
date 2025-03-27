import { createBrowserRouter } from "react-router";
import Login from "./pages/Login.jsx";
import Feed from "./pages/Feed.jsx";
import Registration from "./pages/Registration.jsx";
import Comments from "./pages/Comments.jsx";
import Profile from "./pages/Profile.jsx";
import Post from "./pages/Post.jsx";
import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:3001");

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
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const sendMessage = () => {
    socket.emit("message", { message, room });
  };
  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };
  useEffect(() => {
    socket.on("receive_message", (data) => {
      alert(data.message);
    });
  }, [socket]);
  return <div>App</div>;
};

export default App;
