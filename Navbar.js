// src/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo to="/">MyApp</Logo>
      <Hamburger onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/services">Services</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

// Styled components
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background: #333;
  color: white;
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: white;
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  span {
    height: 2px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 600px;
  overflow: hidden;

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
  }
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  padding: 10px;

  &:hover {
    color: #ddd;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;
