import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import CommandPalette from "../ui/CommandPalette/CommandPalette";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(() => {
    const saved = localStorage.getItem("sidebar-collapsed");
    return saved ? JSON.parse(saved) : false;
  });
  useEffect(() => {
    localStorage.setItem("sidebar-collapsed", JSON.stringify(collapsed));
  }, [collapsed]);
  return (
    <div className={styles.layout}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className={styles.mainContent}>
        <Header />
        <main
          style={{
            flex: 1,
            padding: "24px",
            background: "var(--bg)",
          }}
        >
          {children}
        </main>
      </div>
        <CommandPalette />
    </div>
  );
}
