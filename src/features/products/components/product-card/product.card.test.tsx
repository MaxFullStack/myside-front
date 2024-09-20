import { render, screen } from '@testing-library/react';
import ProductCard from './product-card';
import { ThemeProvider } from 'styled-components';
import { theme } from "@/styles/theme";
import { IProduct } from '@/features/products/types/product';

const product: IProduct = {
  id: 1,
  title: 'Test Product',
  price: 29.99,
  description: 'A test product description',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/test.jpg',
};

describe('ProductCard', () => {
  it('renders the product title, price and description', () => {
    render(
      <ThemeProvider theme={theme}>
        <ProductCard product={product} />
      </ThemeProvider>
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText(/R\$ 29.99/i)).toBeInTheDocument();
    expect(screen.getByText(/A test product description/i)).toBeInTheDocument();
  });
});
