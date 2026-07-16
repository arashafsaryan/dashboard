import { motion } from "framer-motion";
import TaskCard from "../TaskCard/TaskCard";
import styles from "./KanbanBoard.module.css";

const COLUMNS = [
  { id: "todo", title: "To Do", color: "var(--info)" },
  { id: "in-progress", title: "In Progress", color: "var(--warning)" },
  { id: "completed", title: "Completed", color: "var(--success)" },
];

export default function KanbanBoard({ tasks = [] }) {
  const getTasksByStatus = (statusId) => {
    return tasks.filter((task) => task.status === statusId);
  };

  return (
    <div className={styles.boardContainer}>
      {COLUMNS.map((column, index) => {
        const columnTasks = getTasksByStatus(column.id);
        return (
          <motion.div
            key={column.id}
            className={styles.column}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }} // لود آبشاری ستون‌ها
          >
            <div className={styles.columnHeader}>
              <div className={styles.titleWrapper}>
                <span
                  className={styles.statusIndicator}
                  style={{
                    backgroundColor: column.color,
                    boxShadow: `0 0 10px ${column.color}`,
                  }}
                />
                <h3 className={styles.columnTitle}>{column.title}</h3>
              </div>
              <span className={styles.taskCount}>{columnTasks.length}</span>
            </div>
            <div className={styles.columnBody}>
              {columnTasks.length === 0 ? (
                <div className={styles.emptyColumn}>No tasks here</div>
              ) : (
                columnTasks.map((task) => (
                  <motion.div key={task.id} layout>
                    <TaskCard task={task} />
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
