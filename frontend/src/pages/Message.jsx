import { useState } from "react";
import io from "socket.io-client";
import Chat from "./Chat";
import "../App.css";

const socket = io.connect("http://localhost:3001");

const Message = () => {
  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (name !== "" && roomId !== "") {
      socket.emit("join_room", roomId);
      setShowChat(true);
    }
  };
  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join a room</h3>
          <input
            type="text"
            name="name"
            placeholder="Mark...."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="roomId"
            placeholder="Room ID.."
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
          <button type="button" onClick={joinRoom}>
            Join a chat
          </button>
        </div>
      ) : (
        <Chat socket={socket} name={name} roomId={roomId} />
      )}
    </div>
  );
};

export default Message;
