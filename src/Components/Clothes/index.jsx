import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../Layout";
import { Card } from "../Card";
import { BotonDeCategorias } from "../BotonDeCategorias";

export const Clothes = () => {
  const [getCategory, setGetCategory] = useState({});
  console.log(getCategory);
  const Context = useContext(ShoppingCartContext);

  const handleCharacter = (evento) => {
    Context.setCaracterCategoria(evento.target.value);
  };

  const pasarDato = (todosLosDatos) => {
    Context.setCaracterCategoria(todosLosDatos);
  };

  const filteredItemsByCategory = (items, caracterCategoria) => {
    return items?.filter((item) =>
      item.category.toLowerCase().includes(caracterCategoria.toLowerCase())
    );
  };

  useEffect(() => {
    if (Context.caracterCategoria)
      setGetCategory(
        filteredItemsByCategory(Context.items, Context.caracterCategoria)
      );
  }, [Context.items, Context.caracterCategoria]);

  const renderViewFilter = () => {
    if (Context.caracterCategoria?.length > 0) {
      if (getCategory?.length > 0) {
        return getCategory?.map((item) => {
          return (
            <Card gatoi={() => pasarDato(item)} item={item} key={item.id} />
          );
        });
      } else {
        return <div>No se econtro producto :(</div>;
      }
    } else {
      return Context.items?.map((item) => {
        return <Card gatoi={() => pasarDato(item)} item={item} key={item.id} />;
      });
    }
  };

  return (
    <Layout>
    <div className='flex flex-wrap'>
        {Context.items?.map((producto) => (
          <BotonDeCategorias
            key={producto.id}
            stringCategoria={producto.category}
          />
        ))}
      </div>
      <input
        className="border border-black rounded-md w-72 p-1 focus:outline-none"
        type="text"
        placeholder="Buscar Producto..."
        onChange={handleCharacter}
      />
      <div className="grid grid-cols-4 gap-4 w-full max-w-screen-xl">
        {renderViewFilter()}
      </div>
    </Layout>
  );
};
