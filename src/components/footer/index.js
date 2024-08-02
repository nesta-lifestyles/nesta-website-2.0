import * as React from "react";
import styled from "styled-components";
import Logo from "./logo_white.svg"

export default function Footer() {
  return (
    <Div>
      <Div2>
        <IconDiv>
        <Img
          loading="lazy"
          srcSet={Logo}
        />          
        </IconDiv>
        <Div3>
          <Div4>
            <Column>
              <Div5>
                <Div6>COMPANY</Div6>
                <Div7>About us</Div7>
                <Div8>Stories</Div8>
              </Div5>
            </Column>
            <Column2>
              <Div9>
                <Div10>PRODUCTS</Div10>
                <Div11>Nesta ville</Div11>
                <Div12>Nesta Marketplace</Div12>
                <Div13>Nesta Sense</Div13>
                <Div14>Nesta Design</Div14>
              </Div9>
            </Column2>
            <Column3>
              <Div15>
                <Div16>SOCIAL MEDIA</Div16>
                <Div17>Linkedin</Div17>
                <Div18>Instagram</Div18>
              </Div15>
            </Column3>
          </Div4>
        </Div3>
      </Div2>
      <Div19 />
      <Div20>
        <Div21>
          <Div22>Terms of service</Div22>
          <Div23 />
          <Div24>privacy policy</Div24>
          <Div25 />
          <Div26>do not sell my personal information</Div26>
        </Div21>
        <div>
        <IconDiv2>
        <Img
          loading="lazy"
          srcSet={Logo}
        />          
        </IconDiv2>
        <Div27>© 2022 Nesta Company</Div27>
        </div>
      </Div20>
    </Div>
  );
}

const Div = styled.div`
  border-radius: 20px 20px 0px 0px;
  background-color: #141414;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 72px 0;
  @media (max-width: 991px) {
    padding-bottom: 210px;
  }
`;

const Div2 = styled.div`
  display: flex;
  margin-top: 22px;
  width: 100%;
  max-width: 1048px;
  gap: 20px;
  justify-content: space-between;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Img = styled.img`
  aspect-ratio: 0.79;
  object-fit: auto;
  object-position: center;
  width: 78px;
  align-self: start;
`;

const Div3 = styled.div`
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0px;
  }
`;

const Div4 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
    text-align: left;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 30%;
  
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 20px;
  }
`;

const Div5 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  color: #fff;
  font-weight: 400;
  text-transform: capitalize;
  line-height: 164%;
  @media (max-width: 991px) {
    /* text-align: left; */

  }
`;

const Div6 = styled.div`
  color: #767676;
  letter-spacing: 4.2px;
  font: 14px Poppins, sans-serif;
`;

const Div7 = styled.div`
  font-family: Poppins, sans-serif;
  margin-top: 10px;
`;

const Div8 = styled.div`
  font-family: Poppins, sans-serif;
  margin-top: 8px;
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 46%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div9 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  font-size: 20px;
  color: #fff;
  font-weight: 400;
  line-height: 164%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div10 = styled.div`
  color: #767676;
  letter-spacing: 4.2px;
  text-transform: capitalize;
  font: 14px Poppins, sans-serif;
`;

const Div11 = styled.div`
  font-family: Poppins, sans-serif;
  margin-top: 10px;
`;

const Div12 = styled.div`
  font-family: Poppins, sans-serif;
  margin-top: 8px;
`;

const Div13 = styled.div`
  font-family: Poppins, sans-serif;
  margin-top: 8px;
`;

const Div14 = styled.div`
  font-family: Poppins, sans-serif;
  margin-top: 8px;
`;

const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 24%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div15 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  color: #fff;
  font-weight: 400;
  text-transform: capitalize;
  line-height: 164%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div16 = styled.div`
  color: #767676;
  letter-spacing: 4.2px;
  font: 14px Poppins, sans-serif;
`;

const Div17 = styled.div`
  font-family: Poppins, sans-serif;
  margin-top: 10px;
`;

const Div18 = styled.div`
  font-family: Poppins, sans-serif;
  margin-top: 10px;
`;

const Div19 = styled.div`
  border-color: rgba(56, 56, 56, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #383838;
  align-self: stretch;
  min-height: 1px;
  margin-top: 82px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div20 = styled.div`
  display: flex;
  margin-top: 62px;
  width: 100%;
  max-width: 1206px;
  gap: 20px;
  font-size: 14px;
  color: #878f9c;
  font-weight: 400;
  text-transform: capitalize;
  line-height: 164%;
  justify-content: space-between;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 0px;
    gap: 70px;
    padding: 0px;
    justify-content: center;
    text-align: center;
  }
`;

const Div21 = styled.div`
  display: flex;
  gap: 11px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding-top: 90px;
    gap:24px;
  }
`;

const Div22 = styled.div`
  font-family: Outfit, sans-serif;
`;

const Div23 = styled.div`
  border-color: rgba(255, 255, 255, 0.11);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(255, 255, 255, 0.11);
  width: 1px;
  height: 23px;
  @media (max-width: 600px){
    display: none;
  }
`;

const Div24 = styled.div`
  font-family: Outfit, sans-serif;
`;

const Div25 = styled.div`
  border-color: rgba(255, 255, 255, 0.11);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(255, 255, 255, 0.11);
  width: 1px;
  height: 23px;
  @media (max-width: 600px){
    display: none;
  }
`;

const Div26 = styled.div`
  font-family: Outfit, sans-serif;
`;

const Div27 = styled.div`
  font-family: Outfit, sans-serif;
`;


const IconDiv = styled.div`
  @media(max-width:600px) {
      display: none;
  }
`

const IconDiv2 = styled.div`
  @media(min-width:600px) {
      display: none;
  }
`