import React from "react"

import { LocalCarousel } from "../../components/carasoule"
import styled from "styled-components"
import { Image } from "../../elements/image"
import { useState } from "react"
import { H1, H2 } from "../../elements/text"

const Container = styled.div`
    margin: auto;
    width: 100%;
    /* display: grid; */
    place-items: center; 
    align-items: center;
    justify-content: center;
`

const CarasoleContainer = styled.div`
    max-height: 450px;
    
`

const GalleryTitleContainer = styled.div`
    margin: auto;
    /* padding-left: 350px; */
    padding-bottom: 30px;
`

const GalleryTitleContainer2 = styled.div`
   width: 100%;
   text-align: left;
    /* padding-left: 350px; */
    padding-bottom: 30px;
`

const GalleryLayoutContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    gap: 30px;
    @media (max-width:600px){
        flex-direction: column;
        gap:10px;
        height: 640px;
        width: 100%;
        margin-bottom: 10px;
    } 
`
const ImagesLayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media (max-width:600px){
        flex-direction: row;
        justify-content: flex-start;
        gap:10px;
    }
`

const SecondImagesLayoutContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    @media (max-width:600px){
        flex-direction: row;
        gap:10px;
        
    }

`

const ImageContainer = styled.div`
    border-radius: 16px;
    transition: transform 3s;
    height: max-content;
    max-height: fit-content;
    border-collapse: collapse;
    overflow: hidden;   
    border-collapse: collapse;
    @media (max-width:600px){
        display: flex;
        /* width: 150px; */
        /* height: 150px;
        max-width: 100%; */
    }
`



const FirstImageContainer = styled.div`
    border-radius: 16px;
    transition: transform 3s;
    height: max-content;
    max-height: fit-content;
    border-collapse: collapse;
    height: 194px;
    width: 412px;
    overflow: hidden;   
    border-collapse: collapse;
    cursor: pointer;
    @media (max-width:600px){
        height: 150px;
        
        max-width: auto;
    }

`

const FirstImageContainer2 = styled.div`
    border-radius: 16px;
    transition: transform 3s;
    height: max-content;
    max-height: fit-content;
    border-collapse: collapse;
    height: 252px;
    overflow: hidden;   
    border-collapse: collapse;
    cursor: pointer;
    @media (max-width:600px){
        height: 150px;
        max-width: auto;
    }
`



const ThirdImageContainer = styled.div`
    border-radius: 16px;
    transition: transform 3s;
    height: max-content;
    max-height: fit-content;
    border-collapse: collapse;
    height: 312px;
    overflow: hidden;   
    border-collapse: collapse;
    cursor: pointer;
    @media (max-width:600px){
        height: 150px;
        max-width: auto;
    }
`

const ThirdImageContainer2 = styled.div`
    border-radius: 16px;
    transition: transform 3s;
    height: max-content;
    max-height: fit-content;
    border-collapse: collapse;
    height: 252px;
    overflow: hidden;   
    border-collapse: collapse;
    cursor: pointer;
    @media (max-width:600px){
        height: 150px;
        max-width: auto;
    }
`



export const GalleryLayout = (props) =>{
    const [activeIndex, updateActiveIndex] = useState(1)
    
    const updateActiveIndexValue = (index) =>{
        updateActiveIndex(index)
    }

    const getFirstImage = ()=> {
        let firstImage = document.getElementById("first_image");
        if(firstImage && activeIndex===0) {
            firstImage.style.boxShadow = '10px 10px 20px rgba(36, 36, 36, 0.5)';
            firstImage.style.border = '2px solid #DCDCDC'
        } else {
                if(firstImage){
                    console.log("firstImage Style"+firstImage)
                    firstImage.style.boxShadow='none'; 
                    firstImage.style.border='none'; 
                }
        }

        return (
            <FirstImageContainer id="first_image" onClick={() => updateActiveIndexValue(0)}>
                <Image 
                    height= "194px"
                    src={props.images[0]}
                    alt="slider image"
                    id="first_image"
                />
            </FirstImageContainer>
        )
    }

    const getSecondImage = ()=> {
        let secondImage = document.getElementById("second_image")
        if(activeIndex===1 && secondImage) {
            secondImage.style.boxShadow = '2px 10px 20px rgba(36, 36, 36, 0.5)'
            secondImage.style.border = '2px solid #DCDCDC'
        } else if(secondImage){
            secondImage.style.boxShadow='none'; 
            secondImage.style.border = 'none'
        }

        return (
            <ThirdImageContainer  id="second_image" onClick={() => updateActiveIndexValue(1)}>
                        <Image  width= "100%"
                        height= "312px"
                        src={props.images[1]}
                        alt="slider image"
                        />
            </ThirdImageContainer>
            )
    }
    
    const getThirdImage = ()=> {
        let thirdImage = document.getElementById("third_image");
        if(activeIndex===2 && thirdImage) {
            thirdImage.style.boxShadow='10px 10px 20px rgba(36, 36, 36, 0.5)'; 
            thirdImage.style.border = '2px solid #DCDCDC'    
        } else if(thirdImage){
            thirdImage.style.boxShadow='none'; 
            thirdImage.style.border='none';
        }

        return (
            <ThirdImageContainer  id="third_image" onClick={() => updateActiveIndexValue(2)}>
                <Image  width= "100%"
            height= "312px"
            src={props.images[2]}
            alt="slider image"
            />
            </ThirdImageContainer>)
    }

    return(<Container>
        <GalleryTitleContainer><H1 value="Gallery" color="black" width="150px"  height="auto"/> </GalleryTitleContainer>
        <GalleryLayoutContainer>
            <CarasoleContainer> 
                <LocalCarousel width="765px" height="537px" data={props.images} index={activeIndex} updateIndex={updateActiveIndex}/>
            </CarasoleContainer>
            <ImagesLayoutContainer>
                <ImageContainer>
                        {getFirstImage()}
                </ImageContainer>
                <SecondImagesLayoutContainer>
                        {/* {getFirstImage()} */}
                        {getSecondImage()}
                        {getThirdImage()}
                </SecondImagesLayoutContainer>
            </ImagesLayoutContainer>
        </GalleryLayoutContainer>
    </Container>)
}


export const GalleryLayout2 = (props) =>{
    const [activeIndex, updateActiveIndex] = useState(1)
    
    const updateActiveIndexValue = (index) =>{
        updateActiveIndex(index)
    }

    const getFirstImage = ()=> {
        let firstImage = document.getElementById("first_image");
        if(activeIndex===0) {
            firstImage.style.boxShadow = '10px 10px 20px rgba(36, 36, 36, 0.5)';
            firstImage.style.border = '2px solid #DCDCDC'
        } else {
                if(firstImage){
                    console.log("firstImage Style"+firstImage.style)
                    firstImage.style.boxShadow='none'; 
                    firstImage.style.border='none'; 
                }
        }

        return (
            <FirstImageContainer2 id="first_image" onClick={() => updateActiveIndexValue(0)}>
                <Image  width= "412px"
                height= "252px"
                src={props.images[0]}
                alt="slider image"
                id="first_image"
                />
            </FirstImageContainer2>
        )
    }

    const getSecondImage = ()=> {
        let secondImage = document.getElementById("second_image")
        if(activeIndex===1 && secondImage) {
            secondImage.style.boxShadow = '2px 10px 20px rgba(36, 36, 36, 0.5)'
            secondImage.style.border = '2px solid #DCDCDC'
        } else if(secondImage){
            secondImage.style.boxShadow='none'; 
            secondImage.style.border = 'none'
        }

        return (
            <ThirdImageContainer2  id="second_image" onClick={() => updateActiveIndexValue(1)}>
                        <Image  width= "412px"
                        height= "252px"
                        src={props.images[1]}
                        alt="slider image"
                        />
            </ThirdImageContainer2>
            )
    }

    return(<Container>
        <GalleryTitleContainer2><H2 value="Gallery" color="black" width="150px"  height="auto"/> </GalleryTitleContainer2>
        <GalleryLayoutContainer>
            <LocalCarousel width="765px" height="537px" data={props.images} index={activeIndex} updateIndex={updateActiveIndex}/>
            <ImagesLayoutContainer>
                {getFirstImage()}
                {getSecondImage()}
            </ImagesLayoutContainer>
        </GalleryLayoutContainer>
    </Container>)
}