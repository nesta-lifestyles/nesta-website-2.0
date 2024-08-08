import React, { useState } from "react"
import { NestaDecorHomePage } from "../pages/nesta_decor/decor_home_page"
import { DecoreItemContext } from "../pages/nesta_decor/decor_item_context"
import { DecorItemPage } from "../pages/nesta_decor/decor_item_page"
import { Route, Routes } from "react-router-dom"
import { NestaDecorCartProvider } from "../pages/nesta_decor/decor_basket_context"


export const NestaDecorRoutes = () => {
    const [currentSelectedDecorItem, updateSelectedDecoreItem] = useState(null)
    const updateDecoreItem=(item)=>{
        updateSelectedDecoreItem(item)
    }

    return(
        <DecoreItemContext.Provider value={{currentSelectedDecorItem, updateDecoreItem}}>
            <NestaDecorCartProvider>
                <Routes>
                        <Route path='/decor' Component={NestaDecorHomePage}/>
                        <Route path='/decor/:name' Component={DecorItemPage}/>
                </Routes>
            </NestaDecorCartProvider>
        </DecoreItemContext.Provider>
        )
}