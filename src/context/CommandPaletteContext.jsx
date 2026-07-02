import { createContext, useContext, useState } from "react";

const CommandPaletteContext = createContext();

export function CommandPaletteProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openPalette = () => setOpen(true);

  const closePalette = () => setOpen(false);

  const togglePalette = () => setOpen((prev) => !prev);

  return (
    <CommandPaletteContext.Provider
      value={{
        open,
        openPalette,
        closePalette,
        togglePalette,
      }}
    >
      {children}
    </CommandPaletteContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCommandPalette() {
  return useContext(CommandPaletteContext);
}
