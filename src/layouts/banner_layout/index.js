import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import styled from "styled-components";
import { OnlyTitle} from "../../components/banner/title";

const StyledBannerDiv = styled.div`
        width: 100%;
        height: 675px;
        border-radius: 24px;
        border: 3px;
        border-color: green;
        max-width: 100%;
        max-height: 675px;
`

const StyledBannerDiv2 = styled.div`
        width: 100%;
        height: auto;
        max-height: 576px;
        border-radius: 24px;
        border: 3px;
        border-color: green;
        max-width: 100%;
        max-height: 675px;
`

const StyledOuterDiv = styled.div`
        margin: 0px;
`

const StyledDiv = styled.div`
        width: 100%;
        height: 634px;
        max-width: 100%;
        max-height: 634px;
        background: ${(props) => `url(${props.src})`}  no-repeat fixed center; 
        position: relative;
        background-attachment:scroll;
        background-size:cover;
        background-position: center;
        
        border-radius:20px;
        animation: animatedBackground ease 3s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;

        @media (max-width: 1200px) {
          width:100%;
          max-width:100%;
          background-size:cover;    
     
        }

        @media (max-width:600px){
          width:100%;
          max-width:100%;
          background-size:cover;
          display:flex ; 
          flex-direction:column;

        }

        /* max-height: ${props => props.height === undefined?"53px":props.height};; */
        @keyframes animatedBackground {
            0% {
                opacity: .6;
            }
            100% {
                opacity: 1;
            }
        }
`

const StyledDiv2 = styled.div`
        width: 100%;
        height: 506px;
        max-width: 100%;
        max-height: 506px;
        background: ${(props) => `url(${props.src})`}  no-repeat fixed center; 
        position: relative;
        background-attachment:scroll;
        background-size:cover;
        background-position: center;
        
        border-radius:20px;
        animation: animatedBackground ease 3s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;

        @media (max-width: 1200px) {
          width:100%;
          max-width:100%;
          background-size:cover;          
        }
        @media (max-width:600px){
          width:100%;
          max-width:100%;
          background-size:cover;
        }

        /* max-height: ${props => props.height === undefined?"53px":props.height};; */
        @keyframes animatedBackground {
            0% {
                opacity: .6;
            }
            100% {
                opacity: 1;
            }
        }
`


const DivText = styled.div`
    position: absolute;
    left: 58px;
    bottom: 100px;
    height: 40px;
    max-height: 40px;
    text-align: left;
    animation: 1s ease-out 0s 1 slideInFromLeft;
    @keyframes slideInFromLeft {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
    }
    @media (max-width:600px){
          display:flex ; 
          flex-direction:column;
          gap: 20px;
          align-content: flex-start;
          margin-bottom: 10px;
          bottom: 20%;
    }
`

const DivText2 = styled.div`
    position: absolute;
    left: 58px;
    bottom: 30px;
    height: 40px;
    max-height: 40px;
    animation: 1s ease-out 0s 1 slideInFromLeft;
    text-align: left;
    @keyframes slideInFromLeft {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
    }
`
const transitions = {
    entering: {
      display: 'block'
    },
    entered: {
      opacity: 0,
      display: 'block'
    },
    exiting: {
      opacity: 0,
      display: 'block'
    },
    exited: {
      opacity: '0',
      display: 'none'
    }
  };


  const Button = styled.div`
    position: relative;
    border-radius: 8px;
    color: white;
    width: 160px;
    height: auto;
    padding: 16px 24px;
    font: 400 14px/150% Poppins, sans-serif;
    border: 1px solid white;
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;
    margin:24px;
    @media (max-width:600px){
      width: 140px;
      height: 53px;
      margin: 10px;
      margin-left: 0px;
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

const WhiteButton = styled.div`
    position: relative;
    border-radius: 8px;
    color: black;
    width: 160px;
    height: auto;
    padding: 16px 24px;
    background-color: white;
    font: 400 14px/150% Poppins, sans-serif;
    border: 1px solid white;
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;
    margin:24px;
    @media (max-width:600px){
      width: 140px;
      height: 53px;
      margin: 10px;
      margin-left: 0px;
    }

    @media (max-width: 991px) {
      margin-left: 0px;
      /* margin-bottom: 24px;
      margin:0px; */
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

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap:12px;
    position: absolute;
    right: 20px;
    bottom: 50px;
    @media (max-width:600px){
          display:flex ; 
          flex-direction:row;
          gap: 5px;
          left: 20px;
          bottom: 5px;
    }
`

export const BannerLayout =(props)=>{
    return <StyledBannerDiv>
      <StyledOuterDiv>
        <SwitchTransition made="out-in">
    <CSSTransition key={props.animationflag} 
     timeout={300} 
     classNames={{enterActive: 'animate__animated animate__flipInX', exitActive: 'animate__animated animate__flipOutX'}}>
       {state => <StyledDiv src={props.src} style={{...transitions[state]}}>
                    <DivText> 
                        <OnlyTitle props={props} animationflag = {props.animationflag} title={props.title}/>
                    </DivText>
                    <ButtonContainer>
                        <Button onClick={props.KnowMoreHandler}>Know More</Button>
                        <WhiteButton onClick={props.contactUsHandler}>Contact Us</WhiteButton>
                    </ButtonContainer>
                </StyledDiv>}
        </CSSTransition></SwitchTransition>
        </StyledOuterDiv>
      </StyledBannerDiv>
    // return <Image src={props.src} width={"100%"} height={"634px"}/>
}

export const BannerWithTitleLayout =(props)=>{
    return <StyledBannerDiv>
      <StyledOuterDiv>
        <SwitchTransition made="out-in">
    <CSSTransition key={props.animationflag} 
     timeout={300} 
     classNames={{enterActive: 'animate__animated animate__flipInX', exitActive: 'animate__animated animate__flipOutX'}}>
       {state => <StyledDiv src={props.src} style={{...transitions[state]}}>
                    <DivText2> 
                        <OnlyTitle props={props} animationflag = {props.animationflag} title={props.title}/>
                    </DivText2>
                </StyledDiv>}
        </CSSTransition></SwitchTransition>
        </StyledOuterDiv>
      </StyledBannerDiv>
    // return <Image src={props.src} width={"100%"} height={"634px"}/>
}


export const BannerWithTitleAndButtonLayout =(props)=>{
    return <StyledBannerDiv2>
      <StyledOuterDiv>
        <SwitchTransition made="out-in">
    <CSSTransition key={props.animationflag} 
     timeout={300} 
     classNames={{enterActive: 'animate__animated animate__flipInX', exitActive: 'animate__animated animate__flipOutX'}}>
       {state => <StyledDiv2 src={props.src} style={{...transitions[state]}}>
                    <DivText> 
                        <OnlyTitle props={props} animationflag = {props.animationflag} title={props.title}/>
                        <WhiteButton onClick={props.onClickHandler}>Meet an Expert</WhiteButton>
                    </DivText>
                </StyledDiv2>}
        </CSSTransition></SwitchTransition>
        </StyledOuterDiv>
      </StyledBannerDiv2>
    // return <Image src={props.src} width={"100%"} height={"634px"}/>
}