import { useState } from 'react';
import { IProduct } from '../types/product';

export const useProductFilter = (products: IProduct[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = products ? Array.from(new Set(products.map((product) => product.category))) : [];

  const filteredProducts = products?.filter((product: IProduct) => {
    const matchesSearchTerm = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearchTerm && matchesCategory;
  });

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    categories,
    filteredProducts,
  };
};
