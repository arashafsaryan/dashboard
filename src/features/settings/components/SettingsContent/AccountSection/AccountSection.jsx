import { useState } from "react";
import SettingsCard from "../../../../../components/ui/SettingsCard/SettingsCard";
import SettingRow from "../../../../../components/ui/SettingRow/SettingRow";
import Switch from "../../../../../components/ui/Switch/Switch";
import Button from "../../../../../components/ui/Button/Button";
import { useSettings } from "../../../context/SettingsContext";
import ChangePasswordDialog from "../../dialogs/ChangePasswordDialog/ChangePasswordDialog";
import ActiveSessionsDialog from "../../dialogs/ActiveSessionsDialog/ActiveSessionsDialog";

export default function AccountSection() {
  const { settings, updateField } = useSettings();
  const account = settings.account;
  const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
  const [openSessions, setOpenSessions] = useState(false);
  return (
    <>
      <SettingsCard
        title="Account"
        description="Manage your account security and authentication."
      >
        <SettingRow
          title="Email Verification"
          description="Verify your email address to secure your account."
        >
          <Button variant="secondary">
            {account.emailVerified ? "Verified" : "Verify"}
          </Button>
        </SettingRow>

        <SettingRow
          title="Two-factor Authentication"
          description="Add an extra security layer to your account."
        >
          <Switch
            checked={account.twoFactorAuth}
            onChange={(checked) =>
              updateField("account", "twoFactorAuth", checked)
            }
          />
        </SettingRow>
        <SettingRow
          title="Password"
          description="Update your account password."
        >
          <Button
            variant="secondary"
            onClick={() => setOpenPasswordDialog(true)}
          >
            Change Password
          </Button>
        </SettingRow>

        <SettingRow
          title="Active Sessions"
          description="Devices currently signed into your account."
        >
          <Button variant="secondary" onClick={() => setOpenSessions(true)}>
            {account.activeSessions} Sessions
          </Button>{" "}
        </SettingRow>

        <SettingRow
          title="Connected Devices"
          description="Review and manage trusted devices."
        >
          <Button variant="secondary">
            {account.connectedDevices} Devices
          </Button>
        </SettingRow>
      </SettingsCard>
      <ChangePasswordDialog
        open={openPasswordDialog}
        onClose={() => setOpenPasswordDialog(false)}
      />
      <ActiveSessionsDialog
        open={openSessions}
        onClose={() => setOpenSessions(false)}
      />
    </>
  );
}
