import { H1, H2, Text } from "../../elements/text"
import React from 'react';
import styled from "styled-components";
import { Image } from "../../elements/image";

const ImageTextTag = styled.div`
    display: flex;
    flex-direction: row;
    gap: 52px;
    margin-top: 100px;
    background-color: ${props => props.bg_color === undefined?"white":"#F5F5F5"};
    @media (max-width:600px){
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        gap: 10px;
    }
` 
const ImageContainer = styled.div`
    width:529px;
    height:396px;
    max-width: 529px;
    max-height: 396px;
    @media (max-width:600px){
        display: flex;
        flex-direction: column;
        order: 0    ;
    }
`
const TextContainer = styled.div`
    width:319px;
    height:auto;
    gap: 10px;
    display: flex;
    flex-direction: column;
    text-align: start;
    align-items: start;
    justify-content: start;
    @media (max-width:600px){
        order: 1;
        gap: 1px;
    }
`

const Text2Container = styled.div`
    width:300px;
    height:auto;
    gap: 10px;
    display: flex;
    flex-direction: column;
    text-align: start;
    align-items: start;
    justify-content: start;
    @media (max-width:600px){
        order: 1;
        gap: 0px;
    }
`

export const TextImageLayout = (props) => {
    return(
        <>
        <ImageTextTag bg_color={props.bg_color}>
                <TextContainer >
                    <Text value={props.text} />
                </TextContainer>
                <ImageContainer>
                    <Image src={props.image} width="100%" height="100%"/>
                </ImageContainer>
        </ImageTextTag>
        </>
    )
}

export const TextWithTitleImageLayout = (props) => {
    return(
        <>
        <ImageTextTag bg_color={props.bg_color}>
                <TextContainer >
                      <H1 value={props.title} color="black" width= "649px" height="auto"></H1>
                      <Text value={props.text} />
                </TextContainer>
                <ImageContainer>
                    <Image src={props.image} width="100%" height="100%"/>
                </ImageContainer>
        </ImageTextTag>
        </>
    )
}

export const TitleWithTextLayout = (props) =>{
    return(<Text2Container>
            <H2 value={props.title} color="black" width= "300px" height="auto" weight="700"></H2>
            <Text value={props.text} width="100%" height="auto" />
            </Text2Container>)
}