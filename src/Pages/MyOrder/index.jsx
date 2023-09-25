import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import  {OrderCard}  from "../../Components/OrderCard";
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";

export const MyOrder = () => {
  const Context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className='flex justify-between align-baseline w-80 mb-6'>
        <Link to='/my-orders'>
        <ChevronLeftIcon className='className="h-6 w-6 text-black cursor-pointer'/>
        </Link>
        <h1>My Order danito</h1>
      </div>
      <div className='flex  align-baseline gap-10 w-80'>
        {Context.order.slice(-1)[0].productos.map((product) => (
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
