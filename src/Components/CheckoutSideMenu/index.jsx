import { XCircleIcon } from "@heroicons/react/24/solid";
import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import "../CheckoutSideMenu/index.css";
import { PrecioTotal } from "../../utils";

export const CheckoutSideMenu = ({ selecItem }) => {
  //console.log(selecItem   ) aca me traigo toda la imfomacion de la api q mapea el componente card
  const Context = useContext(ShoppingCartContext); //traemos el Contexto(todas las funciones y variables), con esto le decimos que queremos q lea el estado global
  const [totalPrecio, setTotalPrecio] = useState(0);  // Actualizamos el valor local cuando sumaDelPrecioTotal cambia
  
const validacionCheckout = () =>{
  const ordetToAdd ={
    data:"01.07.23",
    productos:Context.dataCarritoProductos,
    cantidad:Context.dataCarritoProductos.length,
     totalPrecio: totalPrecio,// Usamos el valor almacenado localmente POR QUE NO SE ME ACTUALIZABA LOS PRECIOS TOTALES
  }  
  Context.setOrder([...Context.order, ordetToAdd])
  Context.setDataCarritoProductos([])  
}



useEffect(() => {
  // Actualizamos el valor local cuando sumaDelPrecioTotal cambia
  setTotalPrecio(Context.sumaDelPrecioTotal);
}, [Context.sumaDelPrecioTotal]);


  return (
    <aside
      className={`${
        Context.isCheckoutOpen
          ? "fixed inset-0 flex checkout-side-menu flex-col right-0 border border-black rounded-lg bg-white"
          : "hidden"
      }`}
    >
      <div className={`flex justify-between items-center p-6`}>
        <div className="cursor-pointer" onClick={() => Context.closeCheckout()}>
          <XCircleIcon className="h-6 w-6 text-black" />
        </div>
      </div>
      <div className="px-6 overflow-y-scroll">
        {Context.dataCarritoProductos.map((product) => (
          <OrderCard
            id={product.id}
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
      <PrecioTotal/>      
      <button className='bg-blue-700 text-white' onClick={()=> validacionCheckout()}>Checkout</button>
      
    </aside>
  );
};
