import { H1, H2,  Text } from "../../elements/text"
import React from 'react';
import styled from "styled-components";
import { ImageInRow, SideImage } from "../../elements/image";

const ImageTextTag = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
    height: 100%;
    justify-content: center;
    align-items: center;
    /* overflow: hidden; */
    /* border-radius: 17px; */
    background-color: ${props => props.bg_color === undefined?"#F5F5F5":"white"};
    @media (max-width:600px){
        display: flex;
        width: 100%;
        flex-direction: column-reverse;
        margin-top: 10px;
        gap: 10px;
    }
` 

const TextImageTag = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
    height: 100%;
    justify-content: center;
    align-items: center;
    /* overflow: hidden; */
    border-radius: 17px;
    background-color: ${props => props.bg_color === undefined?"#F5F5F5":"white"};
    @media (max-width:600px){
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        margin-top: 10px;
        gap: 10px;
    }
` 

const ImageContainer = styled.div`
    width: 100%;
    height: 396px;
    /* max-width: 500px; */
    flex:1;
    @media (max-width:600px){
        width: 100%;
        max-height: 100%;
        height: 396px;
        max-width: 100%;
        display: flex;
        flex-direction: column;
    }
`

const TextContainer = styled.div`
    width:649px;
    height:auto;
    gap: 10px;
    display: flex;
    flex-direction: column;
    text-align: start;
    align-items: start;
    @media (max-width:600px){
        width:100%;
        gap: 1px;
        max-width: 100%;
        overflow: inherit;
    }
`

const ColumnContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: start; 
   
    
`

const RowContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap:40px;
    @media (max-width:600px){
        flex-direction: column;
        gap: 10px;
    }
    
`

const BannerContainer = styled.div`

`


export const ImageTextLayout = (props) => {
    return(
        <>
        <ImageTextTag bg_color={props.bg_color}>
                <ImageContainer>
                    <SideImage srcSet={props.image} />
                </ImageContainer>
                <TextContainer>
                    <Text value={props.text} />
                </TextContainer>
        </ImageTextTag>
        </>
    )
}


export const ImageTextWithTitleLayout = (props) => {
    return(
        <ImageTextTag bg_color={props.bg_color}>
                <ImageContainer>
                    <SideImage srcSet={props.image} />
                </ImageContainer>
                <TextContainer>
                    <H1 value={props.title} color="black" width= "100%" height="auto"></H1>
                    <Text value={props.text}  width= "100%" height="100%"/>
                </TextContainer>
        </ImageTextTag>
    )
}

export const TextWithTitleWithImageLayout = (props) =>{
    return(
            <TextImageTag  bg_color={props.bg_color}>
                <TextContainer>
                    <H2 value={props.title} color="black" width= "100%" height="auto" weight="600"></H2>
                    <Text value={props.text} width= "100%" height="100%"/>
                </TextContainer>
                <ImageContainer>
                    <SideImage srcSet={props.image} />
                </ImageContainer>
            </TextImageTag>
        
    )
}

export const ImageWithTextWithTitleLayout = (props) =>{
    return(
        <>
            <ImageTextTag  bg_color={props.bg_color}>
                <ImageContainer>
                    <SideImage srcSet={props.image} />
                </ImageContainer>
                <TextContainer>
                    <H2 value={props.title} color="black" width= "649px" height="auto" weight="600"></H2>
                    <Text value={props.text} height="100%" width= "100%"  />
                </TextContainer>
            </ImageTextTag>
        </>
    )
}

export const TextWithImageLayout = (props) =>{
    return(
        <>
            <ImageTextTag  bg_color={props.bg_color}>
                <TextContainer>
                    <Text value={props.text} />
                </TextContainer>
                <ImageContainer>
                    <SideImage srcSet={props.image} />
                    <SideImage srcSet={props.image} />
                    <SideImage srcSet={props.image} />
                </ImageContainer>
            </ImageTextTag>
        </>
    )
}

export const TitleTextImagesInRowLayout = (props) => {
    return(
        <>
            <ColumnContainer>
                <H2 value={props.title} color="black" width= "300px" height="auto" weight="600"></H2>
                <Text value={props.text} width="100%" height="auto" />
                <RowContainer>
                    <ImageInRow srcSet={props.images[0]} />
                    <ImageInRow srcSet={props.images[1]} />
                    <ImageInRow srcSet={props.images[2]} />
                </RowContainer>   
            </ColumnContainer>
        </>
    )
}

export const TitleTextImageInRowLayout = (props) => {
    return(
        <>
            <ColumnContainer>
                <H2 value={props.title} color="black" width= "649px" height="auto" weight="600"></H2>
                <Text value={props.text} width="100%" height="auto" />
                <SideImage srcSet={props.image} />
            </ColumnContainer>
        </>
    )
}

/**
 * 
 * 
 * TODO: how to set to Background 
 */
export const BannerPageWithTitleLayout = (props) => {
    return(
        <>
           <BannerContainer></BannerContainer>
        </>
    )
}



