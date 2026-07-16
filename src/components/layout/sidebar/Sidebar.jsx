import {
  FiHome,
  FiBarChart2,
  FiUsers,
  FiSettings,
  FiMoreVertical,
} from "react-icons/fi";
import { Command, ChevronLeft, ChevronRight } from "lucide-react";
import { IoChatboxOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { useSidebar } from "../../../context/SidebarContext";

const menu = [
  { label: "Dashboard", icon: <FiHome />, path: "/" },
  { label: "Chat", icon: <IoChatboxOutline />, path: "/Chat", badge: 3 },
  { label: "Team", icon: <FiUsers />, path: "/Team" },
  { label: "tasks", icon: <FiBarChart2 />, path: "/tasks" },
  { label: "Settings", icon: <FiSettings />, path: "/Settings" },
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
        {/* هدر سایدبار */}
        <div className={styles.top}>
          <div className={styles.brand}>
            {/* نشان‌واره برند (Logo Mark) */}
            <div className={styles.logoMark}>
              <Command
                size={18}
                className={styles.logoIcon}
                strokeWidth={2.5}
              />
            </div>

            {/* متن برند */}
            <div className={styles.brandInfo}>
              <h2>ARASH</h2>
              <span className={styles.badge}>Workspace</span>
            </div>
          </div>

          <button
            className={styles.toggle}
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>

        {/* منوی اصلی */}
        <div className={styles.menuSection}>
          <span className={styles.sectionTitle}>Main Menu</span>
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
                <div className={styles.itemContent}>
                  <span className={styles.icon}>{item.icon}</span>
                  <span className={styles.label}>{item.label}</span>
                </div>

                {item.badge && (
                  <span className={styles.badge}>{item.badge}</span>
                )}

                <span className={styles.activeIndicator}></span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* فوتر کاربر */}
        <div className={styles.footer}>
          <div className={styles.userProfile}>
            <img
              src="https://i.pravatar.cc/150?img=56"
              alt="User"
              className={styles.userAvatar}
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>Arash Admin</span>
              <span className={styles.userRole}>Pro Plan</span>
            </div>
            <button className={styles.moreBtn}>
              <FiMoreVertical />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
