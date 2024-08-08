import styled from "styled-components";
import React from 'react';

const StyledH1 = styled.div`
    position: relative;
    width: ${props => props.width === undefined?"580px":props.width};
    height: ${props => props.height === undefined?"153px":props.height};
    font-style: normal;
    font-weight: ${props => props.weight === undefined?"700":props.weight};
    font-size: 36px;
    text-align: start;
    line-height: 38.4px;
    /* opacity: 0.8; */
    color: ${props => props.color ===undefined?"#1B1E1E":props.color};
    @media (max-width:600px){
     font-size: 20px;
    }
    /* @keyframes slideInFromLeft {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    } */
/* } */
`

const StyledH2 = styled.div`
    position: relative;
    width: ${props => props.width === undefined?"580px":props.width};
    height: ${props => props.height === undefined?"153px":props.height};
    font-style: normal;
    font-weight: ${props => props.weight === undefined?"700":props.weight};
    font-size: 24px;
    line-height: 38.4px;
    /* opacity: 0.8; */
    color: ${props => props.color ===undefined?"#1B1E1E":props.color};
    /* @keyframes slideInFromLeft {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    } */
/* } */

  @media (max-width:600px){
     font-size: 16px;
  }
`


const StyledH3 = styled.div`
    position: relative;
    width: ${props => props.width === undefined?"580px":props.width};
    height: ${props => props.height === undefined?"153px":props.height};
    font-style: normal;
    font-weight: ${props => props.weight === undefined?"700":props.weight};
    font-size: 20px;
    text-align: start;
    line-height: 38.4px;
    /* opacity: 0.8; */
    color: ${props => props.color ===undefined?"#1B1E1E":props.color};
    /* @keyframes slideInFromLeft {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    } */
/* } */
`

const StyledText = styled.p`
    width: ${props => props.width === undefined?"479px":props.width};
    height: ${props => props.height === undefined?"216px":props.height};
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    overflow: hidden;
    -ms-wrap-flow: end;
    /* text-align: left; */
    color: ${props => props.color === undefined?"#1B1E1E":props.color};;
    @media (max-width: 600px) {
      font-weight: 300;
      font-size: 10px;
    }
`


const StyledSmallText = styled.p`
    width: ${props => props.width === undefined?"479px":props.width};
    height: ${props => props.height === undefined?"216px":props.height};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 200%;
    overflow: hidden;
    -ms-wrap-flow: end;
    align-items: start;
    color: ${props => props.color === undefined?"#1B1E1E":props.color};;
    @media (max-width: 600px) {
      font-weight: 300;
      font-size: 10px;
    }
`

export const H1 = (props) => {
    return <StyledH1 width={props.width} height={props.height} color={props.color} weight={props.weight}> {props.value} </StyledH1>
}    

export const H2 = (props) => {
  return <StyledH2 width={props.width} height={props.height} color={props.color} weight={props.weight}> {props.value} </StyledH2>
}    

export const H3 = (props) => {
  return <StyledH3 width={props.width} height={props.height} color={props.color} weight={props.weight}> {props.value} </StyledH3>
}    


export const Text = (props) => {
    return <StyledText width={props.width} height={props.height} color={props.color}> {props.value} </StyledText>
} 

export const MediumText = (props) => {
  return <StyledText width={props.width} height={props.height} color={props.color}> {props.value} </StyledText>
} 


export const SmallText = (props) => {
  return <StyledSmallText width={props.width} height={props.height} color={props.color}> {props.value} </StyledSmallText>
}