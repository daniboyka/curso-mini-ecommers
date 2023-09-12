import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();



// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({ children }) => {
    //Shopping Cart- contador de carrito
    const [count, setCount] = useState(0)   
    //Poruct Detail- Abrir y cerrar detail
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)//esto es el estado inicial q se encarga de cerrar y abrir la ventanita de detalles
    const openProductDetail = () => setIsProductDetailOpen(true)  //esta es la funcion q se encarga de abrir la ventanita de detalles.
    const closeProductDetail = () => setIsProductDetailOpen(false) //esta es la funcion q se encarga de cerrar la ventanita de detalles.
    //Product Detail- Show Product
    const [productToShow, setProductToShow] = useState({})
    

  return (
    <ShoppingCartContext.Provider value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,

    }}>
        { children }
    </ShoppingCartContext.Provider>
)};
