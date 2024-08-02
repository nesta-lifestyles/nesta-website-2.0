import React from "react"
import { WeimarCharacteristics } from "../../components/nesta_ville/weimar/characteristics"
import styled from "styled-components"
import { BannerWithTitleLayout } from "../../layouts/banner_layout"
import { BannerComponent } from "../../components/nesta_ville/weimar/banner"
import { initialArcadiaVillaData } from "./data/arcadia"
import MeetAnExpert from "../../components/meet_an_expert"
import { MainContainerDiv } from "../../App"

const Container = styled.div`
    /* margin-left: 70px;
    margin-right: 73px; */
    margin-top: 105px;
    padding:70px;
    display: flex;
    flex-direction: column;
    background-color: white;
    gap: 150px;
    border-radius: 16px;
    @media (max-width:600px){
      padding:20px;
      background-color: white;
      gap: 20px;
    } 
`


class NestaVilleArcadia extends React.Component{
    
    constructor(){
        super();
        this.state = initialArcadiaVillaData;
    }

    render(){
        return( 
        <MainContainerDiv>
            <Container>
                <BannerComponent  banner={this.state.banner}/>
                <WeimarCharacteristics characteristics={this.state.characteristics}/>
                <BannerWithTitleLayout title={this.state.secondaryBanners[0].title} src={this.state.secondaryBanners[0].image} />
                <WeimarCharacteristics characteristics={this.state.comfortAnalysis}/>
                <WeimarCharacteristics characteristics={this.state.temperatureAnalysis}/>
                <BannerWithTitleLayout title={this.state.secondaryBanners[1].title} src={this.state.secondaryBanners[1].image} />
                <MeetAnExpert/>
            </Container>
        </MainContainerDiv>)}
}

export default NestaVilleArcadia