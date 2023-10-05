import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

export const OrderCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, image, price, id, handleDelet } = props;

  //TODO: 1.css mejorar las imaguenes pequeñas,
  // 2.estudiar el ciclo del componente con las props para ver como se llegan a renderizar
  //3.correr toda la ventana mas para la derecha
  //4. Practicar cambiar de funciones entre componente, moviendo sus parametros y datos
  //5.fijarce q onda el error VM2782:1 Warning: Cannot update a component (`ShoppingCartProvider`) while rendering a different component (`PrecioTotal`). To locate the bad setState() call inside

  const Context = useContext(ShoppingCartContext); //traemos el Contexto(todas las funciones y variables), con esto le decimos que queremos q lea el estado global

  // const manejoFilter = (id) =>{
  //     handleDelet(id)
  // }

  // const eliminarProductoDelCarrito = (id) => {
  //     const nuevosElementos = Context.dataCarritoProductos.filter((elemento) => elemento.id !== id)
  //     Context.setDataCarritoProductos([...nuevosElementos])
  //}
  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex relative w-full items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg"
            src={image}
            alt={title}
            style={{ objectFit: "contain" }} // Puedes ajustar 'contain' o 'cover' según tus necesidades
          />
        </figure>
        <p className="text-sm ml-2 font- light flex absolute top-0 inset-x-20  w-4/5">{title}</p>
        <div className="flex justify-between items-center w-2/3 mt-3">
          <p className="text-lg font-medium">{price}</p>
          <div className="flex items-center mr-2 gap-1">
            <span>Cantidad:</span>
            <button>+</button>
            <span>{Context.cantidades}</span> <button>-</button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {handleDelet && (
          <div className="cursor-pointer mb-4" onClick={() => handleDelet(id)}>
            <XMarkIcon className="h-6 w-6 text-black cursor-pointer" />
          </div>
        )}
      </div>
    </div>
  );
};
