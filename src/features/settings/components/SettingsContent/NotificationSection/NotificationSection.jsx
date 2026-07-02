import SettingsCard from "../../../../../components/ui/SettingsCard/SettingsCard";
import SettingRow from "../../../../../components/ui/SettingRow/SettingRow";
import Switch from "../../../../../components/ui/Switch/Switch";

import { useSettings } from "../../../context/SettingsContext";

export default function NotificationSection() {
  const { settings, updateField } = useSettings();

  const notifications = settings.notifications;

  return (
    <SettingsCard
      title="Notifications"
      description="Manage how you receive updates and alerts."
    >
      <SettingRow
        title="Email Notifications"
        description="Receive important updates by email."
      >
        <Switch
          checked={notifications.email}
          onChange={(checked) => updateField("notifications", "email", checked)}
        />
      </SettingRow>

      <SettingRow
        title="Push Notifications"
        description="Receive push notifications on supported devices."
      >
        <Switch
          checked={notifications.push}
          onChange={(checked) => updateField("notifications", "push", checked)}
        />
      </SettingRow>

      <SettingRow
        title="Desktop Notifications"
        description="Show notifications while you're using the app."
      >
        <Switch
          checked={notifications.desktop}
          onChange={(checked) =>
            updateField("notifications", "desktop", checked)
          }
        />
      </SettingRow>

      <SettingRow
        title="Marketing Emails"
        description="Receive product news and feature announcements."
      >
        <Switch
          checked={notifications.marketing}
          onChange={(checked) =>
            updateField("notifications", "marketing", checked)
          }
        />
      </SettingRow>

      <SettingRow
        title="Security Alerts"
        description="Always notify me about important security events."
      >
        <Switch
          checked={notifications.securityAlerts}
          onChange={(checked) =>
            updateField("notifications", "securityAlerts", checked)
          }
        />
      </SettingRow>
    </SettingsCard>
  );
}
