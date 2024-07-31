import * as React from "react";
import styled from "styled-components";
import meetAndExpert from "./meet_expert_img.svg"

export default function MeetAnExpert() {
  return (
    <Div>
      <Div2>
        <Column>
          <Img
            loading="lazy"
            srcSet={meetAndExpert}
          />
        </Column>
        <Column2>
          <Div3>
            <Div4>Meet an Expert</Div4>
            <Div5>
              Talk to our design expert for personalized guidance in home architecture and interior design. Book a consultation today and elevate your living spaces with tailored solutions
            </Div5>
            <Button>Meet Expert</Button>
          </Div3>
        </Column2>
      </Div2>
    </Div>
  );
}


const Button = styled.div`
    position: relative;
    border-radius: 8px;
    color: black;
    background-color: white;
    width: 160px;
    height: auto;
    padding: 16px 24px;
    font: 400 14px/150% Poppins, sans-serif;
    border: 1px solid black;
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;

    @media (max-width: 991px) {
        /* padding: 0 20px; */
    }

    &:hover{
        transition: 0.35s;
        /* transform: scale(1.05); */
        font-weight: 500;
        text-decoration: dashed;
        opacity: 1.0;
        box-shadow: 10px 10px 20px rgba(36, 36, 36, 0.5); 
    }
    
    &:active{
        transform: scale(0.95);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
`

const Div = styled.div`
  border-radius: 16px;
  background-color: #141414;
`;

const Div2 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Img = styled.img`
  aspect-ratio: 1.08;
  object-fit: auto;
  object-position: center;
  width: 100%;
  flex-grow: 1;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin: auto 0;
  padding: 0 20px;
  align-items: start;
  justify-content: left;
  gap:20px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div4 = styled.div`
  color: #fff;
  text-transform: capitalize;
  font: 500 32px/160% Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div5 = styled.div`
  color: rgba(255, 255, 255, 0.8);
  text-transform: capitalize;
  margin-top: 4px;
  overflow: auto;
  text-align: start;
  font: 300 20px/32px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div6 = styled.div`
  justify-content: center;
  border-radius: 8px;
  background-color: #fff;
  align-self: start;
  margin-top: 80px;
  color: #1b1e1e;
  padding: 16px 24px;
  font: 400 14px/150% Poppins, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;
