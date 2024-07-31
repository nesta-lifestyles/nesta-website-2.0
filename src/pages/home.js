import React from 'react';
import bannerImage from '../../src/images/designs/nesta_design_200/OPT1C.png'
import first from '../../src/images/designs/nesta_design_200/OPT1C.png'
import reimage from '../../src/images/designs/reimage.png'
import relaxNestaImage from '../../src/images/designs/nesta_design_102/banner.png'
import { ImageTextWithTitleLayout } from '../layouts/image_text_widget';
import { TextWithTitleImageLayout } from '../layouts/text_image_layout';
import { Banner } from '../components/banner';
import styled from 'styled-components';
import MeetAnExpert from '../components/meet_an_expert';
import Footer from '../components/footer';

const Container = styled.span`
    display: flex;
    flex-direction: column;
    /* margin-left: 75px; */
        padding-left: 75px;
        padding-right: 75px;
        padding-top: 50px;
        padding-bottom: 50px;
    /* background-color: white; */
`

const FooterContainer = styled.span`
    display: flex;
    flex-direction: column;
    /* margin-left: 75px; */
        padding-left: 27px;
        padding-right:27px;
        padding-top: 50px;
        /* padding-bottom: 50px; */
    /* background-color: white; */
`


const GapDiv = styled.div`
    width: 100%;
    height: 120px;
`


class NestaHomePage extends React.Component {
    
    render() {
        return (
            <div>
            <Container>
                    <Banner title="Nestaville - Where Artistry Meets Architecture" src={bannerImage} animationflag = {true} OnPrevIndicatorClick={this.HandlePreviousDesign} onNextIndicatorClick={this.HandleNextDesign}/>
            </Container>
            <Container style={{backgroundColor: "white"}}>
                    <ImageTextWithTitleLayout image={first} title="Uncover your Unique" text="Feeling Lost in Your Style Choices? Let Nesta Guide You to Discover Your Design" />
            </Container>   
            <Container>
                    <TextWithTitleImageLayout title="Reimagine Your Space with Us" text="Discover the Design that Speaks to You and Personalize Your Preferences" image={ reimage} bg_color="revert"/>
            </Container>
            <Container style={{backgroundColor: "white"}}>
                    <ImageTextWithTitleLayout image={relaxNestaImage} title = "Relax. Nesta.Live" text="Ease back as we bring your envisioned design to your doorstep"/>
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
                    <GapDiv />
            <FooterContainer>
                <Footer />
            </FooterContainer>
            </div>
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