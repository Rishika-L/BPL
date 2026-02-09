import React from "react";
import UserFilters from "./UserFilters";

const UserFiltersSection = ({
  activeTab,
  search,
  setSearch,
  gender,
  setGender,
  role,
  setRole,
  status,
  setStatus,
  onCreate,
}) => {
  if (activeTab !== "users") return null;

  return (
    <UserFilters
      search={search}
      setSearch={setSearch}
      gender={gender}
      setGender={setGender}
      role={role}
      setRole={setRole}
      status={status}
      setStatus={setStatus}
      onClear={() => {
        setSearch("");
        setGender("ALL");
        setRole("ALL");
        setStatus("ALL");
      }}
      onCreate={onCreate}
    />
  );
};

export default UserFiltersSection;
