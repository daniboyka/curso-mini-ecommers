/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Card } from "../../Components/Card";
import  { Layout }   from "../../Components/Layout/";

const API1 = 'https://fakestoreapi.com/products'
const API2= 'https://api.escuelajs.co/api/v1/products'

export const  Home = () => {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch(API2)
    .then(response => response.json())
    .then(data => setItems(data))
   
  }, [])  
    return (
 <Layout>
  home
  <div className='grid grid-cols-4 gap-4 w-full max-w-screen-xl'>
  {
    items?.map((item) =>{    
      return <Card key={item.id} category={item.category.name} title={item.title} image={item.images[0]} price={item.price}/>

    })
  }
  </div>
 </Layout>
  

  )
}


