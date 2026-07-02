/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

import { defaultSettings } from "../data/defaultSettings";

const SettingsContext = createContext(null);

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(defaultSettings);

  const [isDirty, setIsDirty] = useState(false);

  const updateField = (section, field, value) => {
    setSettings((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));

    setIsDirty(true);
  };

  const resetDirty = () => {
    setIsDirty(false);
  };

  const value = useMemo(
    () => ({
      settings,
      isDirty,
      updateField,
      resetDirty,
    }),
    [settings, isDirty]
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
    throw new Error(
      "useSettings must be used inside SettingsProvider"
    );
  }

  return context;
}