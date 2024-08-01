import React from "react";
import styled from "styled-components";
import { ExploreModelsLayout } from "../../layouts/explore_models_layout";
import { NestaDesignInformation } from "../../components/navbar/nav_bar_content";
import { GalleryLayout } from "../../layouts/gallery_layout";
import { BannerLayout } from "../../layouts/banner_layout";
import { NestaDesignHomePageData } from "./data/home";
import { ProcessLayout } from "../../layouts/process_layout";
import MeetAnExpert from "../../components/meet_an_expert";

const Container = styled.div`
    /* margin-left: 70px;
    margin-right: 73px; */
    margin-top: 105px;
    padding: 70px;
    display: flex;
    flex-direction: column;
    background-color: white;
    gap: 150px;
    border-radius: 16px;
    @media (max-width:600px){
      padding:20px;
      background-color: white;
    } 
`

const HandlePreviousDesign = (props) => {
    console.log("Previous Indicator Button clicked...!")
}   

const HandleNextDesign = (props) => {
    console.log("Handle Next Indicator Button clicked...!")
}


export const NestaDesignHomePage = () => {
    return(<>
            <Container>
                    <BannerLayout title={NestaDesignHomePageData.banner.banner_title} src={NestaDesignHomePageData.banner.image} animationflag ={true} OnPrevIndicatorClick={HandlePreviousDesign} onNextIndicatorClick={HandleNextDesign}/>
                    <ExploreModelsLayout models={NestaDesignInformation}/>
                    <ProcessLayout/>
                   <GalleryLayout images={NestaDesignHomePageData.gallery}></GalleryLayout>
                   <MeetAnExpert/>
            </Container>
        </>)

}