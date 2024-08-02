import React from "react";
import styled from "styled-components";
import { ExploreModelsLayout } from "../../layouts/explore_models_layout";
import { GalleryLayout } from "../../layouts/gallery_layout";
import MeetAnExpert from "../../components/meet_an_expert";
import { BannerLayout } from "../../layouts/banner_layout";
import { NestaVilleFeatures } from "../../components/nesta_ville/feature";
import { NestavilleHomePageData } from "./data/home";
import { ContactAnExpertPage } from "../contact_an_expert";
import { Overlay } from "react-bootstrap";
import { ScheduleCallAgent } from "../contact_us/schedule_call";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { SendUsAMessage } from "../contact_us/send_us_message";
import { ProductInformation } from "../../components/navbar/nav_bar_content";
import { MainContainerDiv } from "../../App";

const Container = styled.div`
    /* margin-left: 70px;
    margin-right: 73px; */
    position: relative;
    margin-top: 105px;
    padding:70px;
    display: flex;
    flex-direction: column;
    background-color: white;
    gap: 150px;
    border-radius: 16px;
    scroll-behavior: inherit;
    @media (max-width:600px){
      padding:20px;
      background-color: white;
      gap:50px;
    } 
`
const HandlePreviousDesign = (props) => {
    console.log("Previous Indicator Button clicked...!")
}   

const HandleNextDesign = (props) => {
    console.log("Handle Next Indicator Button clicked...!")
}


class NestaVilleHomePage extends React.Component{
    
    constructor(props) {
        super(props);
        this.section1Ref = React.createRef();
        this.state={
            showOverlay:false,
            currentOverlay:'overlay1'
        }
    }

    updateOverlayState = () => {
        console.log("Before us clicked..."+this.state.showOverlay)
        
        this.setState({ 
            showOverlay: !this.state.showOverlay,
            currentOverlay:'overlay1'
        })
       
    }

    scrollToSection = (sectionRef, sectionId) => {
        window.history.pushState(null, null, `#${sectionId}`);
        console.log("SCROLL TO SECTIONS"+sectionRef)
        window.scrollTo({
            top: sectionRef.current.offsetTop,
            behavior: 'smooth',
        });
    };

   render(){ 
        const contactUsHandler = (props) => {
            this.updateOverlayState();
            console.log("After us clicked..."+this.state.showOverlay)
            if(!this.state.showOverlay){
                    document.body.classList.add('no-scroll')
            } else {
                document.body.classList.remove('no-scroll')
            }
        }

        const switchOverlay = (overlay) => {
            console.log("SWITCH OVERLAY CALLED")
            window.history.pushState(null, null, `#some`);
            this.setState({ 
                currentOverlay: overlay
            })
        };

        return(<MainContainerDiv >
            <Container id="main_container">
                    <BannerLayout title={NestavilleHomePageData.banner.banner_title} src={NestavilleHomePageData.banner.image} animationflag ={true} OnPrevIndicatorClick={HandlePreviousDesign} onNextIndicatorClick={HandleNextDesign}
                    contactUsHandler={contactUsHandler} KnowMoreHandler={() => this.scrollToSection(this.section1Ref, "models")}/>
                    <div ref={this.section1Ref}>
                        <ExploreModelsLayout models={ProductInformation}/>
                    </div>
                    {/* <ProcessLayout/> */}
                    <NestaVilleFeatures />
                    <GalleryLayout images={NestavilleHomePageData.gallery}></GalleryLayout>
                    <MeetAnExpert/>
                    <TransitionGroup>
                {this.state.currentOverlay === 'overlay1' && (
                    
                    <CSSTransition
                        key="overlay1"
                        timeout={500}
                        classNames="overlay"
                    >
                        <Overlay show={this.state.showOverlay} placement="auto" transition={true}>
                                 <ContactAnExpertPage  updateOverlayState={contactUsHandler} onSwitch={switchOverlay}/>
                                {/* <ScheduleCallAgent  updateOverlayState={contactUsHandler}/> */}
                            </Overlay>
                        {/* <Overlay1 onSwitch={switchOverlay} /> */}
                    </CSSTransition>
                )}

                {this.state.currentOverlay === 'overlay2' && (
                    <CSSTransition
                        key="overlay2"
                        timeout={500}
                        classNames="overlay"
                    >
                    <Overlay show={this.state.showOverlay} placement="auto" transition={true}>
                        {/* <ContactAnExpertPage  updateOverlayState={contactUsHandler}/> */}
                        <ScheduleCallAgent  updateOverlayState={contactUsHandler}/>
                    </Overlay>
                    </CSSTransition>)}
                
                    {this.state.currentOverlay === 'overlay3' && (
                    <CSSTransition
                        key="overlay3"
                        timeout={500}
                        classNames="overlay"
                    >
                    <Overlay show={this.state.showOverlay} placement="auto" transition={true}>
                        {/* <ContactAnExpertPage  updateOverlayState={contactUsHandler}/> */}
                        <SendUsAMessage  updateOverlayState={contactUsHandler}/>
                    </Overlay>
                    </CSSTransition>)}
                    </TransitionGroup>
            </Container>
    </MainContainerDiv>)
}
}

export default NestaVilleHomePage