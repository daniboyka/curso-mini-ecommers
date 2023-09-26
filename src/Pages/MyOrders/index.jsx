import { useContext} from "react";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import { OrdersCard } from "../../Components/OrdersCard";
import { Link } from "react-router-dom";

export const MyOrders = () => {
  const Context = useContext(ShoppingCartContext);
  


  return( 
  <Layout>
    My Order todas kas 
    <div className='flex  align-baseline gap-10 w-80 '>
    {Context.order.map((order, index) => (
      <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard          
          productoTotales={order.cantidad}
          precioTotal={order.totalPrecio}         
          />
      </Link>
        ))}
        
    </div>
  </Layout>)

}