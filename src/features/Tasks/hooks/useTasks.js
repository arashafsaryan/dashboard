// مسیر: hooks/useTasks.js
import { useState } from "react";

// دیتای تستی اولیه (بعداً می‌توانید این را از API یا services بگیرید)
const initialTasks = [
  {
    id: 1,
    title: "Redesign Team Details Page",
    status: "completed",
    priority: "high",
    progress: 100,
  },
  {
    id: 2,
    title: "Authentication Improvements",
    status: "in-progress",
    priority: "medium",
    progress: 45,
  },
  {
    id: 3,
    title: "Calendar Integration",
    status: "todo",
    priority: "low",
    progress: 18,
  },
];

export function useTasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [viewMode, setViewMode] = useState("list"); // 'list' | 'board'
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");

  // تابع اضافه کردن تسک جدید
  const addTask = (newTask) => {
    const task = {
      ...newTask,
      id: Date.now(), // تولید ID موقت
      progress: 0,
    };
    setTasks((prev) => [task, ...prev]);
    setIsAddModalOpen(false); // بستن مودال بعد از اضافه شدن
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.category?.toLowerCase().includes(searchQuery.toLowerCase());

    // بررسی فیلتر وضعیت (دکمه‌های کپسولی)
    const matchesFilter =
      filterStatus === "all" ? true : task.status === filterStatus;

    return matchesSearch && matchesFilter;
  });

  return {
    tasks: filteredTasks,
    viewMode,
    setViewMode,
    searchQuery,
    setSearchQuery,
    isAddModalOpen,
    setIsAddModalOpen,
    addTask,
    // مقادیر جدید را به بیرون می‌فرستیم
    filterStatus,
    setFilterStatus,
    stats: {
      active: tasks.filter((t) => t.status !== "completed").length,
      completed: tasks.filter((t) => t.status === "completed").length,
    },
  };
}
