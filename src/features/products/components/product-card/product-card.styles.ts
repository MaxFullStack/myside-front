import styled from 'styled-components';
import Image from 'next/image';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
  width: 100%;
  max-width: 350px;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 150px;
  object-fit: contain;
  padding: 16px;
`;

export const CardContent = styled.div`
  padding: 12px;
  text-align: left;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 6px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 0.85rem;
  color: #777;
  line-height: 1.2;
  margin-bottom: 10px;
  max-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
`;

export const CardFooter = styled.div`
  padding: 16px;
  background-color: #f9f9f9;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
`;

export const DetailsButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 8px 12px;
  font-size: 0.9rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4040;
  }
`;
