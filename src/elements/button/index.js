import React from 'react';
import styled from "styled-components"

const StyledButton = styled.button`
    width: ${props => props.width === undefined ?"126px":props.width};
    height: ${props => props.height === undefined?"53px":props.height};
    max-width: ${props => props.width === undefined ?"126px":props.width};
    max-height: ${props => props.height === undefined?"53px":props.height};
    font-weight: 400;
    font-size: 14px;
    font-style: normal;
    line-height: 150%;
    background: #1B1E1E;
    cursor: auto;
    color: white;
    border-radius: 8px;
`

const StyledWhiteButton = styled.button`
    width: ${props => props.width === undefined ?"126px":props.width};
    height: ${props => props.height === undefined?"53px":props.height};
    max-width: ${props => props.width === undefined ?"126px":props.width};
    max-height: ${props => props.height === undefined?"53px":props.height};
    font-weight: 400;
    font-size: 14px;
    font-style: normal;
    line-height: 150%;
    background: #FFFFFF;
    cursor: auto;
    color: white;
    border-radius: 8px;
    gap: 10px;
    border-color: #FFFFFF;
`

const StyledRevertButton = styled.button`
    width: ${props => props.width === undefined ?"126px":props.width};
    height: ${props => props.height === undefined?"53px":props.height};
    max-width: ${props => props.width === undefined ?"126px":props.width};
    max-height: ${props => props.height === undefined?"53px":props.height};
    font-weight: 400;
    font-size: 14px;
    font-style: normal;
    line-height: 150%;
    background: #1B1E1E;
    cursor: auto;
    color: white;
    border-radius: 8px;
    gap: 10px;
    border-color: #FFFFFF;
`

const Text =styled.div`
    size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #1B1E1E;
`
const WhiteText =styled.div`
size: 14px;
font-weight: 400;
line-height: 21px;
color: #FFFFFF;
`

export const RevertButton = (props) => {
    return <StyledRevertButton width={props.width} height={props.height} onClick={props.OnClick}> <WhiteText>{props.value}</WhiteText></StyledRevertButton>
}

export const WhiteButton = (props) => {
    return <StyledWhiteButton width={props.width} height={props.height} onClick={props.OnClick}> <Text>{props.value} </Text></StyledWhiteButton>
}


export const Button = (props)=> {
    console.log("ONCLICK"+props.onClick)
    return <StyledButton width={props.width} height={props.height} onClick={props.OnClick}> {props.value} </StyledButton>
}
