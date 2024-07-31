import React from "react";
import styled from "styled-components";
import { TextAreaInputBox } from "../../elements/form/text_area";
import { InputTextBox } from "../../elements/form";
import { Text } from "../../elements/text";

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
export const ProjectaAddressDetails = (props) => {
    return(<div>
            <Text width="auto" height="25px" value="Project Details" />
                <Container>    
                    <TextAreaInputBox placeholder="Address" />
                    <RowContainer>
                        <InputTextBox placeholder="Land Mark" />
                        <InputTextBox placeholder="Pincode" />
                    </RowContainer>
                    <RowContainer>
                        <InputTextBox placeholder="State" />
                        <InputTextBox placeholder="Country" />
                    </RowContainer>
                    <RowContainer>
                    <InputTextBox width="100px" placeholder="code" />   
                    <InputTextBox width="50%" placeholder="Phone Number" />
                    </RowContainer>
            </Container>
        </div>)
}