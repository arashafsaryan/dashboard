import Modal from "../../../../../components/ui/Modal/Modal";
import Button from "../../../../../components/ui/Button/Button";
import SessionCard from "../../../../../components/ui/SessionCard/SessionCard";
import { activeSessions } from "../../../data/activeSessions";
import styles from "./ActiveSessionsDialog.module.css";
import { toast } from "sonner";
import { useState } from "react";
import ConfirmDialog from "../../../../../components/ui/ConfirmDialog/ConfirmDialog";

export default function ActiveSessionsDialog({ open, onClose }) {
  const [confirmOpen, setConfirmOpen] = useState(false);

  const [selectedSession, setSelectedSession] = useState(null);
  const handleTerminate = (id) => {
    console.log(id);
    toast.success("Device signed out successfully.");
  };

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        title="Active Sessions"
        footer={
          <>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
            <Button
              variant="danger"
              onClick={() => toast.success("All sessions signed out.")}
            >
              Sign Out All Others
            </Button>
          </>
        }
      >
        <div className={styles.list}>
          {activeSessions.map((session) => (
            <SessionCard
              key={session.id}
              {...session}
              onTerminate={() => {
                setSelectedSession(session);
                setConfirmOpen(true);
              }}
            />
          ))}
        </div>
      </Modal>
      <ConfirmDialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={() => {
          handleTerminate(selectedSession.id);

          setConfirmOpen(false);
        }}
        title="Sign out this session?"
        description="This device will immediately lose access to your account."
        confirmText="Sign Out"
      />
    </>
  );
}
