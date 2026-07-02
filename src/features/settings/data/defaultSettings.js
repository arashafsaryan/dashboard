export const defaultSettings = {
  profile: {
    avatar: null,
    name: "Arash Afsaryan",
    email: "arash@gmail.com",
    username: "arash",
    bio: "",
  },

  preferences: {
    language: "en",
    timezone: "tehran",
    dateFormat: "dd-mm-yyyy",
    weekStart: "monday",
  },

  workspace: {
    landingPage: "dashboard",
    dashboardView: "overview",
  },

  appearance: {
    theme: "dark",
    density: "default",
    sidebarMode: "expanded",
    animations: true,
    reducedMotion: false,
  },
  notifications: {
    email: true,
    push: true,
    desktop: false,
    marketing: false,
    securityAlerts: true,
  },
  account: {
    emailVerified: true,
    twoFactorAuth: false,
    activeSessions: 3,
    connectedDevices: 2,
  },
  security: {
    loginAlerts: true,
    trustedDevices: true,
    biometricLogin: false,
    recoveryCodes: true,
  },
};
