import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../Context/index";

export const PrecioTotal = () => {
  const Context = useContext(ShoppingCartContext);

  //------------------------aca lo que hice yo------------------------

  //aca recorro todo el array del carrito tomando los precios de todo los productos


  // const PrecioTotalProducto = Context.dataCarritoProductos.map((producto) => {
  //   return (producto.price);
  // });

  // //aca sumo todo esos precios
  // const valorTotalDeLosPrecios = PrecioTotalProducto.reduce((a, b) => a + b, 0);
  // Context.setSumaDelPrecioTotal(valorTotalDeLosPrecios);
  
  // console.log(Context.sumaDelPrecioTota)

  // // este condicional actualiza el numeo de cantidad de productos del carrito
  // useEffect(() => {
  //   if (Context.dataCarritoProductos.length === 0) {
  //     Context.setCount("0");
  //   } else {
  //     Context.setCount(Context.dataCarritoProductos.length.toString());
  //   }
  // }, [Context.dataCarritoProductos]);


  //------------------------aca lo que hizo chatGPT------------------------
//------------------------aca lo que hizo chatGPT------------------------

  useEffect(() => {
    // Calcula el precio total sumando los precios de los productos
    const valorTotalDeLosPrecios = Context.dataCarritoProductos.reduce(
      (total, producto) => total + producto.price,
      0
    ); 

    // Actualiza el estado sumaDelPrecioTotal en el contexto
    Context.setSumaDelPrecioTotal(valorTotalDeLosPrecios);

    // Actualiza el número de productos en el carrito
    if (Context.dataCarritoProductos.length === 0) {
      Context.setCount("0");
    } else {
      Context.setCount(Context.dataCarritoProductos.length.toString());
    }
  }, [Context.dataCarritoProductos]);

  //TODO Preguntar a lucho1:Sí, puedes agregar la lógica para calcular el precio total y actualizar el estado sumaDelPrecioTotal
  //dentro del mismo componente PrecioTotal y dentro del mismo useEffect. Sin embargo, ten en cuenta que esto podría
  //hacer que el efecto se ejecute en cada renderizado, lo que podría no ser eficiente si el componente se vuelve más
  // complejo.

  return (
    <div className="pl-6 w-full flex justify-between items-center">
      <p className="text-2xl font-medium">Total:</p>
      <span className="text-2xl font-medium pr-6">
        {Context.sumaDelPrecioTotal.toFixed(2)}
      </span>
    </div>
  );
};
