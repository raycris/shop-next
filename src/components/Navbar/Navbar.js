import Link from "next/link";
import React from "react";

import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <div></div>
      <Menu>
        <Link href="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
        <Link href="/about" style={{ textDecoration: "none" }}>
          About
        </Link>
      </Menu>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: beige;
`;

const Menu = styled.menu`
  gap: 6px;
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
