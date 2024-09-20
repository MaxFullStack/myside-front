import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "../services/product-service";
import { IProduct } from "../types/product";

export const useFetchAllProducts = () => {
  return useQuery<IProduct[], Error>({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
  });
};
