import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/globals.css";
import "@fontsource/inter";
import { BrowserRouter } from "react-router-dom";
import { SidebarProvider } from "./context/SidebarContext";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { CommandPaletteProvider } from "./context/CommandPaletteContext.jsx";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 10,
      gcTime: 1000 * 60 * 10,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 1,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SidebarProvider>
          <ThemeProvider>
            <CommandPaletteProvider>
            <App />
            </CommandPaletteProvider>
          </ThemeProvider>
        </SidebarProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
