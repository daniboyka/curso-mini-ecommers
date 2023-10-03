/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Card } from "../../Components/Card";
import { Layout } from "../../Components/Layout/";
import { ProductDetail } from "../../Components/ProductDetail";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

export const Home = () => {

  const [selecItem, setselecItem] = useState({}); // TODO:poner null si algo no anda
  const Context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (Context.filteredItems && Context.filteredItems.length > 0) {
      return Context.filteredItems?.map((item) => (
        <Card gatoi={() => pasarDato(item)} item={item} key={item.id} />
      ));
    } else if (Context.filteredItems && Context.filteredItems.length === 0) {
      return <p>No se encontró el producto buscado.</p>;
    } else {
      return Context.items?.map((item) => (
        <Card gatoi={() => pasarDato(item)} item={item} key={item.id} />
      ));
    }
  };

  //TODO: hice esta funcion para pasar los datos a los product detalle por q si pongo un estado con los producto no me los visualizaba, no me recorria los array lucho
  const pasarDato = (todosLosDatos) => {
    setselecItem(todosLosDatos);
  };
  return (
    <div className="min-h-screen bg-zinc-500/75">
      <div className='flex flex-col items-center mt-14'>   
      <h1 className='text-3xl mt-2 mb-6 font-semibold'>Productos</h1>
      <div className="grid grid-cols-4 gap-4 w-full max-w-4xl">
        {renderView()}
      </div>
      <ProductDetail selecItem={selecItem} />    
      </div>
    </div>
  );
};
