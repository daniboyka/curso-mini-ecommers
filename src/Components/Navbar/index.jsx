import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import {  ShoppingBagIcon } from '@heroicons/react/24/outline'
import { MySelectComponent } from "../NavSelect"

export const Navbar = () => {
    const Context = useContext(ShoppingCartContext)//traemos el Contexto, con esto le decimos que queremos q lea el estado global

let EstaActivo = 'underline underline-offset-4'

const handleCharacter = (evento) =>{
    Context.setCaracter(evento.target.value)
}


    return(
        <nav className='flex justify-between top-0 fixed z-10 w-full py-5 px-8 text-base font-normal'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive ? EstaActivo : undefined
    }
    onClick={() => {
      Context.setCaracter(null); // Restablece el filtro por caracteres
      Context.setGetCaracterOpcion(""); // Restablece el filtro por categoría
      Context.setFilteredItems(null); // Restablece los filtros
      console.log("Clic en All");
    }}
  >
    All
  </NavLink>
</li>
                <MySelectComponent/>
            </ul>
            <div>
            <input
            className='border border-black rounded-md w-72 p-1 focus:outline-none'
            type='text'
            placeholder='Buscar Producto...'
            onChange={handleCharacter}
            />
            </div>
            <ul className='flex item-center gap-3'>
                <li className='text-black/60'>
                    danielcaz@gmail.com
                </li>
                <li>
                    <NavLink to='/my-orders'
                    className={({ isActive }) =>
                    isActive ? EstaActivo : undefined
                  }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                    className={({ isActive }) =>
                    isActive ? EstaActivo : undefined
                  }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'
                    className={({ isActive }) =>
                    isActive ? EstaActivo : undefined
                  }>
                        Sign In
                    </NavLink>
                </li>
                <li className='flex items-center'>
                    <ShoppingBagIcon className='h-6 w-6'/> {Context.count}
                </li>               
            </ul>
        </nav>
    )
}