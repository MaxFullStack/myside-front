import { useRouter, useParams } from 'next/navigation';
import { useFetchProductById } from '@/features/products/hooks/use-fetch-product-by-id';

import { Message, BackButton, Container } from './product-details.styles';
import ProductCardDetails from '../../components/product-card-details';

const ProductDetails = () => {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  const { data: product, isLoading, error } = useFetchProductById(String(id));

  if (isLoading) return <Message>Carregando...</Message>;

  if (error || !product) return <Message>Erro ao carregar o produto.</Message>;

  return (
    <Container>
      <BackButton onClick={() => router.push('/produtos')}>Voltar</BackButton>
      <ProductCardDetails product={product} />
    </Container>
  );
};

export default ProductDetails;
