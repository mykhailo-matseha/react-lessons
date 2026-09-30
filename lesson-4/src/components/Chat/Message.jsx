import { Heart, HeartCrack } from "lucide-react";
import styles from "./Chat.module.scss";
function Message({ msg, addLike, addDislike }) {
  return (
    <div className={styles.Message}>
      <div className={styles.Message__Body}>{msg.text}</div>
      <div className={styles.Message__Actions}>
        <button
          onClick={() => addLike(msg.id)}
          className={styles.Message__Action}
        >
          <Heart color="#FFF" />
          {msg.likes}
        </button>
        <button
          onClick={() => addDislike(msg.id)}
          className={styles.Message__Action}
        >
          <HeartCrack color="#FFF" />

          {msg.dislikes}
        </button>
      </div>
    </div>
  );
}

export default Message;
