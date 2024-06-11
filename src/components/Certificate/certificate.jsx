import React from "react";
import MainHeader from "../Header/header";
import MainFooter from "../Footer/footer";
import styled from "styled-components";

const PageContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    margin-top: 100px;
  }
`;

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
    <PageContainer>
      <MainHeader />

      <Content>
        <H1>
          Company <br /> <Span>Certifications</Span>
        </H1>
      </Content>

      <MainFooter />
    </PageContainer>
  );
};

export default Certificates;
