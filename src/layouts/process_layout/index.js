import React from "react"
import styled from "styled-components"
import firstTestImage from"../../images/designs/process.png"
import { Image } from "../../elements/image"

const ProcessContainer = styled.div`
`


export const ProcessLayout = () => {
    return(<>
    <ProcessContainer> 
        <Image  width= "1206.11px"
        height= "856px"
        src={firstTestImage}
        alt="slider image"
        id="first_image"
        />
        </ProcessContainer>
 
    </>)
}