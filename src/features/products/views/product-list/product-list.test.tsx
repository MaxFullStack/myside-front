import { render, screen } from "@testing-library/react";
import ProductList from "./products-list";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { IProduct } from "@/features/products/types/product";

const products: IProduct[] = [
  {
    id: 1,
    title: "Product 1",
    price: 19.99,
    description: "Description 1",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/1.jpg",
  },
  {
    id: 2,
    title: "Product 2",
    price: 29.99,
    description: "Description 2",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/2.jpg",
  },
];

jest.mock("@/features/products/hooks/use-fetch-all-products", () => ({
  useFetchAllProducts: () => ({
    data: products,
    isLoading: false,
    error: null,
  }),
}));

describe("ProductList", () => {
  it("renders a list of products", () => {
    render(
      <ThemeProvider theme={theme}>
        <ProductList />
      </ThemeProvider>
    );

    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });
});
