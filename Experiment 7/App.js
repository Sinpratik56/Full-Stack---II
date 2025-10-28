import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

function App() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });
    return () => socket.off("receive_message");
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (username && message) {
      const now = new Date();
      const time = now.toLocaleTimeString();
      const newMessage = { username, message, time };
      socket.emit("send_message", newMessage);
      setMessage("");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginTop: "40px" }}>
      <div style={{ border: "1px solid #ccc", padding: "20px", width: "350px" }}>
        <h2 style={{ textAlign: "center" }}>Real-Time Chat</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <div
          style={{
            border: "1px solid #ddd",
            height: "250px",
            overflowY: "auto",
            padding: "10px",
            marginBottom: "10px",
            backgroundColor: "#fafafa"
          }}
        >
          {chat.map((msg, index) => (
            <p key={index}>
              <strong>{msg.username}</strong> [{msg.time}]: {msg.message}
            </p>
          ))}
        </div>
        <form onSubmit={sendMessage} style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ flex: 1 }}
          />
          <button type="submit" style={{ backgroundColor: "blue", color: "white" }}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
