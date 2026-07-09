import Card from "../../../../components/ui/Card/Card";
import SectionHeader from "../../../../components/ui/SectionHeader/SectionHeader";
import SalesTooltip from "./SalesTooltip";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { salesByCategory } from "../../data/analyticsData";

import styles from "./SalesByCategory.module.css";

export default function SalesByCategory() {
  return (
    <Card className={styles.card}>
      <SectionHeader
        title="Sales by Category"
        description="Distribution across product categories."
      />

      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height={340}>
          <BarChart
            data={salesByCategory}
            layout="vertical"
            margin={{
              top: 10,
              right: 12,
              left: 12,
              bottom: 0,
            }}
          >
            <XAxis type="number" hide />

            <YAxis
              type="category"
              dataKey="category"
              tickLine={false}
              axisLine={false}
              width={95}
            />

            <Tooltip cursor={false} content={<SalesTooltip />} />

            <Bar dataKey="sales" radius={[8, 8, 8, 8]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
