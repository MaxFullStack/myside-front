import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../services/product-service";
import { IProduct } from "../types/product";

export const useFetchProductById = (id: string) => {
  return useQuery<IProduct, Error>({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
  });
};
