import { useContext} from "react";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import { OrderCard } from "../../Components/OrderCard";

export const MyOrder = () => {
  const Context = useContext(ShoppingCartContext);

console.log(Context.order[0])
  return( 
  <Layout>
    My Order danito
    <div>
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
  </Layout>)

}