import React from "react"
import { InputTextBox } from "../../elements/form"
import { TextAreaInputBox } from "../../elements/form/text_area"
import styled from "styled-components"
import { Text } from "../../elements/text"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width: 600px) {
        flex-direction: column;  
    }
`


export const Details = (props) => {
    return(<div>
            <Text width="auto" height="20px" value="Details" />
            <Container>
                <TextAreaInputBox placeholder="Message" />
                <InputTextBox placeholder="NestaModel" />
            </Container>
        </div>)
}