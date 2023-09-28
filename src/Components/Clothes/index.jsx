import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../Layout";
import { Card } from "../Card";
import { BotonDeCategorias } from "../BotonDeCategorias";

export const Clothes = () => {
  const [getCategory, setGetCategory] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  
 
  const handleCategoryClick = (categoria) => {
    setSelectedCategory(categoria);
  };
  
  
  
  
  const Context = useContext(ShoppingCartContext);
  
  const handleCharacter = (evento) => {
    Context.setCaracterCategoria(evento.target.value);
  };

  const pasarDato = (todosLosDatos) => {
    Context.setCaracterCategoria(todosLosDatos);
  };
  
  const filteredItemsByCategory = (items, selectedCategory) => {
    return items?.filter((item) =>
    item.category.toLowerCase() === selectedCategory.toLowerCase()
  );
};
  
  useEffect(() => {
    if (selectedCategory)
      setGetCategory(
        filteredItemsByCategory(Context.items, selectedCategory)
      );      
  }, [Context.items, selectedCategory]);

  const renderViewFilter = () => {
    if (selectedCategory?.length > 0) {
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
            onClick={() => handleCategoryClick(producto.category)} 
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
