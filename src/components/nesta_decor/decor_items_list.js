import styled from "styled-components"
import { NestaDecorItem } from "../../layouts/nesta_decor/decor_item_layout"
import React from "react"
import { DecorItemListFilterLayout } from "../../layouts/nesta_decor/decor_item_list_filter_layout"

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

const DecorItemListViewComponent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 70px;
`

export const NestaDecorItemList = (props) =>{
    return(
    <DecorItemListViewComponent>
    <DecorItemListFilterLayout />
    <DecorItemListContainer>
            {   
                props.decorItems.map((item,i) => 
                    <NestaDecorItem decorItem={item} handleOnDecoreItemSelected={props.onDecorItemClick}/>
                )
            }
    </DecorItemListContainer>
    </DecorItemListViewComponent>
)
}