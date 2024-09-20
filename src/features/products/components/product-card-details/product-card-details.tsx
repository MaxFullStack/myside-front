import {
  ProductContainer,
  StyledImage,
  DetailsContainer,
  Title,
  Price,
  Description,
  Rating,
  AddToCartButton,
  ActionSection,
} from './product-card-details.styles';
import { IProduct } from '../../types/product';

interface IProductCardDetailsProps {
  product: IProduct
}

const ProductCardDetails  = ({ product }: IProductCardDetailsProps) => {
  return (
    <ProductContainer>
     <StyledImage src={product.image} alt={product.title} width={300} height={300} />
      <DetailsContainer>
        <Title>{product.title}</Title>
        <Price>R$ {product.price.toFixed(2)}</Price>
        <Rating>
          Avaliação: {product?.rating?.rate} ({product?.rating?.count} avaliações)
        </Rating>
        <Description>{product.description}</Description>

        <ActionSection>
          <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>
        </ActionSection>
      </DetailsContainer>
    </ProductContainer>
  );
};

export default ProductCardDetails;
