import api from "@/lib/api";
import { IProduct } from "../types/product";

export const fetchAllProducts = async (): Promise<IProduct[]> => {
  const response = await api.get<IProduct[]>("/products");
  return response.data;
};

export const fetchProductById = async (id: string): Promise<IProduct> => {
  const response = await api.get<IProduct>(`/products/${id}`);
  return response.data;
};
