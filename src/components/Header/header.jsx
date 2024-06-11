import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logoimage from "../../assets/Logoimage.png";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 10px;
  background-color: #fff;
  z-index: 1000;
  position: fixed;
  top: 0;
  // margin-left: 75px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  margin-right: 200px;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 50px;
    right: 10px;
    background: black;
    padding: 10px;
    border-radius: 5px;
    display: ${(props) => (props.open ? "flex" : "none")};
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  margin-left: 20px;
  color: #000;
  padding-right: 30px;
  font-family: Roboto;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin: 10px;
    color: #fff;
  }
`;

const UL = styled.ul`
  display: flex;
  margin-right: 125px;
  font-size: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-right: 0;
  }
`;

const LI = styled.li`
  list-style: none;
`;

const Img = styled.img`
  width: 5%;
  margin-left: 100px;

  @media (max-width: 768px) {
    width: 8%;
    margin: 0;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-right: 20px;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Line = styled.div`
  width: 25px;
  height: 3px;
  background: #000;
  margin: 4px 0;
  transition: 0.4s;

  &:nth-child(1) {
    transform: ${(props) =>
      props.open ? "rotate(-45deg) translate(-5px, 6px)" : "rotate(0)"};
  }

  &:nth-child(2) {
    opacity: ${(props) => (props.open ? "0" : "1")};
  }

  &:nth-child(3) {
    transform: ${(props) =>
      props.open ? "rotate(45deg) translate(-5px, -6px)" : "rotate(0)"};
  }

  @media (max-width: 768px) {
    width: 30px;
    height: 4px;
    margin-left: 100px;
  }
`;

const MainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Header>
      <Img src={Logoimage} alt="Company logo" />
      <Hamburger open={menuOpen} onClick={toggleMenu}>
        <Line open={menuOpen} />
        <Line open={menuOpen} />
        <Line open={menuOpen} />
      </Hamburger>
      <Nav open={menuOpen}>
        <UL>
          <LI>
            <NavLink to="/" open={menuOpen}>
              MAIN
            </NavLink>
          </LI>
          <LI>
            <NavLink to="/gallery" open={menuOpen}>
              GALLERY
            </NavLink>
          </LI>
          <LI>
            <NavLink to="" open={menuOpen}>
              PROJECT
            </NavLink>
          </LI>
          <LI>
            <NavLink to="/certificates" open={menuOpen}>
              CERTIFICATES
            </NavLink>
          </LI>
          <LI>
            <NavLink to="" open={menuOpen}>
              CONTACTS
            </NavLink>
          </LI>
        </UL>
      </Nav>
    </Header>
  );
};

export default MainHeader;
