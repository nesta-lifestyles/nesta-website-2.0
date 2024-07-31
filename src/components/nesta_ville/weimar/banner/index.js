

import styled from "styled-components"
import testImage from "../../../../images/ville/101/banner.png"
import { TextWithTitleWithImageLayout } from "../../../../layouts/image_text_widget"
import { TitleWithTextLayout } from "../../../../layouts/text_image_layout"
import React from "react"
import { BannerWithTitleAndButtonLayout } from "../../../../layouts/banner_layout"



const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
    @media (max-width:600px){
        flex-direction: column-reverse;
        gap: 0px;
        justify-content: flex-start;
    }

`
const LeftContainer = styled.div`
    /* width: 250px;
    max-width: 250px;
    margin-top: 10%; */
    /* flex-shrink: unset; */
    margin-top: 10%;
`
const RightContainer = styled.div`
    flex: 10 0 0;
`

export const BannerComponent = (props) =>{
    return(<Container>
        <LeftContainer>
            <TitleWithTextLayout title={props.banner.side_title} text={props.banner.text}/>
        </LeftContainer>
        <BannerWithTitleAndButtonLayout src={props.banner.image} title={props.banner.banner_title} onClickHandler={props.banner.meetAnExpertHandler} />
    </Container>)
}