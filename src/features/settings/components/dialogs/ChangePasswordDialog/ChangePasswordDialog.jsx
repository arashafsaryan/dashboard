/* eslint-disable react-hooks/incompatible-library */
import { toast } from "sonner";
import Modal from "../../../../../components/ui/Modal/Modal";
import Input from "../../../../../components/ui/Input/Input";
import Button from "../../../../../components/ui/Button/Button";
import PasswordStrength from "../../../../../components/ui/PasswordStrength/PasswordStrength";
import Field from "../../../../../components/ui/Field/Field";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePasswordSchema } from "../../../validation/changePasswordSchema";

export default function ChangePasswordDialog({ open, onClose }) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: zodResolver(changePasswordSchema),

    mode: "onChange",

    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  const password = watch("newPassword");

  const handleClose = () => {
    reset();
    onClose();
  };

  const onSubmit = async (data) => {
    console.log(data);
    toast.success("Password updated successfully.");
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title="Change Password"
      footer={
        <>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>

          <Button
            type="submit"
            form="change-password-form"
            disabled={!isValid || isSubmitting}
          >
            Save
          </Button>
        </>
      }
    >
      <form id="change-password-form" onSubmit={handleSubmit(onSubmit)}>
        <Field
          label="Current Password"
          required
          error={errors.currentPassword?.message}
        >
          <Input
            type="password"
            disabled={isSubmitting}
            {...register("currentPassword")}
          />
        </Field>
        <Field
          label="New Password"
          required
          error={errors.newPassword?.message}
        >
          <Input
            type="password"
            disabled={isSubmitting}
            {...register("newPassword")}
          />
        </Field>
        <PasswordStrength password={password} />
        <Field
          label="Confirm Password"
          required
          error={errors.confirmPassword?.message}
        >
          <Input
            type="password"
            disabled={isSubmitting}
            {...register("confirmPassword")}
          />
        </Field>
      </form>
    </Modal>
  );
}
