/* eslint-disable react-hooks/set-state-in-effect */
import { useMemo, useState, useEffect } from "react";
import { FiSearch, FiTrash2, FiDownload, FiX } from "react-icons/fi";
import styles from "./RecentOrders.module.css";
import RecentOrdersSkeleton from "./RecentOrdersSkeleton";
import Card from "../../../../components/ui/Card/Card";
import SectionHeader from "../../../../components/ui/SectionHeader/SectionHeader";
import DataTable from "../../../../components/ui/DataTable";
import Pagination from "../../../../components/ui/DataTable/Pagination";
import { useOrders } from "../../../../hooks/useOrders";
import TableAvatar from "../../../../components/ui/DataTable/TableAvatar";
import StatusBadge from "../../../../components/ui/DataTable/StatusBadge";
import FilterDropdown from "../../../../components/ui/FilterDropdown/FilterDropdown";

export default function RecentOrders() {
  const { data: orders = [], isLoading, error } = useOrders();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedRows, setSelectedRows] = useState([]);

  const pageSize = 5;

  useEffect(() => {
    setPage(1);
  }, [search, status]);

  const filteredOrders = useMemo(() => {
    let result = [...orders];
    if (search.trim()) {
      const value = search.toLowerCase();
      result = result.filter(
        (order) =>
          order.customer.toLowerCase().includes(value) ||
          order.id.toLowerCase().includes(value) ||
          order.status.toLowerCase().includes(value) ||
          order.amount.toLowerCase().includes(value) ||
          order.date.toLowerCase().includes(value),
      );
    }
    if (status !== "All") {
      result = result.filter((order) => order.status === status);
    }
    return result;
  }, [orders, search, status]);

  const sortedOrders = useMemo(() => {
    if (!sortBy) return filteredOrders;
    return [...filteredOrders].sort((a, b) => {
      let valueA = a[sortBy];
      let valueB = b[sortBy];

      if (sortBy === "amount") {
        valueA = Number(valueA.replace(/[^0-9.-]+/g, ""));
        valueB = Number(valueB.replace(/[^0-9.-]+/g, ""));
      } else {
        valueA = valueA.toString().toLowerCase();
        valueB = valueB.toString().toLowerCase();
      }

      if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
      if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredOrders, sortBy, sortOrder]);

  const totalPages = Math.max(1, Math.ceil(sortedOrders.length / pageSize));

  const paginatedOrders = useMemo(() => {
    const start = (page - 1) * pageSize;
    return sortedOrders.slice(start, start + pageSize);
  }, [sortedOrders, page]);

  const toggleRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const toggleAll = () => {
    if (selectedRows.length === paginatedOrders.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(paginatedOrders.map((item) => item.id));
    }
  };

  const clearSelection = () => setSelectedRows([]);

  const handleSort = (key) => {
    if (sortBy === key) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  const columns = [
    {
      key: "id",
      title: "Order ID",
      render: (row) => <span className={styles.orderId}>{row.id}</span>,
    },
    {
      key: "customer",
      title: "Customer",
      align: "left",
      render: (row) => <TableAvatar name={row.customer} />,
    },
    {
      key: "status",
      title: "Status",
      align: "center",
      render: (row) => <StatusBadge status={row.status} />,
    },
    {
      key: "amount",
      title: "Amount",
      align: "right",
      render: (row) => <span className={styles.amount}>{row.amount}</span>,
    },
    { key: "date", title: "Date", align: "center" },
  ];

  if (isLoading) return <RecentOrdersSkeleton />;
  if (error)
    return <div className={styles.error}>Unable to load recent orders.</div>;

  return (
    <Card>
      <SectionHeader
        title="Recent Orders"
        subtitle="Latest customer transactions"
      />

      {selectedRows.length > 0 && (
        <div className={styles.bulkActions}>
          <span>{selectedRows.length} Selected</span>
          <div className={styles.bulkButtons}>
            <button>
              <FiDownload /> Export
            </button>
            <button>
              <FiTrash2 /> Delete
            </button>
            <button onClick={clearSelection}>
              <FiX /> Clear
            </button>
          </div>
        </div>
      )}

      <div className={styles.toolbar}>
        <div className={styles.searchBox}>
          <FiSearch className={styles.icon} />
          <input
            placeholder="Search orders..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <FilterDropdown
          value={status}
          onChange={setStatus}
          options={["All", "Completed", "Pending", "Failed"]}
        />
      </div>

      <DataTable
        columns={columns}
        data={paginatedOrders}
        selectable
        selectedRows={selectedRows}
        onToggleRow={toggleRow}
        onToggleAll={toggleAll}
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSort={handleSort}
      />

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </Card>
  );
}
