import Modal from "../../../../components/ui/Modal/Modal";
import Input from "../../../../components/ui/Input/Input";
import Button from "../../../../components/ui/Button/Button";
import FilterDropdown from "../../../../components/ui/FilterDropdown/FilterDropdown";

import styles from "./InviteMemberModal.module.css";
import { useState } from "react";

export default function InviteMemberModal({ open, onClose }) {
  const [selectedRole, setSelectedRole] = useState("admin");
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Invite Member"
      description="Send an invitation to a new team member."
    >
      <div className={styles.form}>
        <Input placeholder="Full name" />

        <Input type="email" placeholder="Email address" />

        <FilterDropdown
          value={selectedRole}
          onChange={setSelectedRole}
          options={["Admin", "Editor", "Viewer"]}
        />

        <div className={styles.actions}>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>

          <Button>Send Invite</Button>
        </div>
      </div>
    </Modal>
  );
}
