import React from "react"
import styled from "styled-components"
import { WeimarCharacteristics } from "../../components/nesta_ville/weimar/characteristics"
import { BannerComponent } from "../../components/nesta_ville/weimar/banner"
import { GalleryLayout2 } from "../../layouts/gallery_layout"
import { initialSerendiDesignData } from "./data/serendi"

const Container = styled.div`
    /* margin-left: 70px;
    margin-right: 73px; */
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
    } 
`

class NestaDesignSerendi extends React.Component {
    constructor(){
        super();
        this.state = initialSerendiDesignData;
    }

    render(){
        return( 
        <Container>
            <BannerComponent banner={this.state.banner}/>
            <WeimarCharacteristics characteristics={this.state.inspiration}/>
            <div>
                <GalleryLayout2 images={this.state.gallery}/>
                {/* <WhyToChoose whyToChoose={this.state.whyToChoose}/> */}
            </div>
            {/* <MeetAnExpert/> */}
        </Container>)
    }
}

export default NestaDesignSerendi;