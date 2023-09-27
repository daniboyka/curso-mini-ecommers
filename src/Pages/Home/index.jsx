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
    if (Context.caracter?.length > 0) {
      if (Context.filteredItems.length > 0) {
        return Context.filteredItems?.map((item) => {
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

  //TODO: hice esta funcion para pasar los datos a los product detalle por q si pongo un estado con los producto no me los visualizaba, no me recorria los array lucho
  const pasarDato = (todosLosDatos) => {
    setselecItem(todosLosDatos);
  };
  return (
    <Layout>
      home
      <div className="grid grid-cols-4 gap-4 w-full max-w-screen-xl">
        {renderView()}
      </div>
      <ProductDetail selecItem={selecItem} />
    </Layout>
  );
};
