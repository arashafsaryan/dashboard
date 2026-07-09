import { Search, Plus } from "lucide-react";
import Input from "../../../../components/ui/Input/Input";
import Button from "../../../../components/ui/Button/Button";

import styles from "./TeamToolbar.module.css";
import { useState } from "react";
import InviteMemberModal from "../InviteMemberModal/InviteMemberModal";

export default function TeamToolbar({ search, onSearch }) {
  const [openInvite, setOpenInvite] = useState(false);
  return (
    <div className={styles.toolbar}>
      <div className={styles.searchWrapper}>
        <Search size={18} className={styles.searchIcon} />
        <Input
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search members..."
          className={styles.searchInput}
        />{" "}
      </div>

      <Button onClick={() => setOpenInvite(true)}>
        <Plus size={16} />
        Invite Member
      </Button>
      <InviteMemberModal
        open={openInvite}
        onClose={() => setOpenInvite(false)}
      />
    </div>
  );
}
