import Avatar from "../Avatar/Avatar";
import styles from "./TableAvatar.module.css";

export default function TableAvatar({ name, progress, avatar }) {
  return (
    <div className={styles.wrapper}>
      {/* شرط: اگر عکس بود تگ img، در غیر این صورت کامپوننت Avatar قبلی */}
      {avatar ? (
        <img src={avatar} alt={name} className={styles.image} />
      ) : (
        <Avatar name={name} progress={progress} />
      )}
      <span className={styles.name}>{name}</span>
    </div>
  );
}
