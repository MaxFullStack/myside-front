import Link from 'next/link';
import { Nav, NavTitle, NavLink } from './navbar.styles';

const Navbar = () => {
  return (
    <Nav>
      <Link href="/" legacyBehavior passHref>
        <NavTitle>MySide</NavTitle>
      </Link>
      <Link href="/produtos" legacyBehavior passHref>
        <NavLink>Produtos</NavLink>
      </Link>
    </Nav>
  );
};

export default Navbar;
