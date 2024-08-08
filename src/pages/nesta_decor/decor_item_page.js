
import styled from "styled-components"
import { MainContainerDiv } from "../../App"
import { DecorItemInfo } from "../../components/nesta_decor/decor_item_info"
import { H2, Text } from "../../elements/text"
import { NestaDecorData } from "./data/decor_data"
import React, { useContext } from "react"
import { DecorImageComponent } from "../../components/nesta_decor/decor_item_images"
import MeetAnExpert from "../../components/meet_an_expert"
import { DecoreItemContext } from "./decor_item_context"

const Container = styled.div`
/* margin-left: 70px;
margin-right: 73px; */
/* margin-top: 105px; */
padding: 70px;
display: flex;
flex-direction: column;
background-color: white;
gap: 100px;
border-radius: 16px;
@media (max-width:600px){
  padding:20px;
  background-color: white;
}`



const FirstHalfContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width:600px){
        flex-direction: column;
    }
    /* border-bottom-width: 5px; */
`

const LeftContainer = styled.div`
    padding-bottom: 90px;
    padding-right: 120px;
    border-bottom: 2px;
    border-bottom-style: solid;
    border-bottom-color: #F5F5F5;
`

const SecondHalfContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 40px;
    text-align: left;
`

const TextContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
    text-align: left;
`


export const DecorItemPage =(props) => {
    const { currentSelectedDecorItem } = useContext(DecoreItemContext);
    console.log("CURRENT SELECTED DECORE ITEM"+JSON.stringify(currentSelectedDecorItem))
    return(<MainContainerDiv>
            <Container>
                <FirstHalfContainer>
                   <LeftContainer>
                        <DecorImageComponent  decorItem = {currentSelectedDecorItem}  />
                    </LeftContainer> 
                    <DecorItemInfo decorItem = {currentSelectedDecorItem} />
                </FirstHalfContainer>
                <SecondHalfContainer>
                    <H2 value="Description" height="20px" width="100%"/>
                    <TextContainer>
                        {currentSelectedDecorItem.description.map((eachSentence , i) => <Text value={eachSentence}  height="auto" width="100%"/>)}
                    </TextContainer>
                </SecondHalfContainer>
                <MeetAnExpert meetAnExpert={NestaDecorData.meetAnExpert}/>
            </Container>
        </MainContainerDiv>)
}