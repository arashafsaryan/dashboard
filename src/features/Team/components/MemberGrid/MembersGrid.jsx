import MemberCard from "../MemberCard/MemberCard";
import useDebounce from "../../hooks/useDebounce";
import styles from "./MembersGrid.module.css";
import EmptyMembers from "../EmptyMembers/EmptyMembers";
import MembersSkeleton from "./MembersSkeleton";
import { useEffect, useState } from "react";
import { members } from "../../data/data";

export default function MembersGrid({ search }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // زمان دلخواه

    return () => clearTimeout(timer);
  }, []);

  const debouncedSearch = useDebounce(search);

  if (isLoading) {
    return <MembersSkeleton />;
  }

  const filteredMembers = members.filter((member) => {
    const query = debouncedSearch.trim().toLowerCase();

    if (!query) return true;

    return (
      member.name.toLowerCase().includes(query) ||
      member.email.toLowerCase().includes(query)
    );
  });

  if (!filteredMembers.length) {
    return <EmptyMembers />;
  }

  return (
    <section className={styles.grid}>
      {filteredMembers.map((member) => (
        <MemberCard key={member.id} {...member} />
      ))}
    </section>
  );
}
