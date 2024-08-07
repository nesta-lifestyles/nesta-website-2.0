import styled from "styled-components"
import { NestaDecorItem } from "../../layouts/nesta_decor/decor_item_layout"
import React from "react"

const DecorItemListContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    overflow: auto;
    flex-wrap: wrap;
    gap: 80px;
    padding-bottom:10px;
    width: 100%;
`

export const NestaDecorItemList = (props) =>{
    return(<DecorItemListContainer>
            {   
                props.decorItems.map((item,i) => 
                    <NestaDecorItem decorItem={item} handleOnDecoreItemSelected={props.onDecorItemClick}/>
                )
            }
    </DecorItemListContainer>)
}