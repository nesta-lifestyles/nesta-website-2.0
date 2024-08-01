
import styled from "styled-components";
import logoImage from '../../images/logo/11.png'
import { NavLink as Link } from 'react-router-dom';
import React, {useState }  from 'react';
import menuBars from "../../images/menu/menu.png"
// import invertedLogoImage from '../../images/logo/11.png'
import invtedLogoImage from '../../images/logo/invert_logo.png'
import { ProductInfo } from "../../layouts/product_info";
import { NestaDesignInformation, ProductInformation } from "./nav_bar_content";
import XIcon from "../../images/icons/x_svg.svg"
import { Image } from "../../elements/image";
// import { Text } from "../../elements/text";

const NavBar = styled.nav`
    position: static;
    top: 0;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100%;
    z-index: 1000;
    left: 0;
    background-color:#F5F5F5;
    @media (max-width:600px){
        background-color: white;
        width: 100%;
    }
`

const LogoLayout = styled(Link)`
    position: absolute;
    left:  45.6px;
    height: 46px;
    margin-top: 25px;
    padding:5px;
    cursor: pointer;
    @media (max-width:600px){
        right: 20px;
        height:62px;
        margin-right: 70px;
        max-height: 62px;
        border-radius: 50px;
        margin-right: 70px;
        margin-top: 0px;
        left: 10px;
        top: 11px;
        background-color: #1B1E1E;
    }
`
export const Bars = styled.img`
  display: none;
  color: #808080;
  @media screen and (max-width: 600px) {
    display: block;
    position: absolute;
    max-width: 34px;
    max-height: 34px;
    margin-top: 0px;
    top: 5px;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;



const LogoLink = styled.img`
    /* background-color:green; */
    width: 38.8px;
    height: 56px;
    max-width: 38.8px;
    max-height: 56px;
    padding:5px;
    cursor: pointer;
    @media (max-width:600px){
        position: absolute;
        left: 23px;
        top:13px;
        width: 34px;
        height: 34px;
    }
`
LogoLink.defaultProps = {
    src: logoImage,
  };
  

const MenuLink = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: baseline;
    align-items: baseline;
    max-width: 850px;
    position: relative;
    min-width: 800px;
    flex-wrap: wrap;
    margin-left: 200px;
    margin-top: 45px;
    flex: 120;
    flex-shrink: 1;
    text-decoration: none;
    @media (max-width:600px){
        position: fixed;
        top: 0;
        right: -30%;
        display: flex;
        flex-direction: column;
        gap:30px;
        background-color: black;
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        width: 25%;
        height: 100%;
        padding: 6rem 3rem 0;
        margin-top: 0px;
        z-index: 10000;
        transition: right 0.4s;
    }
`
Bars.defaultProps={
    src:menuBars,
};

const ProductInfoContainer  = styled.div`
    opacity: 0;
    position: absolute;
    top: 100%;
    width: 735px;
    padding: 15px;
    opacity: 0;
    margin-left: -20%;
    /* left: -20%; */
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    &:hover, &:focus,&:hover:before{
        opacity: 1;
        visibility: visible;
        
    }
    @media (max-width:600px){
        display: none;
    }
`

const MenuItem = styled(Link)`
    color: #878383;
    flex: 1;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    margin-right: 40px;
    flex-shrink: 1;
    position: relative;
    transition: all .35s  ease-out;
    text-decoration: none;
    -webkit-transition: all 0.3s ease 0s; 
    @media (max-width:600px) {            
        margin: 10px;
        color: #FFFFFF;
    }

    &:hover, &:focus {
        color: #1B1E1E;
        cursor: pointer;
        font-weight: 700;
        font-size: 16px;
        line-height: 21px;
        transition: all .35s ease;
        @media (max-width:600px) {            
            margin: 10px;
            color: #FFFFFF;
        }
    }
    &:hover+.ProductInfoContainer{
        opacity: 1;
        visibility: visible;
    }

    &:hover:before{
        content: "";
        position: absolute;
        background-color: black;
        height: 2px;
        width: 100%;
        top: 20px;
        margin-right: 40px;
        border-radius: 20PX;
        transition: all .85s ease;
        animation: animate .85s;
        
        @media (max-width:600px) {            
            margin: 10px;
            color: #FFFFFF;
        }
    }
    @keyframes animate {
         0% {
                width: 0;
            }

        100% {
                width: 100%;
             }
        }
        
`

const CloseIO = styled.div`
   @media (max-width:600px) {
        position: absolute;
        left: 50%;
        top: 50px;
        cursor: pointer;
   }
   /* @media(min-width: 700px) {
        display: none;
   } */
`

const Button = styled.div`
    position: absolute;
    right: 5px;
    top: 5px;
    border-radius: 50%;
    color: black;
    width: 34px;
    padding: 5px;
    height: 34px;
    font: 400 14px/150% Poppins, sans-serif;
    background-color: white;
    transition: transform 0.1s, box-shadow 0.1s;
    cursor: pointer;
    @media (max-width: 991px) {
        padding: 0 20px;
    }

    &:hover{
        transition: 0.35s;
        /* transform: scale(1.05); */
        font-weight: 500;
        text-decoration: dashed;
        opacity: 1.0;
        background-color: white;
        box-shadow: 10px 10px 20px rgba(36, 36, 36, 0.5); 
    }
    
    &:active{
        transform: scale(0.95);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
`


const Navbar=() => {

    const [showNavBar, updateNavBar] = useState(false)
    
    const NavBarHandler = () => {
        updateNavBar(!showNavBar)
    }
    
    return(<>
        <NavBar>
            <LogoLayout to="/">
                <LogoLink srcSet={`${invtedLogoImage} 300w, ${invtedLogoImage} 768w, ${invtedLogoImage} 1280w`} />
            </LogoLayout>
            <Bars onClick={NavBarHandler} />
        {showNavBar && (<MenuLink className="menu-link">
                <div>
                    <MenuItem to='/ville' onClick={NavBarHandler}>Nesta Ville</MenuItem>
                    <ProductInfoContainer className="ProductInfoContainer">
                        <ProductInfo product_info={ProductInformation}/>
                    </ProductInfoContainer>
                </div>
                <div>
                    <MenuItem to='/design' onClick={NavBarHandler}>Nesta Designs</MenuItem>
                    <ProductInfoContainer className="ProductInfoContainer">
                        <ProductInfo product_info={NestaDesignInformation} />
                    </ProductInfoContainer>
                </div>
                <div>
                    <MenuItem>Nesta MarketPlace</MenuItem>
                </div>
                <div>
                    <MenuItem>Nesta Sense</MenuItem>
                </div>
                <div>
                    <MenuItem>Nesta Xplorer</MenuItem>         
                </div>
                <CloseIO onClick={NavBarHandler}>
                    <Image width="30px" height="30px" src={XIcon}/>
                </CloseIO>
            </MenuLink> )}       
            {/* <LoginAlert>
                <NotificationButton></NotificationButton>
                <ShoppingCartButton></ShoppingCartButton>
                <LoginButton>Login</LoginButton>
            </LoginAlert> */}
        </NavBar>
       
    </>)

}

export default Navbar;