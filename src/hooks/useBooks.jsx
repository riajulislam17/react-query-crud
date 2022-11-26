import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosRequester from "../utils/axiosRequest";

export const useGetAllBooks = () => {
  return useQuery(["books"], () =>
    axiosRequester({
      url: "/api/books/",
      method: "get",
    })
  );
};

export const useAddBook = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (data) =>
      await axiosRequester({
        url: `/api/books/`,
        method: "post",
        data,
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(["addBook"]),
    }
  );
};

export const useDeleteBook = (id) => {
  const queryClient = useQueryClient();
  return useMutation(
    async () =>
      await axiosRequester({
        url: `/api/books/${id}`,
        method: "delete",
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(["deleteBook"]),
    }
  );
};

export const useUpdateBook = (id) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (data) =>
      await axiosRequester({
        url: `/api/books/${id}`,
        method: "update",
        data,
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(["updateBook"]),
    }
  );
};

export const useGetBook = (id) => {
  return useQuery(["book"], async () =>
    axiosRequester({
      url: `/api/books/${id}`,
      method: "get",
    })
  );
};
