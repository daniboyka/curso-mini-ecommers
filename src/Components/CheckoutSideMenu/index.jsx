import { XCircleIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import "../CheckoutSideMenu/index.css";

export const CheckoutSideMenu = ({ selecItem }) => {
  //console.log(selecItem   ) aca me traigo toda la imfomacion de la api q mapea el componente card
  const Context = useContext(ShoppingCartContext); //traemos el Contexto(todas las funciones y variables), con esto le decimos que queremos q lea el estado global

  return (
    <aside
    
      className={`${
        Context.isCheckoutOpen
          ? "fixed inset-0 flex checkout-side-menu flex-col right-0 border border-black rounded-lg bg-white"
          : "hidden"
      }`}
    >
      <div className={`flex justify-between items-center p-6`}>
        <div className="flex flex-col items-center">
          {/* <h2 className="font-medium text-xl">
            {selecItem === null ? "dsa" : `${"My orden"}`}
          </h2> */}
        </div>
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
    </aside>
  );
};
