import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import axios from "axios";

type Props = {
  url: string;
  files: FileList;
};

export const useFileUpload = () => {
  const mutation = useMutation<void, AxiosError, Props>({
    mutationFn: ({ url, files }) =>
      axios.post(url, files).then((res) => res.data),
  });

  return {
    ...mutation,
  };
};
