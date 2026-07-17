import { Search, X, SlidersHorizontal } from "lucide-react";
import styles from "./TaskSearch.module.css";

export default function TaskSearch({
  searchQuery,
  setSearchQuery,
  filterStatus,
  setFilterStatus,
}) {
  // پاک کردن متن سرچ
  const clearSearch = () => setSearchQuery("");

  return (
    <div className={styles.toolbarWrapper}>
      {/* باکس اصلی جستجو */}
      <div className={styles.searchContainer}>
        <Search size={18} className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search tasks, categories, or tags..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />

        {/* دکمه پاک کردن (فقط وقتی متنی تایپ شده باشد نمایش داده می‌شود) */}
        {searchQuery && (
          <button
            onClick={clearSearch}
            className={styles.clearBtn}
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* فیلترهای سریع (Quick Filters) - کپسولی */}
      <div className={styles.filters}>
        <button className={styles.filterBtn}>
          <SlidersHorizontal size={16} />
          <span>Filters</span>
        </button>
        <div className={styles.divider} />
        {/* دکمه‌های داینامیک */}
        <button
          className={`${styles.chip} ${filterStatus === "all" ? styles.activeChip : ""}`}
          onClick={() => setFilterStatus("all")}
        >
          All
        </button>
        <button
          className={`${styles.chip} ${filterStatus === "in-progress" ? styles.activeChip : ""}`}
          onClick={() => setFilterStatus("in-progress")}
        >
          In Progress
        </button>
        <button
          className={`${styles.chip} ${filterStatus === "completed" ? styles.activeChip : ""}`}
          onClick={() => setFilterStatus("completed")}
        >
          Done
        </button>
      </div>
    </div>
  );
}
