import { useState } from "react";
import MembersGrid from "./components/MemberGrid/MembersGrid";
import TeamHeader from "./components/TeamHeader/TeamHeader";
import TeamToolbar from "./components/TeamToolbar/TeamToolbar";

const Team = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <TeamHeader />
      <TeamToolbar search={search} onSearch={setSearch} />
      <MembersGrid search={search} />
    </div>
  );
};

export default Team;
