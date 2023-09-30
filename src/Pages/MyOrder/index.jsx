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
      <div className='flex justify-between align-baseline w-80 mb-6'>
        <Link to='/my-orders'>
        <ChevronLeftIcon className='className="h-6 w-6 text-black cursor-pointer'/>
        </Link>
        <h1>My Order una onden</h1>
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
  );
};
