import React from "react";
import MainHeader from "../Header/header";
import MainFooter from "../Footer/footer";
import styled from "styled-components";
import gallery1 from "../../assets/Gallery1.png";
import gallery2 from "../../assets/Gallery2.png";
import gallery3 from "../../assets/Gallery3.png";
import gallery4 from "../../assets/Gallery4.png";
import gallery5 from "../../assets/Gallery5.png";
import gallery6 from "../../assets/Gallery6.png";
import gallery7 from "../../assets/Gallery7.png";
import gallery8 from "../../assets/Gallery8.png";
import gallery9 from "../../assets/Gallery9.png";
import gallery10 from "../../assets/Gallery10.png";
import slidenumber2 from "../../assets/slide-numbers2.png";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const H1 = styled.h1`
    font-family: Roboto;
    font-size: 64px;
    font-weight: 300;
    text-align: left;
    color: #bdbdbd;
    margin-bottom: 20px;
    margin-top: 10px;
    margin-left: 100px;
  `,
  Span = styled.span`
    font-weight: 700;
    color: #333333;
  `,
  Hr = styled.hr`
    width: 92%;
    margin-left: 100px;
    margin-bottom: 20px;
    border: 1px solid #f2f2f2;
    color: #f2f2f2;
  `,
  Imgdiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px;
    margin-left: 100px;
  `,
  Img = styled.img`
    width: 100%;
    height: 30vh;
  `,
  Numberandarrowdiv = styled.div`
    display: flex;
    margin-left: 100px;
    margin-top: 50px;
    margin-bottom: 80px;
  `,
  Navigation = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100px;
    // margin-top: 100px;
  `,
  Button = styled.button`
    background: #f9f9f9;
    border: none;
    cursor: pointer;
    font-size: 20px;
    margin: 0px 10px;
    border-radius: 0px;
  `;

const Gallery = () => {
  return (
    <>
      <MainHeader />
      <H1>
        Photo <br /> <Span>Gallery</Span>
      </H1>
      <Hr />
      <Imgdiv>
        <Img src={gallery1} alt="gallery photo 1" />
        <Img src={gallery2} alt="gallery photo 2" />
        <Img src={gallery3} alt="gallery photo 3" />
        <Img src={gallery4} alt="gallery photo 4" />
        <Img src={gallery5} alt="gallery photo 5" />
        <Img src={gallery6} alt="gallery photo 6" />
        <Img src={gallery7} alt="gallery photo 7" />
        <Img src={gallery8} alt="gallery photo 8" />
        <Img src={gallery9} alt="gallery photo 9" />
        <Img src={gallery10} alt="gallery photo 10" />
      </Imgdiv>
      <Numberandarrowdiv>
        <div>
          <img src={slidenumber2} alt="" />
        </div>

        <Navigation>
          <Button>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
          <Button>
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Navigation>
      </Numberandarrowdiv>
      <MainFooter />
    </>
  );
};

export default Gallery;
