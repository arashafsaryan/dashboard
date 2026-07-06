import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from "./Pagination.module.css";

export default function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        <FiChevronLeft />
      </button>
      <span className={styles.info}>
        {page} / {totalPages}
      </span>
      <button
        className={styles.button}
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
      >
        <FiChevronRight />
      </button>
    </div>
  );
}
