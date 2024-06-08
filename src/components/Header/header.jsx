import react from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logoimage from "../../assets/Logoimage.png";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  // background-color: #333;
  // color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Nav = styled.nav` 
  display: flex;
  flex direction: row;

   @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const NavLink = styled(Link)`
  // color: #fff;
  text-decoration: none;
  margin-left: 20px;
  color: #000;
  padding-right: 30px;
  font-family:Roboto;
  

  &:hover {
    text-decoration: underline;
  }

    @media (max-width: 768px) {
    margin: 10px;
  
  },
`;

const UL = styled.ul`
    display: flex;
    margin-right: 125px;
    font-size: 10px;

    @media (max-width: 768px) {
      margin-right: 0;
    }
  `,
  LI = styled.li`
    list-style: none;
  `,
  Img = styled.img`
    width: 5%;
    height: 5vh;
    margin-left: 100px;

    @media (max-width: 768px) {
      margin: 0;
    }
  `;

const MainHeader = () => {
  return (
    <Header>
      <Img src={Logoimage} alt="Company logo" />
      <Nav>
        <UL>
          <LI>
            <NavLink to="/">MAIN</NavLink>
          </LI>
          <LI>
            <NavLink to="/gallery">GALLERY</NavLink>
          </LI>
          <LI>
            <NavLink to="">PROJECT</NavLink>
          </LI>
          <LI>
            <NavLink to="/certificates">CERTIFICATES</NavLink>
          </LI>
          <LI>
            <NavLink to="">CONTACTS</NavLink>
          </LI>
        </UL>
      </Nav>
    </Header>
  );
};

export default MainHeader;
