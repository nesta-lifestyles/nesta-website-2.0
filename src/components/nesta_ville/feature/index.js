import React from "react"
import { H1} from "../../../elements/text"
import styled from "styled-components"
import { ImageWithTextWithTitleLayout, TextWithTitleWithImageLayout, TitleTextImageInRowLayout, TitleTextImagesInRowLayout } from "../../../layouts/image_text_widget"
import highEndArchImage from "../../../images/ville/features/1.png"
import highEndArcImgage2 from "../../../images/ville/features/2.jpg"
import efficientEngg from "../../../images/ville/features/3.jpg"
import convAndEaseImage from "../../../images/ville/features/4.png"
import transpereney from "../../../images/ville/features/5.png"
import { BannerWithTitleLayout } from "../../../layouts/banner_layout"

const TitleContainer =styled.div`
     margin: 40px;
     @media (max-width:600px){
        margin: 0px;
    } 
     /* padding-left: 50px;
     height: 40px; */
`

const Container = styled.div`
    position: relative;
    margin: auto;
    width: 100%;
    display: grid;
    place-items: center; 
    align-items: center;
    justify-content: center;
`

const FeatureContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    position: relative;
    
    @media (max-width:600px){
        gap: 20px;
        width: 100%;
        overflow: hidden;
    } 
`

const highEndArchitecturalModelsText= "We offer a range of premium architectural models that capture design excellence. Our meticulously crafted models cater to various project needs, from modern aesthetics to classic charm. Trust us to bring your architectural vision to life with quality and sophistication."

const sustainableArchitecture = {
    "images":[highEndArchImage,highEndArchImage,highEndArchImage],
    "title":"Sustainable Architecture",
    "text":"The Nestaville models integrate climate and temperature considerations to reduce energy consumption, minimize environmental impact, and enhance occupant comfort. This approach demonstrates our commitment to a greener, more resilient future where architecture harmoniously coexists with its surroundings."
}


const convenienceAndEase = {
    "image":convAndEaseImage,
    "title":"Convenience & Ease",
    "text":"From start to finish, Nesta coordinates every engineering stage. You’ll have a few key decisions to make, but then we’ll work with your chosen vendors and assist them through the entire construction."
}

const transperency = {
    "image":transpereney,
    "title":"Transparency",
    "text":"Transparency is paramount in the construction of your home, ensuring you are fully informed and engaged throughout the entire process. From design choices to material selections and construction milestones, we keep you updated every step of the way. This commitment gives you confidence and peace of mind as your dream home takes shape."
}

const EfficiencyEngineering = {
    "image":efficientEngg,
    "title":"Efficient Engineering",
    "text":"Efficiently engineered models represent a harmonious blend of form and function, meticulously designed to optimize space, energy, and materials. These eco-friendly homes offer sustainable living environments with aesthetic appeal, from sleek modern designs to timeless classics. They provide a practical and sustainable way of living for the future."
}

const bannerPage  ={
    "animation_flag":false,
    "image":highEndArcImgage2,
    "title":"Nesta Ville 101"
}

const Divder = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const NestaVilleFeatures = () => {
    return (<Container>
        <TitleContainer><H1 value="Features" color="black" height="40px" width="150px" /></TitleContainer>
        <FeatureContainer>
            <Divder>
                <TextWithTitleWithImageLayout title="High-End Architectural models"  bg_color="black" text={highEndArchitecturalModelsText}
                image={highEndArchImage}/>
                <BannerWithTitleLayout animation_flag={bannerPage.animation_flag} src={bannerPage.image} title={bannerPage.title} />
            </Divder>
            <TitleTextImagesInRowLayout text= {sustainableArchitecture.text} title= {sustainableArchitecture.title} images={sustainableArchitecture.images}/>
            <TitleTextImageInRowLayout title={EfficiencyEngineering.title}  bg_color="black" text={EfficiencyEngineering.text}
            image={EfficiencyEngineering.image}/>
            <TextWithTitleWithImageLayout title={convenienceAndEase.title}  bg_color="black" text={convenienceAndEase.text}
            image={convenienceAndEase.image}/>
            <ImageWithTextWithTitleLayout title={transperency.title}  bg_color="black" text={transperency.text}
            image={transperency.image}/>
        </FeatureContainer>
    </Container>)


}