import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MySide | Produtos",
  description: "Produtos",
};

interface ProductsLayoutProps {
  children: React.ReactNode;
}

export default function ProductsLayout({ children }: ProductsLayoutProps) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
