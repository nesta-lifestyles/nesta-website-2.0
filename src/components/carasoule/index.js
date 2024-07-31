import Carousel  from "react-bootstrap/Carousel";
import React from "react";
import { useState } from "react";
import { Image } from "../../elements/image";
import "./ind.css"
import styled from "styled-components";
import { PrevIndicator } from "../../elements/banner/prev_indicator";
import { NextIndicator } from "../../elements/banner/next_indicator";


/**
 * data format: const data = [
  {
   image: require('./images/image1.jpg'), 
  },
  {
    image:require('./images/image2.jpg'), 
   },
   {
    image:require('./images/image3.jpg'), 
   } 
]
 */

const CarouselContainer = styled.div`
    position: relative;
    width:805px !important;
    height:670px !important;
    max-width: 764px !important;
    max-height: 670px !important;
    z-index: 0;
    @media (max-width:600px){
      width:100% !important;
      height:450px !important;
      overflow: hidden;
      border-radius: 17px;
    } 

`

const ImageContainer =styled.div`
  width: 815px;
  
  @media (max-width:600px){
      width:100% !important;
      max-width:100% !important;
      height:450px !important;
  } 
`


export const LocalCarousel = (props) => {
  // const [currentSlide, setCurrentSlide] = useState(0);

    const [index, setIndex] = useState(props.index);
    const handleNext = () => {
      let nextIndex = index+1
      if(nextIndex === props.data.length) {
        nextIndex= 0
      }
      setIndex(nextIndex);
      props.updateIndex(nextIndex);
    };
  
    const handlePrev = () => {
      let prevIndex = index-1
      if(prevIndex === -1) {
        prevIndex= props.data.length-1
      }
      setIndex(prevIndex);
      props.updateIndex(prevIndex);
    };
  
    // const handleSlideChange = (index) => {
    //   setIndex(index);
    // };
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      props.updateIndex(selectedIndex);
    };

    console.log("ACTIVE INDEX"+props.index)
    return (
      <CarouselContainer>
        <Carousel fade activeIndex={index} onSelect={handleSelect}  interval ="10000" indicators={false} controls={false} >
                    {props.data.map((slide, i) => {
                        return (
                        <Carousel.Item>        
                           <ImageContainer>
                            <Image
                              height={props.height}
                              src={slide}
                              alt="slider image"
                              />
                           </ImageContainer> 
                        </Carousel.Item>
                ) 
              })} 
       </Carousel>
      <div className="carousel-controls left">
                <PrevIndicator onClick={handlePrev} />
      </div>  
      <div className="carousel-controls right">          
        <NextIndicator className="right"  onClick={handleNext} />
      </div>
      </CarouselContainer>
        
    );
}