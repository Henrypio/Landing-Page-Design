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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Content = styled.div`
  flex: 1;
`;

const Seconddiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Maindiv = styled.div`
    margin-top: 200px;
    margin-left: 100px;
  `,
  H1 = styled.h1`
    color: grey;
  `,
  Span = styled.span`
    color: #000;
  `,
  Img1 = styled.img`
    width: 50%;
    height: 80vh;
  `,
  Navigation = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100px;
    margin-top: 100px;

  `,
  Button = styled.button`
    background: #f9f9f9;
    border: none;
    cursor: pointer;
    font-size: 20px;
    margin: 0px 10px;
    border-radius: 0px;
  `,
  Img2 = styled.img`
    width: 40%;
    height: 5vh;
    margin: 10px 20px;
    margin-top: 100px;
  `,
  Button2 = styled.button`
    background: #fff;
    color: #000;
    border: none;
    cursor: pointer;
    font-size: 10px;
    width: 70%;
    height: 6vh;
    border-radius: 0px;
    position: absolute;
    left: 508px;
    top: 144px;
    padding: 5px;
  `,
  Imageandbuttondiv = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
  `,
  Container = styled.div`
    display: flex;
    justify-content: space-between;
    background: #fbfbfb;
    padding: 20px 50px;
    margin-top: 100px;
    padding-bottom: -100px;
  `,
  Containerdiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 30px;
  `,
  Middleimg1 = styled.img`
    width: 100%;
    height: 30vh;
  `,
  Middleimg2 = styled.img`
    width: 100%;
    grid-column: 2/3;
    grid-row: 1/3;
  `,
  Middleimg3 = styled.img`
    width: 100%;
    height: 15vh;
  `,
  H2 = styled.h2`
    color: #bdbdbd;
    font-size: 50px;
    font-family: Roboto;
    font-weight: 300px;
    margin-right: 200px;
  `,
  FirstPara = styled.p`
    justify-content: center;
    text-align: center;
    color: #000;
    margin-bottom: 50px;
    font-family: Roboto;
  `,
  Button3 = styled.button`
    color: #000;
    background: #fff;
    margin-right: 200px;
    border-radius: 0px;
  `,
  Secondcontainer = styled.div`
    margin-top: 100px;
  `,
  H3 = styled.h3`
    text-align: left;
    font-size: 64px;
    font-family: Roboto;
    font-weight: 300;
    color: grey;
  `,
  Secondcontainerdiv = styled.div`
    display: flex;
    justify-content: space-between;
  `,
  Paradiv1 = styled.div`
    display: flex;
    color: #000;
  `,
  Numberpara1 = styled.p`
    font-family: Roboto;
    font-size: 200px;
    font-weight: 900;
    line-height: 234.38px;
    text-align: left;
    color: #f2f2f2;
  `,
  Letterpara1 = styled.p`
    font-family: Roboto;
    font-size: 22px;
    font-weight: 400;
    text-align: left;
    color: #000;
    margin-top: 40px;
  `,
  Imagediv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px;
  `,
  Image1 = styled.img`
    width: 90%;
    height: 30vh;
    grid-column: 1/3;
    grid-row: 1/2;
  `,
  Image2 = styled.img`
    width: 100%;
    height: 30vh;
    grid-column: 3/5;
    grid-row: 1/2;
  `,
  Image3 = styled.img`
    width: 100%;
    height: 30vh;
    grid-column: 1/2;
    grid-row: 2;
  `,
  Image4 = styled.img`
    width: 100%;
    height: 30vh;
    grid-column: 2/4;
    grid-row: 2;
  `,
  Image5 = styled.img`
    width: 100%;
    height: 30vh;
    grid-column: 4/5;
    grid-row: 2;
  `,
  Button4 = styled.button`
    color: #fff;
    background: #000;
    margin-left: 65rem;
    margin-top: 50px;
    border-radius: 0px;
  `,
  Inputandimgdiv = styled.div`
    display: flex;
  `,
  Inputdiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    // height: 50vh;
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
  `,
  Button5 = styled.button`
    color: #fff;
    background: #000;
    margin-right: 65rem;
    margin-top: 50px;
    border-radius: 0px;
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
              <br /> <Span>LORUM</Span>
            </H1>

            <Navigation>
              <Button>
                <FontAwesomeIcon icon={faArrowLeft} />
              </Button>
              <Button>
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </Navigation>

            <Imageandbuttondiv>
              <Img2 src={slideimage} alt="image with numbers" />

              <Button2>
                VIEW PROJECT
                <FontAwesomeIcon icon={faArrowRight} />
              </Button2>
            </Imageandbuttondiv>
          </Maindiv>

          <Img1 src={imageDashboard} alt="Picture of a building" />
        </Seconddiv>

        <Container>
          <Containerdiv>
            <Middleimg1 src={firstImage} alt="Rectanglar image" />

            <Middleimg2 src={secondImage} alt="second Rectanglar image" />

            <Middleimg3 src={thirdImage} alt="Third Rectanglar image" />
          </Containerdiv>

          <div>
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
          </div>
        </Container>

        <Secondcontainer>
          <H3>Main Focus/Mission Statement</H3>

          <Secondcontainerdiv>
            <Paradiv1>
              <Numberpara1>1</Numberpara1>
              <Letterpara1>
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.{" "}
                <br /> Sed efficitur, lectus et facilisis placerat.
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
              <Input type="text" Placeholder="Name" />
              <Input type="text" Placeholder="Phone Number *" required />
              <Input type="email" Placeholder="E-mail *" required />
              <Input type="text" Placeholder="Interested In" />
              <Input1 type="text" Placeholder="Message *" required />
            </Inputdiv>
            <img src={manOnThePhone} alt="image of a man on the phone" />
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
