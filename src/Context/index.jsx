import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();



// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0)   
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)//esto es el estado inicial q se encarga de cerrar y abrir la ventanita de detalles
    console.log(isProductDetailOpen)
    const openProductDetail = () => setIsProductDetailOpen(true)  //esta es la funcion q se encarga de abrir la ventanita de detalles.
    const closeProductDetail = () => setIsProductDetailOpen(false) //esta es la funcion q se encarga de cerrar la ventanita de detalles.
    

  return (
    <ShoppingCartContext.Provider value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,

    }}>
        { children }
    </ShoppingCartContext.Provider>
)};
