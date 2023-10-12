import { useEffect, useState } from "react";

type DebounceObj = {
  debouncedValue: string;
};

export default function useDebounce(value: string, delay: number): DebounceObj {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return { debouncedValue };
}
