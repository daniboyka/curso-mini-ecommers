import { useRoutes, BrowserRouter } from "react-router-dom";
import "../App/App.css";
import { ShoppingCartProvider } from "../../Context/index";
import { Home } from "../Home/index";
import { MyAccount } from "../MyAccount/index";
import { MyOrder } from "../MyOrder/index";
import { MyOrders } from "../MyOrders/index";
import { NotFound } from "../NotFound/index";
import { Signln } from "../Signln/index";
import { Navbar } from "../../Components/Navbar";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";


const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },    
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/sign-in", element: <Signln /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />       
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
