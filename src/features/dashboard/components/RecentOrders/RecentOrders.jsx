import styles from "./RecentOrders.module.css";

import Card from "../../../../components/ui/Card/Card";
import SectionHeader from "../../../../components/ui/SectionHeader/SectionHeader";

import DataTable, {
  TableAvatar,
  StatusBadge,
  TableActions,
} from "../../../../components/ui/DataTable";

import RecentOrdersSkeleton from "./RecentOrdersSkeleton";
import { useOrders } from "../../../../hooks/useOrders";

export default function RecentOrders() {
  const { data: orders = [], isLoading, error } = useOrders();

  if (isLoading) {
    return <RecentOrdersSkeleton />;
  }

  if (error) {
    return (
      <Card>
        <div className={styles.error}>
          <h3>⚠️ Something went wrong</h3>

          <p>{error}</p>

          <button
            className={styles.retryBtn}
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </Card>
    );
  }

  if (!orders.length) {
    return (
      <Card>
        <div className={styles.empty}>No orders found</div>
      </Card>
    );
  }

  const columns = [
    {
      key: "id",
      title: "Order ID",
      render: (row) => (
        <span
          style={{
            fontWeight: 600,
            color: "var(--primary)",
          }}
        >
          {row.id}
        </span>
      ),
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

      render: (row) => (
        <span
          style={{
            fontWeight: 700,
            color: "#22c55e",
          }}
        >
          {row.amount}
        </span>
      ),
    },
    {
      key: "date",
      title: "Date",
      align: "center",
    },
    {
      key: "actions",
      title: "",
      align: "center",
      render: () => <TableActions />,
    },
  ];

  return (
    <Card>
      <SectionHeader
        title="Recent Orders"
        subtitle="Latest customer transactions"
      />
      <DataTable columns={columns} data={orders} />
    </Card>
  );
}
