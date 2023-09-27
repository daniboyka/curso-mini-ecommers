import { createContext, useEffect, useState } from "react";

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
    // const [productToShow, setProductToShow] = useState({})
   
    //Aca se va almacenar los productos q vayamos agregando con el boton +
    const [dataCarritoProductos, setDataCarritoProductos] = useState([])   
    // console.log(dataCarritoProductos)

    //Componente Checkout abrir y cerrar las ventanas
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)//esto es el estado inicial q se encarga de cerrar y abrir la ventanita de detalles
    const openCheckout = () => setIsCheckoutOpen(true)  //esta es la funcion q se encarga de abrir la ventanita de detalles.
    const closeCheckout = () => setIsCheckoutOpen(false) //esta es la funcion q se encarga de cerrar la ventanita de detalles.

    //suma total del precio de los productos
    const [sumaDelPrecioTotal, setSumaDelPrecioTotal] = useState(0)

    //estado de order de compra
    const [order, setOrder] = useState([])

   // Buscador de Productos: caracteres del Input 
    const [caracter, setCaracter] = useState(null)
    const [caracterCategoria, setCaracterCategoria] = useState(null)
    //Toda la informacions del Fetch
    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);

    const API1 = "https://fakestoreapi.com/products";
    const API2 = "https://api.escuelajs.co/api/v1/products";

    useEffect(() => {
        fetch(API1)
        .then((response) => response.json())     
        .then((data) => setItems(data));
      }, []);
    
const filteredItemsByTitle = (items, caracter) =>{
    return items?.filter(item => item.title.toLowerCase().includes(caracter.toLowerCase()))
}
 
useEffect(() => {
   if(caracter) setFilteredItems(filteredItemsByTitle(items, caracter))
  }, [items, caracter]);


   
  return (
    <ShoppingCartContext.Provider value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        // productToShow,
        // setProductToShow,
        dataCarritoProductos,
        setDataCarritoProductos,
        isCheckoutOpen,
        setIsCheckoutOpen,
        openCheckout,
        closeCheckout,
        sumaDelPrecioTotal,
        setSumaDelPrecioTotal,
        order,
        setOrder,
        caracter,
        setCaracter,
        items,
        setItems,
        filteredItems,
        setFilteredItems,
        caracterCategoria,
        setCaracterCategoria,

    }}>
        { children }
    </ShoppingCartContext.Provider>
)};
