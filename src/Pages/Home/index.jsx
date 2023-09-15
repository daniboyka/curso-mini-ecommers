/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Card } from "../../Components/Card";
import { Layout } from "../../Components/Layout/";
import { ProductDetail } from "../../Components/ProductDetail";

const API1 = "https://fakestoreapi.com/products";
const API2 = "https://api.escuelajs.co/api/v1/products";

export const Home = () => {
  const [items, setItems] = useState(null);
  const [selecItem, setselecItem] = useState({});// TODO:poner null si algo no anda
  
  useEffect(() => {
    fetch(API1)
    .then((response) => response.json())     
    .then((data) => setItems(data));
  }, []);
  const pasarDato = (a) =>{
    setselecItem(a)
  }
  return (
    <Layout>
      home
      <div className="grid grid-cols-4 gap-4 w-full max-w-screen-xl">
        {items?.map((item) => {     
               
          return (
            <Card gatoi={() => pasarDato(item)} item={item} key={item.id} />
          );
        })}
      </div>
      <ProductDetail selecItem={selecItem}/>
    </Layout>
  );
};
