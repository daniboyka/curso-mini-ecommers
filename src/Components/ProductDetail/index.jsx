/* eslint-disable react/prop-types */
import "../../Components/ProductDetail/index.css";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

export const ProductDetail = ({ selecItem }) => {
  //console.log(selecItem   ) aca me traigo toda la imfomacion de la api q mapea el componente card
  const Context = useContext(ShoppingCartContext); //traemos el Contexto(todas las funciones y variables), con esto le decimos que queremos q lea el estado global

  return (
    <aside
      className={`${
        Context.isProductDetailOpen
          ? "flex product-detail flex-col fixed right-0  border-8 rounded-xl border-orange-700/50 bg-emerald-700/75"
          : "hidden"
      }`}
    >
        <div
          className="cursor-pointer flex justify-center mt-3 mb-0"
          onClick={() => Context.closeProductDetail()}
        >
          <XCircleIcon className="h-8 w-8 text-black hover:border-2 border-green-700 rounded-full" />
        </div>
      <div className={`flex justify-between items-center `}>
        <div className="flex flex-col items-center">
          <h2 className="font-medium text-xl pl-4 pr-4">
            {selecItem === null ? "no hay producto" : `${selecItem.title}`}
          </h2>
          <figure className="w-50 h-56 mt-4">
            <img className="w-full h-full"
              src={selecItem === null ? "no hay producto" : `${selecItem.image}`}
              alt={selecItem === null ? "no hay producto" : `${selecItem.title}`}
            />
          </figure>
          <p className='w-auto'>{selecItem === null ? "no hay producto" : `${selecItem.description}`}</p>
        </div>
      </div>
    </aside>
  );
};
