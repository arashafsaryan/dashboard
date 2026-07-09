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
  return (
    <Card className={styles.card}>
      <DropdownMenu
        items={[
          {
            label: "View Profile",
            icon: <Eye />,
            onClick: () => {},
          },
          {
            label: "Edit",
            icon: <Pencil />,
            onClick: () => {},
          },
          {
            label: "Delete",
            icon: <Trash2 />,
            danger: true,
            onClick: () => {},
          },
        ]}
      />

      <img src={avatar} alt={name} className={styles.avatar} />

      <h3>{name}</h3>

      <div className={styles.email}>
        <Mail size={14} />
        {email}
      </div>

      <div className={styles.bottom}>
        <span className={styles.role}>{role}</span>

        <span className={`${styles.status} ${styles[status.toLowerCase()]}`}>
          <span className={styles.dot}></span>

          {status}
        </span>
      </div>
    </Card>
  );
}
