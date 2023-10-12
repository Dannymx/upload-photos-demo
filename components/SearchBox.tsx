import { type ChangeEvent, useContext } from "react";
import { Input } from "./ui/input";

import { AppContext } from "@/context";

export const SearchBox = () => {
  // Context will help us pass our search value to our gallery query
  const { setSearch } = useContext(AppContext);

  const handleSearch = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;

    setSearch(value);
  };

  return (
    <Input
      className="p-6"
      type="text"
      onChange={(e) => handleSearch(e)}
      placeholder="Search Images..."
    />
  );
};
