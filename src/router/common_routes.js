import { Route, Routes } from "react-router-dom"
import { ContactUsPage } from "../pages/contact_us"
import { ContactAnExpertPage } from "../pages/contact_an_expert"
import { ScheduleCallAgent } from "../pages/contact_us/schedule_call"
import React from "react"
import NestaHomePage from "../pages/nesta_ville/home_page"


export const CommonRoutes = ()=>{
    return(<Routes>
                    <Route path='/' Component={NestaHomePage} />
                    <Route path='/contact-us' Component={ContactUsPage} />
                    <Route path='/contact-an-expert' Component={ContactAnExpertPage} />
                    <Route path='/schduler-call-with-an-expert' Component={ScheduleCallAgent} />
            </Routes>)
}