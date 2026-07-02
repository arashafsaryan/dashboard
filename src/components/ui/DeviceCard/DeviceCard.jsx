import { Laptop, Smartphone, Monitor } from "lucide-react";
import Badge from "../Badge/Badge";
import Button from "../Button/Button";
import styles from "./DeviceCard.module.css";

const icons = {
  desktop: Monitor,
  laptop: Laptop,
  mobile: Smartphone,
};

export default function DeviceCard({
  type = "desktop",
  device,
  browser,
  location,
  lastSync,
  trusted = true,
  onRemove,
}) {
  const Icon = icons[type] || Monitor;

  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Icon size={22} />
      </div>
      <div className={styles.info}>
        <div className={styles.header}>
          <h4>{device}</h4>
          {trusted && <Badge variant="success">Trusted</Badge>}
        </div>
        <p>{browser}</p>
        <span>{location}</span>
        <small>Last sync: {lastSync}</small>
      </div>
      <Button variant="danger" size="sm" onClick={onRemove}>
        Remove
      </Button>
    </div>
  );
}
