import MemberCard from "../MemberCard/MemberCard";
import useDebounce from "../../hooks/useDebounce";
import styles from "./MembersGrid.module.css";
import EmptyMembers from "../EmptyMembers/EmptyMembers";
import MembersSkeleton from "./MembersSkeleton";
import { useEffect, useState } from "react";

const members = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/150?img=11",
    name: "John Carter",
    email: "john@company.com",
    role: "Admin",
    status: "Online",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/150?img=32",
    name: "Emma Watson",
    email: "emma@company.com",
    role: "Editor",
    status: "Away",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/150?img=14",
    name: "Alex Johnson",
    email: "alex@company.com",
    role: "Viewer",
    status: "Offline",
  },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/150?img=20",
    name: "Sophia Brown",
    email: "sophia@company.com",
    role: "Editor",
    status: "Online",
  },
  {
    id: 5,
    avatar: "https://i.pravatar.cc/150?img=45",
    name: "Michael Lee",
    email: "michael@company.com",
    role: "Viewer",
    status: "Away",
  },
  {
    id: 6,
    avatar: "https://i.pravatar.cc/150?img=8",
    name: "Olivia Davis",
    email: "olivia@company.com",
    role: "Admin",
    status: "Online",
  },
  {
    id: 7,
    avatar: "https://i.pravatar.cc/150?img=27",
    name: "Daniel Wilson",
    email: "daniel@company.com",
    role: "Editor",
    status: "Online",
  },
  {
    id: 8,
    avatar: "https://i.pravatar.cc/150?img=52",
    name: "Isabella Moore",
    email: "isabella@company.com",
    role: "Viewer",
    status: "Offline",
  },
];

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
