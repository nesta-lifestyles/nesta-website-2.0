import styled from "styled-components"
import { SmallText, Text } from "../../elements/text"
import React from "react"
import { HeartButton } from "../../elements/button/heart_button"
import { ButtonContainer } from "./decore_button_container"

const ItemContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    cursor: pointer;
`

const ItemImageContainer = styled.div`
    height: 350px;
    width: 350px;
    /* flex-basis: 33.33333%; */
    border-radius: 20px;
    background: ${(props) => `url(${props.main})`} no-repeat center center fixed; 
    background-size:100% auto;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment:scroll;
`

const HeartIconContainer = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left:20px;
    text-align: left;
    
`

// const ButtonContainer = styled.div`
//     display: flex;
//     flex-direction: row;
//     gap: 24px;
//     width: 100%;
// `


 export const  NestaDecorItem = (props) =>{
    
       return(
            <ItemContainer>
                <ItemImageContainer main={props.decorItem.main_image} onClick={()=>props.handleOnDecoreItemSelected(props.decorItem)}>
                    <HeartIconContainer>
                        <HeartButton/>
                    </HeartIconContainer>
                </ItemImageContainer>
                <TextContainer>
                    <Text value={props.decorItem.name} color="#1B1E1E" height="20px" width="150px"/>
                    <SmallText value={props.decorItem.code} color="#878383" height="20px" width="100px"/>
                </TextContainer>
                <ButtonContainer decorItem = {props.decorItem} />
                {/* <ButtonContainer>
                    <AddToCartRounded id="add_to_cart_button" onClick={() => handleAddToCart(props.decorItem) }/>
                    {is2Visible && <PlusMinusButtonContainer id="plus_or_minus_button">
                        <RoundedButton>+</RoundedButton>
                        <div>1</div>
                        <RoundedButton>-</RoundedButton>
                    </PlusMinusButtonContainer>}
                    <RequestForQuoteRounded />
                </ButtonContainer> */}
            </ItemContainer>
        )
}