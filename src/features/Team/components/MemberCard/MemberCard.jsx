import Card from "../../../../components/ui/Card/Card";
import DropdownMenu from "../../../../components/ui/DropdownMenu/DropdownMenu";
import { Eye, Pencil, Trash2, Mail } from "lucide-react";
import styles from "./MemberCard.module.css";

export default function MemberCard({
  avatar,
  name,
  email,
  role,
  status = "Offline",
}) {
  const statusClass = status.toLowerCase();

  return (
    <Card className={styles.card}>
      {/* یک هاله نوری در پس‌زمینه بالای کارد برای حس مدرن بودن */}
      <div className={styles.glowBackground}></div>

      <div className={styles.dropdownWrapper}>
        <DropdownMenu
          items={[
            {
              label: "View Profile",
              icon: <Eye size={16} />,
              onClick: () => {},
            },
            {
              label: "Edit",
              icon: <Pencil size={16} />,
              onClick: () => {},
            },
            {
              label: "Delete",
              icon: <Trash2 size={16} />,
              danger: true,
              onClick: () => {},
            },
          ]}
        />
      </div>

      <div className={styles.avatarContainer}>
        <div className={styles.avatarWrapper}>
          <img src={avatar} alt={name} className={styles.avatar} />
          {/* انتقال نقطه وضعیت به گوشه آواتار */}
          <span
            className={`${styles.statusDotWrapper} ${styles[statusClass]}`}
            title={status}
          >
            <span className={styles.statusDot}></span>
            <span className={styles.statusPing}></span>
          </span>
        </div>
      </div>

      <div className={styles.userInfo}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.email}>
          <Mail size={14} />
          <span>{email}</span>
        </div>
      </div>

      <div className={styles.footer}>
        <span className={styles.roleBadge}>{role}</span>
        <span className={`${styles.statusLabel} ${styles[statusClass]}`}>
          {status}
        </span>
      </div>
    </Card>
  );
}
