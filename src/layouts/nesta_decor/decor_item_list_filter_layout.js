import styled from "styled-components"
import { RoundedButton } from "../../elements/button/nesta_decor_button"
import React from "react"


const RowFlexContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const LeftRowFlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
`

export const DecorItemListFilterLayout = () => {
    return (<RowFlexContainer>
        <LeftRowFlexContainer>
            <RoundedButton> All </RoundedButton>
            <RoundedButton> Decor </RoundedButton>
            <RoundedButton> Furniture </RoundedButton>
        </LeftRowFlexContainer>
    </RowFlexContainer>)
}