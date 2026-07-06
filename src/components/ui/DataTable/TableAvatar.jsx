import Avatar from "../Avatar/Avatar";
import styles from "./TableAvatar.module.css";

export default function TableAvatar({ name, progress }) {
  return (
    <div className={styles.wrapper}>
      <Avatar name={name} progress={progress} />
      <span className={styles.name}>{name}</span>
    </div>
  );
}
