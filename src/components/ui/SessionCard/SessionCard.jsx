import { Laptop, Smartphone, Monitor } from "lucide-react";

import Badge from "../Badge/Badge";

import styles from "./SessionCard.module.css";
import Button from "../Button/Button";

const icons = {
  desktop: Monitor,
  laptop: Laptop,
  mobile: Smartphone,
};

export default function SessionCard({
  type = "desktop",
  device,
  browser,
  location,
  lastActive,
  current = false,
  onTerminate,
}) {
  const Icon = icons[type] || Monitor;

  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Icon size={22} />
      </div>

      <div className={styles.info}>
        <div className={styles.top}>
          <h4>{device}</h4>

          {current && <Badge variant="success">Current</Badge>}
        </div>

        <p>{browser}</p>

        <span>{location}</span>
      </div>

      <time className={styles.time}>{lastActive}</time>
      {!current && (
        <Button size="sm" variant="danger" onClick={onTerminate}>
          Sign Out
        </Button>
      )}
    </div>
  );
}
