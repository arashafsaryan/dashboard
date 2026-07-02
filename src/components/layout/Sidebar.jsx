import {
  FiHome,
  FiBarChart2,
  FiFolder,
  FiUsers,
  FiSettings,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";

import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { useSidebar } from "../../context/SidebarContext";

const menu = [
  {
    label: "Dashboard",
    icon: <FiHome />,
    path: "/",
  },
  {
    label: "Analytics",
    icon: <FiBarChart2 />,
    path: "/Analytics",
  },
  {
    label: "Projects",
    icon: <FiFolder />,
    path: "/Projects",
  },
  {
    label: "Team",
    icon: <FiUsers />,
    path: "/Team",
  },
  {
    label: "Settings",
    icon: <FiSettings />,
    path: "/Settings",
  },
];

export default function Sidebar({ collapsed, setCollapsed }) {
  const { mobileOpen, closeMobileSidebar } = useSidebar();

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <>
      {mobileOpen && (
        <div className={styles.backdrop} onClick={closeMobileSidebar} />
      )}

      <aside
        className={`
          ${styles.sidebar}
          ${collapsed ? styles.collapsed : ""}
          ${mobileOpen ? styles.open : ""}
        `}
      >
        <div className={styles.top}>
          <div className={styles.logo}>{collapsed ? "S" : "SaaS Admin"}</div>

          <button className={styles.toggle} onClick={toggleSidebar}>
            {collapsed ? <FiChevronsRight /> : <FiChevronsLeft />}
          </button>
        </div>

        <nav className={styles.menu}>
          {menu.map((item , index) => (
            <NavLink
            key={index}
              to={item.path}
              className={({ isActive }) =>
                `${styles.menuItem} ${isActive ? styles.active : ""}`
              }
              onClick={() => {
                if (window.innerWidth < 1000) {
                  closeMobileSidebar();
                }
              }}
            >
              <span className={styles.icon}>{item.icon}</span>

              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
