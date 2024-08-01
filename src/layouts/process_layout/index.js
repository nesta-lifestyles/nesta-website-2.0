import React from "react"
import styled from "styled-components"
import firstTestImage from"../../images/designs/process.png"
import { Image } from "../../elements/image"
import processImage from "../../images/mobile/process_2.png"
import { BrowserView, isMobile, MobileView } from "react-device-detect"

const ProcessContainer = styled.div`
`

const getImage=()=>{
    console.log("Is Mobile"+isMobile) 
    if(isMobile) {
        return processImage
    }
    return firstTestImage
}


export const ProcessLayout = () => {
    return(<>
    <ProcessContainer> 
        <Image  
        width= "100%"
        height= "856px"
        src={getImage()}
        alt="slider image"
        id="first_image"
        />
       
        </ProcessContainer>
 
    </>)
}