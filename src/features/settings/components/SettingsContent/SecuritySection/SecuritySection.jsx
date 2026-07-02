import SettingsCard from "../../../../../components/ui/SettingsCard/SettingsCard";
import SettingRow from "../../../../../components/ui/SettingRow/SettingRow";
import Switch from "../../../../../components/ui/Switch/Switch";
import Button from "../../../../../components/ui/Button/Button";

import { useSettings } from "../../../context/SettingsContext";

export default function SecuritySection() {
  const { settings, updateField } = useSettings();

  const security = settings.security;

  return (
    <SettingsCard
      title="Security"
      description="Protect your account with advanced security settings."
    >
      <SettingRow
        title="Login Alerts"
        description="Receive an alert whenever a new login is detected."
      >
        <Switch
          checked={security.loginAlerts}
          onChange={(checked) =>
            updateField("security", "loginAlerts", checked)
          }
        />
      </SettingRow>

      <SettingRow
        title="Trusted Devices"
        description="Automatically trust previously verified devices."
      >
        <Switch
          checked={security.trustedDevices}
          onChange={(checked) =>
            updateField("security", "trustedDevices", checked)
          }
        />
      </SettingRow>

      <SettingRow
        title="Biometric Login"
        description="Use Face ID or fingerprint where available."
      >
        <Switch
          checked={security.biometricLogin}
          onChange={(checked) =>
            updateField("security", "biometricLogin", checked)
          }
        />
      </SettingRow>

      <SettingRow
        title="Recovery Codes"
        description="Generate backup recovery codes for your account."
      >
        <Button variant="secondary">
          View Codes
        </Button>
      </SettingRow>
    </SettingsCard>
  );
}