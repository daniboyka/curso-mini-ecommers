/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { PlusCircleIcon, CheckIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

// eslint-disable-next-line react/prop-types
export const Card = ({ gatoi, item }) => {
  //TODO: ponerle un nombre mejor a la funcion gatoi
  // console.log("dsadsad",item)
  const { category, title, image, price, id } = item;
  

  const Context = useContext(ShoppingCartContext); //traemos el Contexto(todas las funciones y variables), con esto le decimos que queremos q lea el estado global
  // const [datos, setDatos]= useState(item)

  //funcion q manda la informacion de los detalles a la ventanita
  const showProduct = () => {
    gatoi();
    Context.openProductDetail();
  };

  const agregarProductoCarritoYCount = (event, producto) => {
    event.stopPropagation();
    Context.setCount(Context.count + 1);
    const probando = new Set([...Context.dataCarritoProductos, producto])
    Context.setDataCarritoProductos([...probando])//Context.dataCarritoProductos---> aca le decimos q muestre lo que ta tiene y con producto--->va agregando los productos nuevos
    Context.closeProductDetail();
    Context.openCheckout();
  };

  //funcion que se fija si el producto ya esta en el carrito y cambia el icono de + a uno de check

  const idsDeProductos = Context.dataCarritoProductos
console.log("luchooo", idsDeProductos)
  // console.log("carrito", Context.dataCarritoProductos)

  const check = (id) => {
    // console.log("id", id)
    const siEstaEnCard = Context.dataCarritoProductos.filter((producto) => producto.id === id).length > 0;
    // console.log("filter", siEstaEnCard)

    if (siEstaEnCard) {
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-9 h-9 rounded-full m-2 p-1">
          <CheckIcon className="h-16 w-16" />
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-9 h-9 rounded-full m-2 p-1"
          onClick={(event) => agregarProductoCarritoYCount(event, item)}>
          <PlusCircleIcon className="h-16 w-16" />
        </div>
      );
    }
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct()}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={image}
          alt={title}
        />
        {check(id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light truncate">{title}</span>
        <span className="text-lg font-medium mr-2">${price}</span>
      </p>
    </div>
  );
};
