import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import axios from "axios";

type Props = {
  url: string;
  data: FormData;
};

export const useFileUpload = () => {
  const mutation = useMutation<void, AxiosError, Props>({
    mutationFn: ({ url, data }) =>
      axios.post(url, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
  });

  return {
    ...mutation,
  };
};
