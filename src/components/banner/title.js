import styled from "styled-components"
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import { H1, H2 } from "../../elements/text";
import React from 'react';
import { WhiteButton, RevertButton } from "../../elements/button";

const DivText = styled.div`
    position: absolute;
    left: 60px;
    bottom: 10px;
    z-index: 1;
    height: 153px;
    animation: 1s ease-out 0s 1 slideInFromLeft;
    @media (max-width:600px){
      position: absolute;
      left: 15px;
      bottom: 12px;
    }
    @keyframes slideInFromLeft {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0);
        }
    }
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction:column;
  gap: 24px;
`

const DivButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  height: 153px;
  width: 580px;
`

const transitions = {
    entering: {
      display: 'block'
    },
    entered: {
      opacity: 1,
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

export const Title = (props) => {
    return <SwitchTransition made="out-in">
    <CSSTransition key={props.animationflag} 
     timeout={300} 
     classNames={{enterActive: 'animate__animated animate__flipInX', exitActive: 'animate__animated animate__flipOutX'}}>
       {state => <DivText style={{
                    ...transitions[state]
            }}>
              <TitleContainer>
                  <H1 value={props.title} color="white" width= "596px" height="auto"/>
                  <DivButtonContainer>
                      <RevertButton width="160px" height="53px" color="white" value = "Explore Models"></RevertButton>
                      <WhiteButton width="160px" height="53px" color="white" value = "Meet Expert"></WhiteButton>
                  </DivButtonContainer>
              </TitleContainer>
        </DivText>}
    </CSSTransition>
</SwitchTransition>
}


export const OnlyTitle = (props) => {
  return <SwitchTransition made="out-in">
  <CSSTransition key={props.animationflag} 
   timeout={300} 
   classNames={{enterActive: 'animate__animated animate__flipInX', exitActive: 'animate__animated animate__flipOutX'}}>
     {state => <div style={{
                  ...transitions[state]
          }}>
            <TitleContainer>
                <H2 value={props.title} color="white" width= "100%" height="40px" weight="600"/>
            </TitleContainer>
      </div>}
  </CSSTransition>
</SwitchTransition>
}