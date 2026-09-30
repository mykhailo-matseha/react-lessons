import { useState } from "react";
import styles from "./Chat.module.scss";
import ChatForm from "./ChatForm";
import Message from "./Message";
import MessageModel from "./MessageModel";

function Chat() {
  const [messages, setMessages] = useState([]);
  const sendMsg = (text) => {
    setMessages((prev) => [
      ...prev,
      new MessageModel({ id: new Date().getTime(), text: text }),
    ]);
  };
  const addLike = (id) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === id ? msg.addLike() : msg)),
    );
  };
  const addDislike = (id) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === id ? msg.addDislike() : msg)),
    );
  };
  return (
    <div className={styles.Chat}>
      <div className={styles.Chat__Body}>
        {messages.map((msg) => (
          <Message
            key={msg.id}
            msg={msg}
            addLike={addLike}
            addDislike={addDislike}
          ></Message>
        ))}
      </div>
      <ChatForm sendMsg={sendMsg} />
    </div>
  );
}

export default Chat;
