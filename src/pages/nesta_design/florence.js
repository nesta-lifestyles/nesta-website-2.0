import React from "react"
import styled from "styled-components"
import { WeimarCharacteristics } from "../../components/nesta_ville/weimar/characteristics"
import { BannerComponent } from "../../components/nesta_ville/weimar/banner"
import { WhyToChoose } from "../../components/nesta_design/why_to_choose"
import { initialContourDesignData } from "./data/contour"
import { GalleryLayout2 } from "../../layouts/gallery_layout"
import { initialEquinoxDesignData } from "./data/equinox"
import { initialFlorenceDesignData } from "./data/florence"
import MeetAnExpert from "../../components/meet_an_expert"

const Container = styled.div`
    margin-top: 105px;
    padding: 70px;
    display: flex;
    flex-direction: column;
    background-color: white;
    gap: 100px;
    border-radius: 16px;
    @media (max-width:600px){
      padding:20px;
      background-color: white;
      gap: 20px;
    } 
`
const DivGap = styled.div`
    @media (max-width:600px){
      display: flex;
      flex-direction: column;
      gap: 20px;
    } 

`

class NestaDesignFlorence extends React.Component {
    constructor(){
        super();
        this.state = initialFlorenceDesignData;
    }

    render(){
        return( 
        <Container>
            <BannerComponent banner={this.state.banner}/>
            <WeimarCharacteristics characteristics={this.state.inspiration}/>
            <DivGap>
                <GalleryLayout2 images={this.state.gallery}/>
                <WhyToChoose whyToChoose={this.state.whyToChoose}/>
            </DivGap>
            {/* <MeetAnExpert/> */}
        </Container>)
    }
}

export default NestaDesignFlorence;