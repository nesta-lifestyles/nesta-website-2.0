import React from "react"
import { InputTextBox } from "../../elements/form"
import styled from "styled-components"
import { Text } from "../../elements/text"



const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const RowContainer =styled.div`
    display: flex;
    flex-direction: row;
    gap:10px
`


export const PersonalDetails = (props) => {
    return(<div> 
        <Text width="auto" height="20px" value="Personal Details" />
        <Container>
                <RowContainer>
                    <InputTextBox placeholder="Name"  /> 
                    <InputTextBox placeholder="Email"  />       
                </RowContainer>
                <RowContainer>
                    <InputTextBox width="100px" placeholder="code" />
                    <InputTextBox width="50%" placeholder="Phone Number" />
                </RowContainer>
        </Container>
        </div>)
}