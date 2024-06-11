import react from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import imageDashboard from "../../assets/imageDashboard.png";
import MainHeader from "../Header/header";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import slideimage from "../../assets/slide-numbers.png";
import firstImage from "../../assets/First-image.png";
import secondImage from "../../assets/Second-image.png";
import thirdImage from "../../assets/Third image.png";
import rectangleimage1 from "../../assets/Rectangleimage1.png";
import rectangleimage2 from "../../assets/Rectangleimage2.png";
import rectangleimage3 from "../../assets/Rectangleimage3.png";
import rectangleimage4 from "../../assets/Rectangleimage4.png";
import rectangleimage5 from "../../assets/Rectangleimage5.png";
import manOnThePhone from "../../assets/ManWithPhone.png";
import MainFooter from "../Footer/footer";

const PageContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: 100vh;
`;
const Content = styled.div`
  flex: 1;
  margin-top: 100px;
  margin-left: 100px;
  margin-right: 100px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    margin-top: 100px;
  }
`;

const Seconddiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: start;
      align-items: flex-start;
    }
  `,
  Maindiv = styled.div`
    margin-top: 200px;
    margin-left: 100px;

    @media (max-width: 768px) {
      margin-top: 50px;
      margin-left: 20px;
    }
  `,
  H1 = styled.h1`
     color: grey;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom:30px;

  `,
  Span = styled.span`
    color: #000;
  `,
  Navigation = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100px;
    margin-top: 100px;

    @media (max-width: 768px) {
      margin-top: 40px;
      margin-bottom: 20px;
    }
  `,
  Button = styled.button`
    background: #f9f9f9;
    cursor: pointer;
    font-size: 20px;
    margin: 0px 10px;
    border-radius: 0px;
    color: #333333;

    @media (max-width: 768px) {
      font-size: 16px;
      margin: 0 5px;
    }
  `,
  Button1 = styled.button`
    background: #ffffff;
    cursor: pointer;
    font-size: 20px;
    border-radius: 0px;
    color: #333333;
    border: 2px solid #f2f2f2;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  `,
  Img2 = styled.img`
    width: 40%;
    height: 5vh;
    margin: 10px 20px;
    margin-top: 100px;

    @media (max-width: 768px) {
      width: 80%;
      height: auto;
      margin-top: 30px;
      margin-bottom: 30px;
    }
  `,
  Img1 = styled.img`
    width: 100%;
    height: auto;
    display: block;

    @media (max-width: 768px) {
      height: auto;
      margin-top: 30px;
    }
  `,
  Button2 = styled.button`
    position: absolute;
    bottom: 0px;
    left: 0px;
    background-color: #fff;
    color: #333333;
    border: none;
    padding: 10px 20px;
    font-size: 12px;
    cursor: pointer;
    border-radius: 0;
    display: flex;
    align-items: center;
    gap: 5px;

    &:hover {
      border: 1px solid #0056b3;
    }

    @media (max-width: 768px) {
      font-size: 12px;
      padding: 8px 16px;
    }
  `,
  Imageandbuttondiv = styled.div`
    position: relative;
    display: inline-block;
    width: 50%; /* Adjusted for better positioning on smaller screens */

    @media (max-width: 768px) {
      width: 100%;
    }
  `,
  Container = styled.div`
    display: flex;
    justify-content: space-between;
    background: #fbfbfb;
    padding: 0 50px;
    padding-top: 20px;
    margin-top: 100px;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 0 20px;
      margin-top: 50px;
    }
  `,
  Containerdiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 768px) {
      gap: 20px;
    }
  `,
  Middleimg1 = styled.img`
    width: 100%;
  `,
  Middleimg2 = styled.img`
    width: 30%;
    height: 400px;
    margin-top: 20px;
    margin-right: 50px;

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
      margin-right: 0;
      margin-top: 50px;
    }
  `,
  Middleimg3 = styled.img`
    width: 100%;
    height: 100%;
    bottom: -20px;
    position: relative;
  `,
  Div = styled.div`
    margin-bottom: 100px;
    margin-top: -50px;
    margin-right: 50px;

    @media (max-width: 768px) {
      margin-top: 20px;
      margin-bottom: 50px;
    }
  `,
  H2 = styled.h2`
    color: #bdbdbd;
    font-size: 50px;
    font-family: Roboto;
    font-weight: 300px;
    margin-right: 200px;

    @media (max-width: 768px) {
      font-size: 32px;
      margin-right: 0;
      text-align: center;
    }
  `,
  FirstPara = styled.p`
    justify-content: center;
    text-align: center;
    color: #000;
    margin-bottom: 30px;
    font-family: Roboto;

    @media (max-width: 768px) {
      font-size: 14px;
      text-align: left;
    }
  `,
  Button3 = styled.button`
    color: #000;
    background: #fff;
    margin-right: 200px;
    border-radius: 0px;
    margin-top: 50px;
    margin-bottom: 0px;

    @media (max-width: 768px) {
      margin-right: 0;
      margin-top: 20px;
      font-size: 14px;
      padding: 10px 15px;
      align-self: center;
    }
  `,
  Secondcontainer = styled.div`
    margin-top: 100px;

    @media (max-width: 768px) {
      margin-top: 50px;
      padding: 0 20px;
    }
  `,
  H3 = styled.h3`
    text-align: left;
    font-size: 64px;
    font-family: Roboto;
    font-weight: 300;
    color: grey;

    @media (max-width: 768px) {
      font-size: 30px;
      text-align: left;
    }
  `,
  Secondcontainerdiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: -40px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  `,
  Paradiv1 = styled.div`
    display: flex;
    color: #000;

    @media (max-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  `,
  Numberpara1 = styled.p`
    font-family: Roboto;
    font-size: 200px;
    font-weight: 900;
    text-align: left;
    color: #f2f2f2;
    margin-top: 0px;

    @media (max-width: 768px) {
      font-size: 100px;
      text-align: left;
      margin-bottom: 0px;
      margin-left: 0px;
    }
  `,
  Letterpara1 = styled.p`
    font-family: Roboto;
    font-size: 22px;
    font-weight: 400;
    line-height: 36px;
    text-align: left;
    margin-top: 40px;
    color: #333333;

    @media (max-width: 768px) {
      font-size: 12px;
      text-align: left;
      line-height: 15px;
      margin-top: 0px;
    }
  `,
  Imagediv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(5, 1fr);
      gap: 10px;
    }
  `,
  Image1 = styled.img`
    width: 90%;
    height: 30vh;
    grid-column: 1/3;
    grid-row: 1/2;

    @media (max-width: 768px) {
      width: 100%;
      grid-column: 1;
      grid-row: 1;
    }
  `,
  Image2 = styled.img`
    width: 100%;
    height: 30vh;
    grid-column: 3/5;
    grid-row: 1/2;

    @media (max-width: 768px) {
      width: 100%;
      grid-column: 1;
      grid-row: 2;
    }
  `,
  Image3 = styled.img`
    width: 100%;
    height: 30vh;
    grid-column: 1/2;
    grid-row: 2;

    @media (max-width: 768px) {
      width: 100%;
      grid-column: 1;
      grid-row: 3;
    }
  `,
  Image4 = styled.img`
    width: 100%;
    height: 30vh;
    grid-column: 2/4;
    grid-row: 2;

    @media (max-width: 768px) {
      width: 100%;
      grid-column: 1;
      grid-row: 4;
    }
  `,
  Image5 = styled.img`
    width: 100%;
    height: 30vh;
    grid-column: 4/5;
    grid-row: 2;

    @media (max-width: 768px) {
      width: 100%;
      grid-column: 1;
      grid-row: 5;
    }
  `,
  Button4 = styled.button`
    color: #fff;
    background: #000;
    margin-left: 65rem;
    margin-top: 50px;
    border-radius: 0px;

    @media (max-width: 768px) {
      margin-left: 0;
      width: 50%;
    }
  `,
  Inputandimgdiv = styled.div`
    display: flex;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  `,
  Inputdiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    // height: 50vh;

    @media (max-width: 768px) {
      width: 100%;
    }
  `,
  Input = styled.input`
    width: 90%;
    height: 15%;
    border: none;
    background-color: #f3f3f3;
    // border-bottom: 5px solid #F3F3F3;
    margin-bottom: 10px;
    // margin-top: 10px;
    padding-left: 20px;
    padding-bottom: 15px;

    ::placeholder {
      text-align: center;
      color: #000;
    }

    @media (max-width: 768px) {
      // width: 100%;
    }
  `,
  Input1 = styled.input`
    width: 90%;
    height: 30%;
    background-color: #f3f3f3;
    border: none;
    padding-left: 20px;
    padding-bottom: 70px;

    ::placeholder {
      text-align: center;
      color: #fff;
    }

    @media (max-width: 768px) {
      // width: 100%;
    }
  `,
  Imgpic = styled.img`
    width: 100%;

    @media (max-width: 768px) {
      margin-top: 20px;
    }
  `,
  Button5 = styled.button`
    color: #fff;
    background: #000;
    margin-right: 65rem;
    margin-top: 50px;
    border-radius: 0px;

    @media (max-width: 768px) {
      margin-right: 0;
      width: 50%;
    }
  `;

const Dashboard = () => {
  return (
    <PageContainer>
      <MainHeader />

      <Content>
        <Seconddiv>
          <Maindiv>
            <H1>
              PROJECT
              <br /> <Span>Lorum</Span>
            </H1>

            <Navigation>
              <Button1>
                <FontAwesomeIcon icon={faArrowLeft} />
              </Button1>
              <Button>
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </Navigation>

            <Img2 src={slideimage} alt="image with numbers" />
          </Maindiv>

          <Imageandbuttondiv>
            <Img1 src={imageDashboard} alt="Picture of a building" />
            <Button2>
              VIEW PROJECT
              <FontAwesomeIcon icon={faArrowRight} />
            </Button2>
          </Imageandbuttondiv>
        </Seconddiv>

        <Container>
          <Containerdiv>
            <Middleimg1 src={firstImage} alt="Rectanglar image" />

            <Middleimg3 src={thirdImage} alt="Third Rectanglar image" />
          </Containerdiv>

          <Middleimg2 src={secondImage} alt="second Rectanglar image" />

          <Div>
            <H2>About</H2>
            <FirstPara>
              Lorem Ipsum is simply dummy text of the printing and <br />{" "}
              typesetting industry. Lorem Ipsum has been the <br /> industry's
              standard dummy text ever since the 1500s,
              <br /> when an unknown printer took a galley of type and
              <br /> scrambled it to make a type specimen book. It has <br />{" "}
              survived not only five centuries, but also the leap into
              <br /> electronic typesetting, remaining essentially unchanged.
            </FirstPara>
            <Button3>
              READ MORE
              <FontAwesomeIcon icon={faArrowRight} />
            </Button3>
          </Div>
        </Container>

        <Secondcontainer>
          <H3>Main Focus/Mission Statement</H3>

          <Secondcontainerdiv>
            <Paradiv1>
              <Numberpara1>1</Numberpara1>
              <Letterpara1>
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.{" "}
                <br /> Sed efficitur, lectus et <br /> facilisis placerat.
              </Letterpara1>
            </Paradiv1>

            <Paradiv1>
              <Numberpara1>2</Numberpara1>
              <Letterpara1>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                Sed efficitur, lectus et <br /> facilisis placerat, magna mauris
                porttitor <br /> tortor, a auctor est felis ut nisl.
              </Letterpara1>
            </Paradiv1>
          </Secondcontainerdiv>
        </Secondcontainer>

        <div>
          <H3>Our Projects</H3>
          <Imagediv>
            <Image1 src={rectangleimage1} alt="Rectangle image 1" />
            <Image2 src={rectangleimage2} alt="Rectangle image 2" />
            <Image3 src={rectangleimage3} alt="Rectangle image 3" />
            <Image4 src={rectangleimage4} alt="Rectangle image 4" />
            <Image5 src={rectangleimage5} alt="Rectangle image 5" />
          </Imagediv>
          <div>
            <Button4>
              ALL PROJECTS
              <FontAwesomeIcon icon={faArrowRight} />
            </Button4>
          </div>
        </div>

        <div>
          <H3>Contact Us</H3>
          <Inputandimgdiv>
            <Inputdiv>
              <Input type="text" placeholder="Name" />
              <Input type="text" placeholder="Phone Number *" required />
              <Input type="email" placeholder="E-mail *" required />
              <Input type="text" placeholder="Interested In" />
              <Input1 type="text" placeholder="Message *" required />
            </Inputdiv>
            <Imgpic src={manOnThePhone} alt="image of a man on the phone" />
          </Inputandimgdiv>

          <Button5>
            SEND EMAIL
            <FontAwesomeIcon icon={faArrowRight} />
          </Button5>
        </div>
      </Content>

      <MainFooter />
    </PageContainer>
  );
};

export default Dashboard;
