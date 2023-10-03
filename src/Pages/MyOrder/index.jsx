import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import  {OrderCard}  from "../../Components/OrderCard";
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";

export const MyOrder = () => {
  const Context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)  
  if(index === 'last') index = Context.order?.length - 1


  return (

        <Layout>
      <div className='flex justify-between mt-4 align-baseline w-80 mb-6 bg-zinc-500/'>
        <Link to='/my-orders'>
        <ChevronLeftIcon className='h-10 w-10 cursor-pointer  bg-zinc-500/'/>
        </Link>
        <h1 className="text-3xl te" >Pre orden</h1>
      </div>
      <div className='flex  align-baseline gap-10 w-80'>
        {Context.order?.[index]?.productos.map((product) => (
          <OrderCard
            id={product.id}
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  )      
};
