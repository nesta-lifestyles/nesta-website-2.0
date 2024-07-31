import React from "react"
import styled from "styled-components"
import { PersonalDetails } from "./personal_details"
import { Details } from "./details"
import { ProjectaAddressDetails } from "./project_address"
import { ButtonLayout } from "./submit"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: auto;
    width: 804px;
    background-color: white;
    /* border-radius: 17px; */
`

const ButtonContainer = styled.div`
    width: 100%;
    align-items: end;
    justify-content: flex-end;
    display: flex;
    flex-direction: row;

`


export const ContactUs = (props) => {
    return(<Container>
        <PersonalDetails />
        <ProjectaAddressDetails />
        <Details />
        <ButtonContainer>
            <ButtonLayout handleCancel={props.handleCancel}/>
        </ButtonContainer>
    </Container>)
}