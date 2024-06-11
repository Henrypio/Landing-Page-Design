import React from "react";
import styled from "styled-components";
import Logoimage2 from "../../assets/Logo2.png";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footerdiv = styled.div`
  width: 100%;
  background: #2c2c2c;
  padding: 50px 0;
  margin-top: 20px;
`;

const Footerdiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin-bottom: 10px;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 0 20px;
  }
`;

const Img = styled.img`
  width: 7%;
  height: 7vh;
  color: #fff;

  @media screen and (max-width: 768px) {
    width: 100px;
    height: auto;
    margin-bottom: 20px;
  }
`;

const Footerpara = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    text-align: left;
  }
`;

const H4 = styled.h4`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    text-align: left;
  }
`;

const Icondiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 20px;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const Div = styled.div`
  border: 1px solid #fff;
  width: 100%;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

const Lastp = styled.p`
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
            <FontAwesomeIcon icon={faMapMarkerAlt} /> 1234 Sample Street <br />
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
      <Div></Div>
      <Lastp>© 2021 All Rights Reserved </Lastp>
    </Footerdiv>
  );
};

export default MainFooter;
