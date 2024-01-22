"use client";
import Link from "next/link";
import { Nav, Navbar } from "reactstrap";

const Header = () => {
  return (
    <Navbar container="md" color="dark" dark>
      <Link href="/" passHref legacyBehavior>
        <a className="navbar-brand">Início</a>
      </Link>
      <Nav className="flex-row" navbar>
        <Link href="/Products" legacyBehavior>
          <a className="nav-link me-3">Produtos</a>
        </Link>
        <Link href="/Cart" legacyBehavior>
          <a className="nav-link">Carrinho</a>
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
