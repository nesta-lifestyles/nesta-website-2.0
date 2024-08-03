import React from "react";
import styled from "styled-components";

const StyledInputTextBox = styled.input`
    width: ${props => props.width === undefined ?"100%":props.width};;
    height: 56px;
    border-radius: 8px;
    fill: Solid #F5F5F5;
    gap: 10px;
    background-color: #F5F5F5;
    padding-left: 24px;
    font-style: Regular;
    font-size: 16px;
    line-height: 24px;
    line-height: 150%;
    align-content: Left;
    border: none;
    vertical-align: top;
    box-sizing: border-box;
    @media (max-width: 600px) {
        width: 100%;
        
   }

    &:focus {
        outline: none;
        /* border: 2px solid black;
        outline: none;
        border-color: #cc0000; */
    }
`


const StyledInputTextBox2 = styled.input`
    width: ${props => props.width === undefined ?"100%":props.width};;
    height: 100%;
    border-radius: 8px;
    fill: Solid black;
    opacity: 0.5;
    background-color: #767676;
    padding-left: 10px;
    font-style: Regular;
    font-size: 16px;
    line-height: 24px;
    line-height: 150%;
    align-content: Left;
    border: none;
    vertical-align: top;
    box-sizing: border-box;
    ::placeholder {
        color: #767676;
        opacity: 1; /* Firefox */
    }

    @media (max-width: 600px) {
        width: 100%;
        
   }

    &:focus {
        outline: none;
        /* border: 2px solid black;
        outline: none;
        border-color: #cc0000; */
    }
`

export const InputTextBox = (props) => {
    return(<StyledInputTextBox width={props.width} placeholder={props.placeholder} onChange={props.onChange} />)
}

export const InputTextBoxEmail = (props) => {
    return(<StyledInputTextBox2 width={props.width} placeholder={props.placeholder} onChange={props.onChange} />)
}