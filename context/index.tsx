import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, useMemo, useState } from "react";

import useDebounce from "@/hooks/useDebounce";

type AppContextObj = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  debouncedValue: string;
};

export const AppContext = createContext<AppContextObj>({
  search: "",
  setSearch: () => undefined,
  debouncedValue: "",
});

type Props = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: Props) => {
  const [search, setSearch] = useState("");
  const { debouncedValue } = useDebounce(search, 1000);

  const value = useMemo(
    () => ({
      search,
      setSearch,
      debouncedValue,
    }),
    [search, setSearch, debouncedValue],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
