import './App.css';
import Navbar from './components/navbar';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import NestaHomePage from './pages/home';
import { NestaDesignHomePage } from './pages/nesta_design/nesta_design';

import NestaDesignFlorence from './pages/nesta_design/florence';
import NestaDesignContour from './pages/nesta_design/contour';
import NestaDesignSerendi from './pages/nesta_design/serendi';
import NestaDesignEquinox from './pages/nesta_design/equinox';
import ScrollToTop from './router/hooks';
import NestaVilleClassica from './pages/nesta_ville/classica';
import NestaVilleHomePage from './pages/nesta_ville/home_page';
import NestaVilleArcadia from './pages/nesta_ville/arcadia';
import NestaVilleEvoque from './pages/nesta_ville/evoque';
import NestaVilleEssence from './pages/nesta_ville/essence';
import NestaVilleWeimar from './pages/nesta_ville/weimar';
import { ContactUsPage } from './pages/contact_us';
import {  ContactAnExpertPage } from './pages/contact_an_expert';
import { ScheduleCallAgent } from './pages/contact_us/schedule_call';
import Footer from './components/footer';
import { OverlayScreen } from './components/overlay';
import { NestaDecorHomePage } from './pages/nesta_decor/decor_home_page';
import { DecorItemPage } from './pages/nesta_decor/decor_item_page';
import { DecoreItemContext } from './pages/nesta_decor/decor_item_context';

const EntirePageContainer = styled.div`
    /* padding-left: 44px;
    padding-right: 44px;
    z-index: 1;
    height: 100%;
    background-color:white;
    @media (max-width:600px){
      padding-left: 0px;
      padding-right: 0px;
      padding-top: 0px;
      background-color: white;
    } */
`

export const MainContainerDiv = styled.div`
  margin-left: 70px;
  margin-right: 73px;
  @media (max-width:600px){
      margin-left: 0px;
      margin-right: 0px;
  }
`

const ContentContainer = styled.div`
    /* margin-left: 70px;
    margin-right: 73px; */
    display: flex;
    flex-direction: column;
    gap: 100px;
    @media (max-width:600px){
      margin-left: 0px;
      margin-right: 0px;
      padding-top: 0px;
      background-color: white;
    } 

    /* height: 100%;
    margin-top: 100px;
    padding-top: 44px;
    padding-left: 72px;
    padding-right: 72px;
    background-color: white;
    border-radius: 16px;
    
    z-index: 1;
    @media (max-width:600px){
      margin-top: 100px;
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 0px;
      background-color: white;
    } */
`

function App() {

  const [currentSelectedDecorItem, updateSelectedDecoreItem] = useState(null)
  const updateDecoreItem=(item)=>{
    console.log("APP updateDecoreItem"+JSON.stringify(item))
    updateSelectedDecoreItem(item)
}

  return (
    <div className="App">
      <React.StrictMode>

       <EntirePageContainer>
        <DecoreItemContext.Provider value={{currentSelectedDecorItem, updateDecoreItem}}>
        <Router>
        <Navbar/>
       <ContentContainer>
        <OverlayScreen />
        <ScrollToTop/>

        <Routes> 
              <Route path='/' Component={NestaHomePage} />
              <Route path='/decor' Component={NestaDecorHomePage}/>
              <Route path='/decor/:name' Component={DecorItemPage}/>
              <Route path='/design'  Component={NestaDesignHomePage} />
              <Route path='/ville'  Component={NestaVilleHomePage} />
              <Route path='/design/home' Component={NestaDesignHomePage} />
              <Route path='/ville/home' Component={NestaVilleHomePage} />
              <Route path='/design/equinox' Component={NestaDesignEquinox} />
              <Route path='/design/serendi' Component={NestaDesignSerendi} />
              <Route path='/design/florence' Component={NestaDesignFlorence} />
              <Route path='/design/contour' Component={NestaDesignContour} />
              <Route path='/ville/classica' Component={NestaVilleClassica} />
              <Route path='/ville/weimar' Component={NestaVilleWeimar} />
              <Route path='/ville/essence' Component={NestaVilleEssence} />
              <Route path='/ville/evoque' Component={NestaVilleEvoque} />
              <Route path='/ville/arcadia' Component={NestaVilleArcadia} />
              <Route path='/contact-us' Component={ContactUsPage} />
              <Route path='/contact-an-expert' Component={ContactAnExpertPage} />
              <Route path='/schduler-call-with-an-expert' Component={ScheduleCallAgent} />
          </Routes>  
          <Footer/>   
        </ContentContainer>
       </Router>
       
        </DecoreItemContext.Provider>
       
       </EntirePageContainer>
       </React.StrictMode>
      
    </div>
  );
}

export default App;
