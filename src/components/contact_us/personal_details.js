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
    gap:10px;
    @media (max-width: 600px) {
        flex-direction: column;  
    }
`


export const PersonalDetails = (props) => {
    return(<div> 
        <Text height="20px" width="100%" value="Personal Details" />
        <Container>
                <RowContainer>
                    <InputTextBox placeholder="Name"  width="100%"/> 
                    <InputTextBox placeholder="Email" width="100%" />       
                </RowContainer>
                <RowContainer>
                    <InputTextBox width="100px" placeholder="code" />
                    <InputTextBox width="50%" placeholder="Phone Number" />
                </RowContainer>
        </Container>
        </div>)
}