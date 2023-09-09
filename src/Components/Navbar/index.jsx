import { NavLink } from "react-router-dom"

export const Navbar = () => {
let EstaActivo = 'underline underline-offset-4'

    return(
        <nav className='flex justify-between top-0 fixed z-10 w-full py-5 px-8 text-base font-normal'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                    className={({ isActive }) =>
                    isActive ? EstaActivo : undefined
                  }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'
                    className={({ isActive }) =>
                    isActive ? EstaActivo : undefined
                  }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                    className={({ isActive }) =>
                    isActive ? EstaActivo : undefined
                  }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/fornitures'
                    className={({ isActive }) =>
                    isActive ? EstaActivo : undefined
                  }>
                        Fornitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'
                    className={({ isActive }) =>
                    isActive ? EstaActivo : undefined
                  }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'
                    className={({ isActive }) =>
                    isActive ? EstaActivo : undefined
                  }>
                        Others
                    </NavLink>
                </li>
            </ul>
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
                <li>
                    C-0
                </li>               
            </ul>
        </nav>
    )
}