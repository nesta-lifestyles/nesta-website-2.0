import React from "react"
import { WeimarCharacteristics } from "../../components/nesta_ville/weimar/characteristics"
import styled from "styled-components"
import { BannerWithTitleLayout } from "../../layouts/banner_layout"
import { BannerComponent } from "../../components/nesta_ville/weimar/banner"
import { initialClassicaVillaData } from "./data/classica"

const Container = styled.div`
    /* margin-left: 70px;
    margin-right: 73px; */
    margin-top: 105px;
    border-radius: 16px;
    padding:70px;
    display: flex;
    flex-direction: column;
    background-color: white;
    gap: 150px;
    @media (max-width:600px){
      padding:20px;
      background-color: white;
      gap: 20px;
    } 
`

class NestaVilleClassica extends React.Component{
    
    constructor(){
        super();
        this.state = initialClassicaVillaData;
    }

    render(){
        return( 
        <Container>
            <BannerComponent  banner={this.state.banner}/>
            <WeimarCharacteristics characteristics={this.state.characteristics}/>
            <BannerWithTitleLayout title={this.state.secondaryBanners[0].title} src={this.state.secondaryBanners[0].image} />
            <WeimarCharacteristics characteristics={this.state.comfortAnalysis}/>
            <WeimarCharacteristics characteristics={this.state.temperatureAnalysis}/>
            <BannerWithTitleLayout title={this.state.secondaryBanners[1].title} src={this.state.secondaryBanners[1].image} />
        </Container>)}
}

export default NestaVilleClassica