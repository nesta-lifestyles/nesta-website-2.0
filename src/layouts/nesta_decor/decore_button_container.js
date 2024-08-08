import React, { useContext } from "react";
import { AddToCartRounded, RequestForQuoteRounded, RoundedButton } from "../../elements/button/nesta_decor_button"
import { NestaDecorCartContext } from "../../pages/nesta_decor/decor_basket_context";
import styled from "styled-components";
import { Text } from "../../elements/text";


const ButtonContainer1 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    width: 100%;
`

const PlusMinusButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    width: auto;
    text-align: center;
    justify-content: space-between;
    align-items: center;
`

const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    text-align: center;
`


export const ButtonContainer = (props) => {
    const { addToCart, getCountOf, removeFromCart} = useContext(NestaDecorCartContext);

    const handleAddToCart = (decorItem) => {
        addToCart(decorItem);
    }

    const shouldWeShow = (decorItem) => {
        if(getCountOf(decorItem)===0) {
            return true
        }
        return false
    }
    

    const handleRequestQuotes = () => {
        
    }


    return(<ButtonContainer1>
         {shouldWeShow(props.decorItem) && <AddToCartRounded id="add_to_cart_button" onClick={() => handleAddToCart(props.decorItem) }/>}
         {!shouldWeShow(props.decorItem) && <PlusMinusButtonContainer id="plus_or_minus_button">
                        <RoundedButton onClick={() => handleAddToCart(props.decorItem)}>+</RoundedButton>
                        <TextContainer>
                            <Text value={getCountOf(props.decorItem)} width="30px" height="20px" />
                        </TextContainer>
                        <RoundedButton onClick={() => removeFromCart(props.decorItem)}>-</RoundedButton>
                    </PlusMinusButtonContainer>}
        <RequestForQuoteRounded  onClick={() =>handleRequestQuotes()}/>
    </ButtonContainer1>)
}