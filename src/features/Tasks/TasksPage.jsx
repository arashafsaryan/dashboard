// مسیر: TasksPage.jsx
import { useEffect } from "react";
import styles from "./TasksPage.module.css";
import { useTasks } from "./hooks/useTasks";
import { Plus, LayoutList, LayoutGrid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FocusCard from "./components/FocusCard/FocusCard";
import TaskSearch from "./components/TaskSearch/TaskSearch";
import TaskList from "./components/TaskList/TaskList";
import KanbanBoard from "./components/KanbanBoard/KanbanBoard";
import AddTaskModal from "./components/AddTaskModal/AddTaskModal";

// انیمیشن‌های صفحه (از قبل داشتیم)
const pageVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 25,
      staggerChildren: 0.12,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export default function TasksPage() {
  const {
    tasks,
    viewMode,
    setViewMode,
    isAddModalOpen,
    setIsAddModalOpen,
    addTask,
    searchQuery,
    setSearchQuery,
    filterStatus,
    setFilterStatus,
  } = useTasks();

  // مانیتور کردن سایز صفحه برای جلوگیری از نمایش حالت بورد در موبایل
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768 && viewMode === "board") {
        setViewMode("list");
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [viewMode, setViewMode]);

  return (
    <motion.main
      className={styles.page}
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 1. Header & Focus Card */}
      <motion.header className={styles.header} variants={sectionVariants}>
        <FocusCard />
      </motion.header>

      {/* 2. Toolbar (Search & View Switcher) */}
      <motion.section className={styles.toolbar} variants={sectionVariants}>
        <TaskSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />
        <div className={styles.viewSwitcher}>
          <button
            className={`${styles.switchBtn} ${viewMode === "list" ? styles.active : ""}`}
            onClick={() => setViewMode("list")}
          >
            <LayoutList size={18} />
            <span>List</span>
          </button>
          <button
            className={`${styles.switchBtn} ${styles.boardBtn} ${viewMode === "board" ? styles.active : ""}`}
            onClick={() => setViewMode("board")}
          >
            <LayoutGrid size={18} />
            <span>Board</span>
          </button>
        </div>
      </motion.section>
      {/* 3. Dynamic Content Area (List OR Kanban) */}
      <motion.section className={styles.contentArea} variants={sectionVariants}>
        <AnimatePresence mode="wait">
          {viewMode === "list" ? (
            <motion.div
              key="list-view"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
            >
              {/* ارسال دیتای تسک‌ها به کامپوننت لیست */}
              <TaskList tasks={tasks} />
            </motion.div>
          ) : (
            <motion.div
              key="board-view"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {/* ارسال دیتای تسک‌ها به کامپوننت بورد */}
              <KanbanBoard tasks={tasks} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      {/* 4. FAB Button (Triggers Add Modal) */}
      <motion.button
        className={styles.fab}
        variants={sectionVariants}
        whileHover={{ scale: 1.08, y: -4 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsAddModalOpen(true)}
      >
        <Plus size={24} strokeWidth={2.5} />
      </motion.button>

      {/* 5. Add Task Modal */}
      {/* در صورتی که true باشد رندر می‌شود */}
      <AnimatePresence>
        {isAddModalOpen && (
          <AddTaskModal
            onClose={() => setIsAddModalOpen(false)}
            onAdd={addTask}
          />
        )}
      </AnimatePresence>
    </motion.main>
  );
}
