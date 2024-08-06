import React from "react"
import { ContactUs } from "../../components/contact_us"
import styled from "styled-components"
import { Enquiries } from "../../components/contact_us/enquiries"
import { BannerWithTitleLayout } from "../../layouts/banner_layout"
import bannerImage from "../../images/contact_us.png"
import { H2 } from "../../elements/text"
import { MainContainerDiv } from "../../App"

const Container = styled.div`
    /* margin-left: 70px;
    margin-right: 73px; */
    padding: 70px;
    padding-top: 75px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    background-color: white;
    gap: 20px;
    border-radius: 16px;
`

const TotalContainer = styled.div`
    /* margin-left: 70px;
    margin-right: 73px; */
    margin-top: 105px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 16px;
`

const ContactUsContainer = styled.div`
    background-color: white;
    width: 100%;
    /* padding: 20px; */
    /* border-radius: 17px; */
    border-left: 1px;
    border-left-style: solid;
    border-left-color: #F5F5F5;
    padding:30px;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-right: 0px;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
`

const EnquiryContainer = styled.div`
    padding-top:0px;
    border-radius: 17px;
    background-color: white;
`

const WriteToUsElementGap = styled.div`
    padding-bottom: 40px;
    width: 804px;
    justify-content: left;
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    padding: 20px;
    padding-top: 20px;
    border-radius: 16px;
`

export const ContactUsPage = () =>{
        return(<MainContainerDiv>
            <TotalContainer>
            <Container>   
            <BannerWithTitleLayout src={bannerImage} title="Contact Us"/>
            <ContentContainer>
                <EnquiryContainer>
                    <Enquiries />
                </EnquiryContainer>   
                <ContactUsContainer>
                    <WriteToUsElementGap> 
                     <H2 value="Write To Us" height="40px" />
                    </WriteToUsElementGap>
                    <ContactUs/>
                </ContactUsContainer>
            </ContentContainer>   
            </Container>
        </TotalContainer>
            </MainContainerDiv>
        )
}