/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from "react";
import { defaultSettings } from "../data/defaultSettings";
import { Toaster } from "sonner";

const SettingsContext = createContext(null);

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(defaultSettings);

  const [dirtySections, setDirtySections] = useState({});

  const updateField = (section, field, value) => {
    setSettings((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));

    setDirtySections((prev) => ({
      ...prev,
      [section]: Date.now(),
    }));
  };

  const resetDirty = () => {
    setDirtySections({});
  };

  <Toaster richColors position="bottom-right" closeButton />;
  const isDirty = Object.keys(dirtySections).length > 0;

  const value = useMemo(
    () => ({
      settings,
      updateField,
      dirtySections,
      isDirty,
      resetDirty,
    }),
    [settings, dirtySections, isDirty],
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error("useSettings must be used inside SettingsProvider");
  }

  return context;
}
