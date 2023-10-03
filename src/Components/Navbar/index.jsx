import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { MySelectComponent } from "../NavSelect";
import Home from "../../img/home-christmas-icon_icon-icons.com_48890.ico"

export const Navbar = () => {
  const Context = useContext(ShoppingCartContext); //traemos el Contexto, con esto le decimos que queremos q lea el estado global

  let EstaActivo = "underline underline-offset-4";

  const handleCharacter = (evento) => {
    Context.setCaracter(evento.target.value);
  };

  return (
    <nav className="flex justify-between item-center top-0 fixed z-10 mt-0 w-full py-5 px-8 text-base font-normal bg-indigo-100 ">
      <ul className="flex relative items-center gap-3 h-4 mt-0 mb-0">
        <li className="font-semibold text-2xl">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
        <NavLink
    to="/"
    className={({ isActive }) => (isActive ? EstaActivo : undefined)}
    onClick={() => {
      Context.setCaracter(null);
      Context.setGetCaracterOpcion("");
      Context.setFilteredItems(null);
    }}
  >
    <img
      className='h-10 w-10 object-scale-down'
      src={Home}
      alt="home"
      style={{ minWidth: '40px', minHeight: '40px' }} // Establece un ancho mínimo
    />
  </NavLink>
        </li>
        <MySelectComponent />
      <div className='ml-36 mr-2' >
        <input
          className="bg-gray-800 text-gray-300 text-sm appearance-none dark:text-gray-400 border-black rounded-md w-72 p-1 focus:outline-none "
          type="text"
          placeholder="Buscar Producto..."
          onChange={handleCharacter}
        />
      </div>
      </ul>
      <ul className="flex items-center gap-3 h-4 mt-0 mb-0">
        <li className="text-black/60">danielcaz@gmail.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? EstaActivo : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? EstaActivo : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? EstaActivo : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li className="flex items-center">
          <ShoppingBagIcon className="h-6 w-6" /> {Context.count}
        </li>
      </ul>
    </nav>
  );
};
