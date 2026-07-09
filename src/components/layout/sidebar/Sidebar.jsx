import {
  FiHome,
  FiBarChart2,
  FiUsers,
  FiSettings,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";
import { IoChatboxOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { useSidebar } from "../../../context/SidebarContext";
import logo from "../../../assets/logo.png";

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
    label: "Chat",
    icon: <IoChatboxOutline />,
    path: "/Chat",
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
          <div className={styles.brand}>
            <div className={styles.logoWrapper}>
              <img src={logo} alt="ARASH" className={styles.logoImage} />
            </div>

            {!collapsed && (
              <div className={styles.brandInfo}>
                <h2>ARASH</h2>
                <span>Admin Dashboard</span>
              </div>
            )}
          </div>

          <button className={styles.toggle} onClick={toggleSidebar}>
            {collapsed ? <FiChevronsRight /> : <FiChevronsLeft />}
          </button>
        </div>

        <nav className={styles.menu}>
          {menu.map((item, index) => (
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
              <span className={styles.activeBar}></span>
              <span className={styles.icon}>{item.icon}</span>
              {!collapsed && <span className={styles.label}>{item.label}</span>}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
