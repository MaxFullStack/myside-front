import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 16px 32px;
  margin-bottom: 32px;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NavTitle = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 32px;
  text-decoration: none;
  cursor: pointer;
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  position: relative;
  display: inline-block;
  padding-bottom: 4px;
  padding-top: 4px;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    left: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
