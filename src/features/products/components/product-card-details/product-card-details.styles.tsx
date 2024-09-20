import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  gap: 40px;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledImage = styled(Image)`
  width: 66.6%;
  object-fit: contain;
  border-radius: 8px;
`;

export const DetailsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 10px;
`;

export const Price = styled.p`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

export const Rating = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-top: 8px;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.5;
  margin-top: 10px;
  max-width: 90%;
`;

export const ActionSection = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`;

export const AddToCartButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff4040;
  }
`;

export const BackButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
