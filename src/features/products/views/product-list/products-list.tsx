
import { capitalizeFirstLetter } from '@/utils/capitalize-first-letter';
import ProductCard from '../../components/product-card/product-card';
import { useFetchAllProducts } from '../../hooks/use-fetch-all-products';
import { useProductFilter } from '../../hooks/use-product-filter';
import { Container, ProductGrid, SearchBar, Dropdown, FilterContainer, PageTitle, Message } from './product-list.styles';

const ProductList = () => {
  const { data: products = [], isLoading, error } = useFetchAllProducts();

  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    categories,
    filteredProducts,
  } = useProductFilter(products);

  if (isLoading) return <Message>Carregando...</Message>;
  if (error) return <Message>Erro ao carregar os produtos: {error.message}</Message>;

  return (
    <Container>
      <PageTitle>Lista de Produtos</PageTitle>
      <FilterContainer>
        <SearchBar 
          type="text" 
          placeholder="Buscar produtos..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        
        <Dropdown value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Todas as categorias</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {capitalizeFirstLetter(category)}
            </option>
          ))}
        </Dropdown>
      </FilterContainer>

      <ProductGrid>
        {filteredProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </Container>
  );
};

export default ProductList;
