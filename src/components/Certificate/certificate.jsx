import React from "react";
import MainHeader from "../Header/header";
import MainFooter from "../Footer/footer";
import styled from "styled-components";

const H1 = styled.h1`
    font-family: Roboto;
    font-size: 64px;
    font-weight: 300;
    text-align: left;
    color: #bdbdbd;
    // margin-bottom: 270px;
    margin-top: 100px;
    margin-left: 100px;

    @media (max-width: 768px) {
      font-size: 32px;
      text-align: left;
      // margin-bottom: 50px;
      margin-top: 50px;
      margin-left: 0;
    }
  `,
  Span = styled.span`
    font-weight: 700;
    color: #333333;

    @media (max-width: 768px) {
      font-size: inherit;
    }
  `;

const Certificates = () => {
  return (
    <>
      <MainHeader />
      
      <H1>
        Company <br /> <Span>Certifications</Span>
      </H1>
      <MainFooter />
    </>
  );
};

export default Certificates;
