import styles from "./Skeleton.module.css";

export default function Skeleton({
  width = "100%",
  height = "20px",
  radius = "12px",
}) {
  return (
    <div
      className={styles.skeleton}
      style={{
        width,
        height,
        borderRadius: radius,
      }}
    />
  );
}