import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;
  line-height: 1.6;

  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 24px;
  margin-bottom: 12px;
`;

export const List = styled.ul`
  margin-bottom: 16px;
  padding-left: 20px;
`;

export const ListItem = styled.li`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`;
