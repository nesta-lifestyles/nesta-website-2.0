import styled from "styled-components"
import { AddToCartButton, RequestForQuoteButton } from "../../elements/button/nesta_decor_button"
import React from "react"
import { H2, Text } from "../../elements/text"
import { HeartButton } from "../../elements/button/heart_button"

const ColumnContainer  = styled.div`
    display: flex;
    flex-direction: column;
    gap: 90px;
`


const TextContainer  = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: left;
    justify-content: left;
    align-items: flex-start;
`

const ButtonContainer  = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    text-align: left;
    justify-content: left;
    align-items: flex-start;
`



export const DecorItemInforLayout  = (props) => {
    return(<ColumnContainer>
    <TextContainer>
        <HeartButton background_color="#F5F5F5"/>
        <H2 value={props.decorItem.name} height="40px" width="100%"/>
        <Text value={props.decorItem.information} height="100%" width="100%"/>
    </TextContainer>
    <ButtonContainer>
        <AddToCartButton></AddToCartButton>
        <RequestForQuoteButton></RequestForQuoteButton>
    </ButtonContainer>
    </ColumnContainer>)
}