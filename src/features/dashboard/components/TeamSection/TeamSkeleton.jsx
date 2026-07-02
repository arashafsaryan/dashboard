import Card from "../../../../components/ui/Card/Card";
import SectionHeader from "../../../../components/ui/SectionHeader/SectionHeader";
import Skeleton from "../../../../components/ui/Skeleton/Skeleton";

import styles from "./TeamSection.module.css";

export default function TeamSkeleton() {
  return (
    <Card>
      {" "}
      <SectionHeader
        title="Team Performance"
        subtitle="Loading team members..."
      />
      <div className={styles.list}>
        {[...Array(4)].map((_, index) => (
          <div key={index} className={styles.member}>
            <div className={styles.top}>
              <div className={styles.info}>
                <Skeleton width="36px" height="36px" />
                <div>
                  <Skeleton width="90px" height="14px" />
                  <div style={{ height: "6px" }} />
                  <Skeleton width="70px" height="12px" />
                </div>
              </div>

              <Skeleton width="40px" height="18px" />
            </div>
            <Skeleton width="100%" height="8px" />
          </div>
        ))}
      </div>
    </Card>
  );
}
