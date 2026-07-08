/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const SettingsMobileNavigationContext = createContext();

export function SettingsMobileNavigationProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openNavigation = () => setOpen(true);
  const closeNavigation = () => setOpen(false);

  return (
    <SettingsMobileNavigationContext.Provider
      value={{
        open,
        openNavigation,
        closeNavigation,
      }}
    >
      {children}
    </SettingsMobileNavigationContext.Provider>
  );
}

export function useSettingsMobileNavigation() {
  return useContext(SettingsMobileNavigationContext);
}
