import { Send } from "lucide-react";
import styles from "./Chat.module.scss";
import { useState } from "react";
function ChatForm({ sendMsg }) {
  const [msg, setMsg] = useState("");
  const isInputEmpty = !msg.trim();
  const onClickHandler = () => {
    sendMsg(msg.trim());
    setMsg("");
  };
  return (
    <div className={styles.ChatForm}>
      <input
        type="text"
        className="input"
        value={msg}
        placeholder="Введіть повідомлення"
        onChange={(e) => setMsg(e.target.value)}
      />
      <button
        disabled={isInputEmpty}
        onClick={onClickHandler}
        className={styles.ChatForm__Send}
      >
        <Send color="#FFF" />
      </button>
    </div>
  );
}

export default ChatForm;
