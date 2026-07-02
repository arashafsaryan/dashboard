import Modal from "../Modal/Modal";
import Button from "../Button/Button";

export default function ConfirmDialog({
  open,
  onClose,
  onConfirm,
  title = "Are you sure?",
  description = "",
  confirmText = "Confirm",
  cancelText = "Cancel",
  danger = true,
  loading = false,
}) {
  return (
    <div className={StyleSheet.description}>
      <Modal
        open={open}
        onClose={onClose}
        title={title}
        footer={
          <>
            <Button variant="secondary" onClick={onClose}>
              {cancelText}
            </Button>
            <Button
              variant={danger ? "danger" : "primary"}
              loading={loading}
              onClick={onConfirm}
            >
              {confirmText}
            </Button>
          </>
        }
      >
        <p>{description}</p>
      </Modal>
    </div>
  );
}
