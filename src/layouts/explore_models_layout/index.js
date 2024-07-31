import styled from "styled-components"
import { ExploreModels } from "../../components/explore/models"
import React from "react"
import { useState } from "react"

const ExploreModelsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 60px;
    @media (max-width:600px){
      flex-direction: column;
    } 
`

const ExploreModelsColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
`

const ButtonContainer = styled.div`
    margin: auto;
    position: relative;
    width: 160px;
    padding-right: 350px;
    @media (max-width: 991px) {
        padding-right: 40px;
    } 
`

const Button = styled.div`
    position: relative;
    border-radius: 8px;
    color: black;
    width: 160px;
    height: auto;
    padding: 16px 24px;
    font: 400 14px/150% Poppins, sans-serif;
    border: 1px solid black;
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;
    margin:24px;
    @media (max-width: 991px) {
        
    }

    &:hover{
        transition: 0.35s;
        /* transform: scale(1.05); */
        font-weight: 500;
        text-decoration: dashed;
        opacity: 1.0;
        box-shadow: 10px 10px 20px rgba(36, 36, 36, 0.5); 
    }
    
    &:active{
        transform: scale(0.95);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
`
/**
 * 
 * @returns 
 *  [
 *  {
 *      image:"",
 *      title:"",
 *      desciption:"",
 *      path:"",            
 *  }
 *  ]
 */





export const ExploreModelsLayout = (props) => {
    console.log("PROPS"+JSON.stringify(props.reff))
    const all = "View all model"
    const less = "View less model"
    const [isDisabled, setIsDisabled] = useState(false);
    const [buttonTitle, setButtonTitle] = useState("View all model")
    const toggleEnable = () => {
        setIsDisabled(prevState => !prevState);
        if(buttonTitle==all) {
            setButtonTitle(less)
        } else {
            setButtonTitle(all)
        }
    };
    

    const getExploreModels = (props) => {
        const leftSideExploreModels = []
        const rightSideExploreModels = []
        
        for(let i=0;i<props.models.length;i++) {
            if(!isDisabled && i<2) {
                if(i%2==0) {
                    rightSideExploreModels.push(<ExploreModels model={props.models[i]} key={i} />)
                } else {
                    leftSideExploreModels.push(<ExploreModels model={props.models[i]} key={i}/>)
                }
            } else if(isDisabled) {
                if(i%2==0) {
                    rightSideExploreModels.push(<ExploreModels model={props.models[i]} key={i} />)
                } else {
                    leftSideExploreModels.push(<ExploreModels model={props.models[i]} key={i}/>)
                }
            }
        }
        return {leftSideExploreModels, rightSideExploreModels}
    }
    

    const {leftSideExploreModels, rightSideExploreModels} =  getExploreModels(props)
    return(
        <div ref={props.reff}>
            <ExploreModelsContainer>
                <ExploreModelsColumnContainer>{rightSideExploreModels}</ExploreModelsColumnContainer>
                <ExploreModelsColumnContainer>{leftSideExploreModels}</ExploreModelsColumnContainer>
            </ExploreModelsContainer>
            <ButtonContainer>
                <Button onClick={toggleEnable}>{buttonTitle}</Button>
            </ButtonContainer>
            
        </div>
    )
}