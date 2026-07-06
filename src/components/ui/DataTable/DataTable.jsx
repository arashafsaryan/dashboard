import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import styles from "./DataTable.module.css";

export default function DataTable({
  columns,
  data,
  selectable = false,
  selectedRows = [],
  onToggleRow,
  onToggleAll,
  sortBy,
  sortOrder,
  onSort,
}) {
  const allSelected =
    data.length > 0 && data.every((item) => selectedRows.includes(item.id));
  const justifyMap = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
  };

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {selectable && (
              <th className={styles.checkboxCell}>
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={onToggleAll}
                />
              </th>
            )}
            {columns.map((column) => {
              const align = column.align || "left";

              return (
                <th key={column.key} style={{ textAlign: align }}>
                  <button
                    className={styles.sortButton}
                    style={{ justifyContent: justifyMap[align] }}
                    onClick={() => onSort?.(column.key)}
                    disabled={!onSort || !column.key}
                  >
                    {column.title}
                    {sortBy === column.key ? (
                      sortOrder === "asc" ? (
                        <FiChevronUp />
                      ) : (
                        <FiChevronDown />
                      )
                    ) : (
                      <span className={styles.sortIconHidden}>
                        <FiChevronUp />
                      </span>
                    )}
                  </button>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            const isSelected = selectedRows.includes(row.id);
            return (
              <tr
                key={row.id}
                className={`${styles.row} ${isSelected ? styles.rowSelected : ""}`}
              >
                {selectable && (
                  <td className={styles.checkboxCell}>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => onToggleRow(row.id)}
                    />
                  </td>
                )}
                {columns.map((column) => (
                  <td
                    key={column.key}
                    style={{ textAlign: column.align || "left" }}
                  >
                    {column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
