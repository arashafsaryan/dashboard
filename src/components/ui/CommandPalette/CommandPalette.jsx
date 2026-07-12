/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useMemo, useState } from "react";
import styles from "./CommandPalette.module.css";
import { useNavigate } from "react-router-dom";
import { useCommandPalette } from "../../../context/CommandPaletteContext";

const commands = [
  {
    id: 1,
    label: "Dashboard",
    path: "/",
  },
  {
    id: 2,
    label: "Analytics",
    path: "/analytics",
  },
  {
    id: 3,
    label: "Chat",
    path: "/Chat",
  },
  {
    id: 4,
    label: "Team",
    path: "/Team",
  },
  {
    id: 5,
    label: "Settings",
    path: "/Settings",
  },
];

export default function CommandPalette() {
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { open, closePalette, togglePalette } = useCommandPalette();
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const filteredCommands = useMemo(
    () =>
      commands.filter((item) =>
        item.label.toLowerCase().includes(search.toLowerCase()),
      ),
    [search],
  );
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        togglePalette();
        return;
      }
      if (!open) return;
      if (e.key === "Escape") {
        closePalette();
        setSearch("");
        setSelectedIndex(0);
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredCommands.length - 1 ? prev + 1 : prev,
        );
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
      }
      if (e.key === "Enter") {
        const selected = filteredCommands[selectedIndex];
        if (selected) {
          navigate(selected.path);
          closePalette();
          setSearch("");
          setSelectedIndex(0);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, selectedIndex, filteredCommands, navigate]);
  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  if (!open) return null;

  return (
    <div
      className={styles.overlay}
      onClick={() => {
        closePalette();
        setSearch("");
        setSelectedIndex(0);
      }}
    >
      <div className={styles.palette} onClick={(e) => e.stopPropagation()}>
        <input
          autoFocus
          type="text"
          placeholder="Type a command..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.input}
        />

        <div className={styles.results}>
          {filteredCommands.map((item, index) => (
            <button
              key={item.id}
              className={`${styles.commandItem} ${
                selectedIndex === index ? styles.active : ""
              }`}
              onClick={() => {
                navigate(item.path);
                closePalette();
                setSearch("");
              }}
            >
              {item.label}
            </button>
          ))}

          {!filteredCommands.length && (
            <div className={styles.empty}>No command found</div>
          )}
        </div>
      </div>
    </div>
  );
}
