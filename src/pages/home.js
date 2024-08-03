import React from 'react';
// import bannerImage from '../../src/images/designs/nesta_design_200/OPT1C.png'
import first from '../../src/images/designs/nesta_design_200/OPT1C.avif'
import reimage from '../../src/images/designs/reimage.png'
import relaxNestaImage from '../../src/images/designs/nesta_design_102/banner.avif'
import { ImageTextWithTitleLayout } from '../layouts/image_text_widget';
import { TextWithTitleImageLayout } from '../layouts/text_image_layout';
import { Banner } from '../components/banner';
import styled from 'styled-components';
import MeetAnExpert from '../components/meet_an_expert';

const Container = styled.span`
    display: flex;
    width: 100%;
    height: auto;
    padding-top: 100px;
    padding-bottom: 100px;
    flex-direction: column;
    /* padding-top: 105px; */
    /* background-color: white; */
    padding-left: 90px;
    padding-right: 90px;
    justify-content: center;
    align-items: center;
    @media (max-width:600px){
        display: flex;
        flex-direction: column;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        padding-right: 10px;
        gap: 10px;
    }
`

const MainContainer = styled.div`
    @media (max-width:600px){
        margin-top: 10px;
    }
`



class NestaHomePage extends React.Component {
    
    render() {
        return (
            <MainContainer>
            <Container>
                    <Banner title="Nestaville - Where Artistry Meets Architecture" src={first} animationflag = {true} OnPrevIndicatorClick={this.HandlePreviousDesign} onNextIndicatorClick={this.HandleNextDesign}/>
            </Container>
            <Container style={{backgroundColor: "white"}}>
                    <ImageTextWithTitleLayout bg_color="white" image={first} title="Uncover your Unique" text="Feeling Lost in Your Style Choices? Let Nesta Guide You to Discover Your Design" />
            </Container>   
            <Container>
                    <TextWithTitleImageLayout bg_color="white" title="Reimagine Your Space with Us" text="Discover the Design that Speaks to You and Personalize Your Preferences" image={reimage} />
            </Container>
            <Container style={{backgroundColor: "white"}}>
                    <ImageTextWithTitleLayout bg_color="white" image={relaxNestaImage} title = "Relax. Nesta.Live" text="Ease back as we bring your envisioned design to your doorstep"/>
            </Container>    
            {/* <Container>
            <Layout3 carousel_data = {this.carasoule_data} small_image={this.state.imageArray[2]} 
                    header ="Lorem Ipsum is simply dummy text of the printing" 
                    value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."/>
            </Container> */}
            {/* <Container>
                <TestimonialSliderLayout />
            </Container> */}
            <Container>
                <MeetAnExpert/>
            </Container>
                  
            </MainContainer>
            //     {/* <FullImageLayout image={this.state.imageArray[3]} />
            //     <TextImageLayout text={this.state.textArray[2]} image={this.state.imageArray[4]}/>

            //     <ImageTextLayout image={this.state.imageArray[5]} text={this.state.textArray[3]}/>
            //     <FullImageLayout image={this.state.imageArray[6]} />
            //     <TextImageLayout text={this.state.textArray[4]} image={this.state.imageArray[7]}/>
            //     <ImageTextLayout image={this.state.imageArray[8]} text={this.state.textArray[5]}/>
            //     <FullImageLayout image={this.state.imageArray[9]} />
            //     <ImageTextLayout image={this.state.imageArray[10]} text={this.state.textArray[6]}/>
            //     <TextImageLayout text={this.state.textArray[7]} image={this.state.imageArray[11]}/>
            //     <ImageTextLayout image={this.state.imageArray[12]} text={this.state.textArray[8]}/>
            //     <FullImageLayout image={this.state.imageArray[13]} /> */
            // /* </Container> */}
        );
    }
}
export default NestaHomePage;