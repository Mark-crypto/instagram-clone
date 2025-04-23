import { useState, useEffect } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

const Chat = ({ socket, name, roomId }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: roomId,
        author: name,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      setMessageList((prev) => [...prev, messageData]);
      setCurrentMessage("");
    }
  };
  useEffect(() => {
    const receiveMessage = (data) => {
      setMessageList((prev) => [...prev, data]);
    };

    socket.on("receive_message", receiveMessage);

    return () => {
      socket.off("receive_message", receiveMessage);
    };
  }, [socket]);
  return (
    <>
      <div className="chat-window">
        <div className="chat-header">
          <p>Live Chat</p>
        </div>
        <div className="chat-body">
          <ScrollToBottom className="message-container">
            {messageList.map((content) => {
              return (
                <div
                  className="message"
                  id={name === content.author ? "you" : "other"}
                >
                  <div>
                    <div className="message-content">
                      <p>{content.message}</p>
                    </div>
                    <div className="message-meta">
                      <p id="time">{content.time}</p>
                      <p id="author">{content.author}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </ScrollToBottom>
        </div>
        <div className="chat-footer">
          <input
            type="text"
            placeholder="Hey..."
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>&#9658;</button>
        </div>
      </div>
    </>
  );
};
export default Chat;
