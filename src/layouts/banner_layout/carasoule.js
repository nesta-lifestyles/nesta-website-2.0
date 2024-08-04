import React from "react"
import firstImage from "../../images/banner/3.avif"
import second from "../../images/ville/203/banner.avif"
import third from "../../images/ville/200/banner.avif"
import { Carousel } from "react-bootstrap"
import { BannerImage} from "../../elements/image"
import { Title } from "../../components/banner/title"


const images = [firstImage, second, third]


/**
 * banner_data:[{  
 *    image:"",
 *    title:{
 *      normal:{
 *        value:"",
 *        color:""
 *       },
 *      highlight:{
 *        value:"",
 *        color:""
 *        } 
 *    }
 * }]
 */

const Titles = ["Nestaville1", "NestaDesign2", "Nestaville23"]
const ColorCodes = ["#FFA652", "#7A7369", "#658354"]

export const CarouselLocal = () => {
    return(<Carousel fade interval ="1000" indicators={false} controls={false} pause={false} >
        {images.map((slide, i) => {
            return (
            <Carousel.Item>        
               {/* <ImageContainer> */}
                <BannerImage
                  height="100%"
                  width="100%"
                  src={slide}
                  alt="slider image"
                  />
                  <Title animationflag = {false} title={Titles[i]} color_codes={ColorCodes[i]}/>  
               {/* </ImageContainer>  */}
            </Carousel.Item>
    ) 
  })} 
</Carousel>)
}