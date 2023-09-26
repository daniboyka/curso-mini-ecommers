/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

export const OrdersCard = (props) => {
    const { precioTotal, productoTotales } = props;
    
    
  const Context = useContext(ShoppingCartContext); //traemos el Contexto(todas las funciones y variables), con esto le decimos que queremos q lea el estado global
  //TODO: mejorar css de estos cosos 
  return(
    <div className='flex justify-between items-center  border border-black p-4 rounded-md mb-4 mt-2 w-80'>
        <div className='flex justify-between w-full'>
            <p className='flex flex-col'>
            <span className='text-2xl font-medium'>
                01.07.23
            </span>
        <span className='text-2xl font-medium'>
            {productoTotales} Articulos
        </span>
            </p>
            <p>
        <span className='text-2xl font-medium pr-6'>
            ${precioTotal}
        </span>
            </p>
        </div>
    </div>
  )};
