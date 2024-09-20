import Link from 'next/link';
import {
  Card,
  CardContent,
  ProductTitle,
  Price,
  StyledImage,
  Description,
  CardFooter,
  DetailsButton
} from './product-card.styles';
import { IProduct } from '../../types/product';

interface ProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card>
      <StyledImage
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        objectFit="contain"
      />
      <CardContent>
        <ProductTitle>{product.title}</ProductTitle>
        <Price>R$ {product.price.toFixed(2)}</Price>
        <Description>{product.description}</Description>
      </CardContent>
      <CardFooter>
        <Link href={`/produtos/${product.id}`} passHref>
          <DetailsButton as="a">Ver detalhes</DetailsButton>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
