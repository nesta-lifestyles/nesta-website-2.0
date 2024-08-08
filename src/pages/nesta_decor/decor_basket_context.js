import React, { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export const NestaDecorCartContext = createContext();

export const NestaDecorCartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const uniqueId = uuidv4();
    const addToCart = (product) => {
      product = {
        ...product,
        "id":uniqueId,
      }
      setCart([...cart, product]);
      console.log("Cart ",cart)
    };
    
    useEffect(() => {
        console.log("Cart updated:", cart);
        // Perform other side effects here if needed
      }, [cart]);
    
    const getCountOf = (product) => {
        var count = 0;
        console.log("GET COUNT OF ::: ",product)
        cart.forEach(item => {
            // console.log(product.code+"::::"+item.code)
            if(product && (item.code === product.code)) {
                count +=1;
            }
        })
        return count;
    };
    
  
    const removeFromCart = (product) => {
      var toBeRemoveFromCart = undefined;
      for (let i = 0; i < cart.length; i++) {
        if(cart[i].code === product.code) {
            toBeRemoveFromCart = cart[i];
            break;
        }
      }
      setCart(cart.filter((item) => item!== toBeRemoveFromCart));
    };
  
    return (
      <NestaDecorCartContext.Provider value={{ cart, addToCart, removeFromCart, getCountOf }}>
        {children}
      </NestaDecorCartContext.Provider>
    );
  };