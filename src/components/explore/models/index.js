import React from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

const ExploreComponent = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    min-height: 396px;
    width: 572px;
    align-items: start;
    padding: 80px 80px 35px 38px;
    border-radius: 20px;
    background-color: black;
    @media (max-width: 991px) {
        padding: 0 20px;
        width: 100%;
    }
`

const Button = styled.div`
    position: relative;
    border-radius: 8px;
    margin-top: 24px;
    color: var(--Secondary-C4, #fff);
    padding: 16px 24px;
    font: 400 14px/150% Poppins, sans-serif;
    border: 1px solid rgba(255, 255, 255, 1);
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;
    @media (max-width:600px){
      width: 140px;
      height: 53px;
      margin: 10px;
      margin-left: 0px;
      font: 400 12px/150% Poppins, sans-serif;
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

const TextContainer = styled.div`
    position: relative;
    color: #fff;
    text-transform: capitalize;
    margin-top: 140px;
    font-size: 20px;
    font-weight: 600;
    /* font: 600 20px Poppins, sans-serif; */
    @media (max-width: 991px) {
       height: 100%;
       text-align: end;
       margin-top:80%;
       font-size: 16px;
    }
`

const StyledImage = styled.img`
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0.75;
    ${Button}:hover, ${TextContainer}:hover{
        transition: 0.35s;
        transform: scale(1.05);
        opacity: 1.0;
    }
    @media (max-width: 991px) {
       
    }
`





export const ExploreModels = (props) => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        console.log("CLICKED ON EXPLORE MODELS")
        navigate(props.model.path)
    };

    return (<ExploreComponent key={props.model.title} >
                <StyledImage className="onHover" loading="lazy" srcSet={props.model.image}  />
                <TextContainer>{props.model.title}</TextContainer>
                <Button onClick={handleClick}>Explore Models</Button>
            </ExploreComponent>)
}