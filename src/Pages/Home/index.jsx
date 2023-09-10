import { useState, useEffect } from "react";
import { Card } from "../../Components/Card";
import  { Layout }   from "../../Components/Layout/";


export const  Home = () => {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setItems(data))
  }, [])
    return (
 <Layout>
  home
  <div className='grid grid-cols-4 gap-4 w-full max-w-screen-xl'>
  {
    items?.map((item) =>{    
      return <Card key={item.id} category={item.category} title={item.title} image={item.image} price={item.price}/>

    })
  }
  </div>
 </Layout>
  

  )
}


