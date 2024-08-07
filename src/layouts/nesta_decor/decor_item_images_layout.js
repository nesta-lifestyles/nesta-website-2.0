import styled from "styled-components"
import { Image } from "../../elements/image"
import React from "react"

const DecorImagesMainContainer  = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 464px;
`

const DecorSubImagesContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
`

const DecorSubImageContainer = styled.div`
    width: 142px;
    height: 140px;
    cursor: pointer;
`

const DecorMainImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 19px;
    width: 100%;
    height: 445px;
`


export const DecorItemImagesLayout = (props) => {
    return(<DecorImagesMainContainer>
        <DecorMainImageContainer>
            <Image width="100%" height="100%" src={props.decorItem.images[props.selectedImageIndex]} />  
        </DecorMainImageContainer>
        <DecorSubImagesContainer>
            {props.decorItem.images.map((eachImage ,i) => 
            <DecorSubImageContainer>
                <Image height="100%" width="100%" src={eachImage} handleOnClick={()=>props.selectedImageHandler(i)}/>
            </DecorSubImageContainer>)}
        </DecorSubImagesContainer>
    </DecorImagesMainContainer>)
}