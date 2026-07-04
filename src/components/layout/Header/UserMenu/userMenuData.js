import {
  FiUser,
  FiSettings,
  FiMonitor,
  FiCreditCard,
  FiBell,
  FiHelpCircle,
  FiLogOut,
} from "react-icons/fi";

export const userData = {
  name: "Arash Afsaryan",
  role: "Frontend Engineer",
  workspace: "Premium Workspace",
  initials: "AR",
  online: true,
};

export const menuSections = [
  [
    {
      id: "profile",
      label: "My Profile",
      icon: FiUser,
    },
    {
      id: "settings",
      label: "Account Settings",
      icon: FiSettings,
    },
    {
      id: "appearance",
      label: "Appearance",
      icon: FiMonitor,
    },
  ],

  [
    {
      id: "billing",
      label: "Billing",
      icon: FiCreditCard,
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: FiBell,
      badge: 4,
    },
    {
      id: "support",
      label: "Help & Support",
      icon: FiHelpCircle,
    },
  ],

  [
    {
      id: "logout",
      label: "Logout",
      icon: FiLogOut,
      danger: true,
    },
  ],
];
