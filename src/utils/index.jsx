import { useContext } from "react";
import { ShoppingCartContext } from "../Context/index";

export const PrecioTotal = () => {
  const Context = useContext(ShoppingCartContext);

  //aca recorro todo el array del carrito tomando los precios de todo los productos
  const PrecioTotalProducto = Context.dataCarritoProductos.map((producto) => {
    return producto.price;
  });

  //aca sumo todo esos precios
  const valorTotalDeLosPrecios = PrecioTotalProducto.reduce((a, b) => a + b, 0);
  setSumaDelPrecioTotal(valorTotalDeLosPrecios)

  //   console.log(sumaDelPrecioTotal)

  return (
    <div className="pl-6 w-full flex justify-between items-center">
        <p className="text-2xl font-medium">Total:</p>
      <span className="text-2xl font-medium pr-6">{sumaDelPrecioTotal}</span>
    </div>
  );
};
