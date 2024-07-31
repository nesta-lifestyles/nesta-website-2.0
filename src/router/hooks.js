import { useNavigate } from "react-router-dom"
import { initialFlorenceDesignData } from "../pages/nesta_design/data/florence";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export const useNestaDesignNavigate = () => {
    const navigate = useNavigate();
    const florenceInitialState = {};

}


export const goToFlorence = () =>{
    const navigate = useNavigate();
    const florenceInitialState = initialFlorenceDesignData;
}


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
