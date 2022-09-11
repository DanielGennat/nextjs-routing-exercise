import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import styled from 'styled-components';
import NavLink from './NavLink';

export default function Header() {

  const router = useRouter();
  const path = router.pathname;

  return (
    <AppHeader>
      <Nav>
      <Link href="/">
        <NavLink active={path === "/"}>Home</NavLink>
      </Link>
      <Link href="/product">
        <NavLink active={path === "/product"}>Product</NavLink>
      </Link>
      <Link href="/team">
        <NavLink active={path === "/team"}>Team</NavLink>
      </Link>
      <Link href="/account">
        <NavLink active={path === "/account"}>Account</NavLink>
      </Link>
      </Nav>
    </AppHeader>
  );
}

const AppHeader = styled.header`
  background: DarkSlateGray;
  padding: 1.5rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
