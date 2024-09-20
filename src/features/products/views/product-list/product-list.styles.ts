import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
`;

export const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px 0;
  width: 100%;

  & > div {
    flex: 1 1 calc(100% / 3 - 40px);
    min-height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    & > div {
      flex: 1 1 100%;
    }
  }
`;



export const SearchBar = styled.input`
  padding: 10px;
  font-size: 1rem;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Dropdown = styled.select`
  padding: 10px;
  font-size: 1rem;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #333;
  margin-bottom: 8px;
`;

export const PageTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

export const Message = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
  color: ${({ theme }) => theme.colors.secondary};
`;