import React from "react"
import styled from "styled-components"
import { SmallText } from "../../elements/text"
import { InputTextBoxEmail } from "../../elements/form"


const Container = styled.div`
    position: relative;
    width: 300px;
    height: auto;
    display: flex;
    gap: 20px;
    flex-direction: column;
    text-align: left;
    margin-right:15px;
`

const SubscriberContainer = styled.div`
    background-color: #767676;
    display: flex;
    flex-direction: row;
    height: 20px;
    width: 90%;
    height: auto;
    border-radius: 8px;
    opacity: 0.5;
`

const BlackButton = styled.div`
    position: relative;
    border-radius: 8px;
    color: white;
    background-color: black;
    width: 104px;
    height: 100%;
    margin: 5px;
    padding: 16px 24px;
    font: 400 14px/150% Poppins, sans-serif;
    border: 1px solid black;
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;
    text-align: center;
    @media (max-width: 991px) {
        
    }

    &:hover{
        transition: 0.35s;
        /* transform: scale(1.05); */
        font-weight: 500;
        text-decoration: dashed;
        opacity: 1.0;
        color: white;
        box-shadow: 10px 10px 20px rgba(36, 36, 36, 0.5); 
    }
    
    &:active{
        transform: scale(0.95);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
`

const Button = styled.div`
    position: relative;
    border-radius: 8px;
    color: white;
    background-color: #4597F9;
    width: 90%;
    height: auto;
    padding: 16px 24px;
    font: 400 14px/150% Poppins, sans-serif;
    border: 1px solid black;
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;
    text-align: center;
    @media (max-width: 991px) {
        
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

export const RightCornerLayout = () => {
    return(<Container>
            <div>
                <SmallText width="100%" color="white" value="Any Questions?" height="24px" />
                <Button> Contact Us </Button>
            </div>
            <div>
                <SmallText width="100%" color="white" value="Leave Your Email To Stay Informed. "height="24px" />
                <SubscriberContainer>
                    <InputTextBoxEmail placeholder="Sample@gmail.com"/>
                    <BlackButton> Subscribe </BlackButton>
                </SubscriberContainer>
            </div>
    </Container>)
}