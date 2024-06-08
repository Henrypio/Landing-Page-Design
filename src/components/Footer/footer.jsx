import react from "react";
import styled from "styled-components";
// import Dashboard from '../Dashboard/dashboard';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import Logoimage2 from "../../assets/Logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footerdiv = styled.div`
    display: flex;
    flex-direction: column;
    background: #2c2c2c;
    // width: 100%;
    margin-top: 50px;
    margin-left: -113px;
    margin-right: -113px;
    padding: 50px 50px;

    @media screen and (max-width: 768px) {
      padding: 50px 20px;
      margin-left: 0;
      margin-right: 0;
    }
  `,
  Footerdiv2 = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: left;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  `,
  Img = styled.img`
    width: 7%;
    height: 7vh;
    margin-left: 100px;
    color: #fff;

    @media screen and (max-width: 768px) {
      width: 100px;
      height: auto;
      margin-left: 0;
      margin-bottom: 20px;
    }
  `,
  Footerpara = styled.p`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
      text-align: center;
    }
  `,
  H4 = styled.h4`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
      text-align: center;
    }
  `,
  Icondiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    gap: 20px;

    @media screen and (max-width: 768px) {
      justify-content: center;
    }
  `,
  Hr = styled.hr`
    opacity: 0.1px;

    margin-left: -90px;
    margin-right: -50px;

    @media screen and (max-width: 768px) {
      margin-left: 0;
      margin-right: 0;
    }
  `,
  Lastp = styled.p`
    font-size: 12px;
    font-family: Open Sans;
    font-weight: 400;
    text-align: center;
    margin-top: 20px;
    margin-bottom: -30px;
    color: #c8c8c880;

    @media screen and (max-width: 768px) {
      margin-bottom: 20px;
    }
  `;

const MainFooter = () => {
  return (
    <>
      <Footerdiv>
        <Footerdiv2>
          <Img src={Logoimage2} alt="logo image" />
          <div>
            <H4>Informations</H4>
            <Footerpara>Main</Footerpara>
            <Footerpara>Gallery</Footerpara>
            <Footerpara>Projects</Footerpara>
            <Footerpara>Certificates</Footerpara>
            <Footerpara>Contacts</Footerpara>
          </div>

          <div>
            <H4>Contacts</H4>
            <Footerpara>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 1234 Sample Street{" "}
              <br />
              Austin Texas 78704
            </Footerpara>
            <Footerpara>
              <FontAwesomeIcon icon={faPhoneAlt} /> 512.333.2222
            </Footerpara>

            <Footerpara>
              <FontAwesomeIcon icon={faEnvelope} /> sampleemail@gmail.com
            </Footerpara>
          </div>

          <div>
            <H4>Social Media</H4>
            <Icondiv>
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faPinterest} />
            </Icondiv>
          </div>
        </Footerdiv2>
        <Hr />
        <Lastp>© 2021 All Rights Reserved </Lastp>
      </Footerdiv>
      ;
    </>
  );
};

export default MainFooter;
