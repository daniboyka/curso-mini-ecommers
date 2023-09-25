/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

export const OrdersCard = (props) => {
    const { precioTotal, productoTotales } = props;
    
    
  const Context = useContext(ShoppingCartContext); //traemos el Contexto(todas las funciones y variables), con esto le decimos que queremos q lea el estado global
  
  return(
    <div className="flex justify-between items-center mb-2 border border-black">
        <p>
            <span>
                01.07.23
            </span>
        <span>
            {productoTotales}
        </span>
        <span>
            {precioTotal}
        </span>
        </p>
    </div>
  )};
