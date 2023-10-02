/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { ShoppingCartIcon, CheckIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

// eslint-disable-next-line react/prop-types
export const Card = ({ gatoi, item }) => {
  //TODO: ponerle un nombre mejor a la funcion gatoi
  const { category, title, image, price, id } = item;
  

  const Context = useContext(ShoppingCartContext); //traemos el Contexto(todas las funciones y variables), con esto le decimos que queremos q lea el estado global
 

  //funcion q manda la informacion de los detalles a la ventanita
  const showProduct = () => {
    gatoi();
    Context.openProductDetail();
  };

  const agregarProductoCarritoYCount = (event, productoQueSeVaAgregando) => {
    event.stopPropagation();
    Context.setCount(Context.count);    
    const probando = new Set([...Context.dataCarritoProductos, productoQueSeVaAgregando])// con new set, no repite el dato q se agrega a la array    
    Context.setDataCarritoProductos([...probando])//Context.dataCarritoProductos---> aca le decimos q muestre lo que ta tiene y con producto--->va agregando los productos nuevos
    
    Context.closeProductDetail();
    Context.openCheckout();
  };


  //funcion que se fija si el producto ya esta en el carrito y cambia el icono de + a uno de check  
  const check = (id) => {
    
    const siEstaEnCard = Context.dataCarritoProductos.filter((producto) => producto.id === id).length > 0;
    

    if (siEstaEnCard) {
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-9 h-9 rounded-full m-2 p-1">
          <CheckIcon className="h-6 w-6 text-lg text-green-700"/>
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-orange-700 w-9  h-9 rounded-full m-2 "
          onClick={(event) => agregarProductoCarritoYCount(event, item)}>
          <ShoppingCartIcon className="h-8 w-8 p-1 text-white"/>
        </div>
      );
    }
  };

  return (
    <div
      className=" bg-orange-700 orange-700/75 cursor-pointer  border-2 border-orange-700/50 w-44 h-48 rounded-xl"
      onClick={() => showProduct()}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {category}
        </span>
        <img
          className="w-full h-full p-1 object-cover rounded-xl"
          src={image}
          alt={title}
        />
        {check(id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light truncate mr-2">{title}</span>
        <span className="text-lg font-medium mr-2">${price}</span>
      </p>
    </div>
  );
};
