import { XCircleIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context";

export const OrderCard = props =>{
    // eslint-disable-next-line react/prop-types
    const {title, image, price} = props

//TODO: 1.css mejorar las imaguenes pequeñas, 
// 2.estudiar el ciclo del componente con las props para ver como se llegan a renderizar 
//3.hacer q se bloquee el producto para agregar cuando ya este agregado con el id,
//4.correr toda la ventana mas para la derecha
//5.hacer el scroll para cuando agregue muchos productos.
//6. closeCheckout cierra todo y lo q tiene q hacer es quitarlo de la array, creo q con un filter
const Context = useContext(ShoppingCartContext)//traemos el Contexto(todas las funciones y variables), con esto le decimos que queremos q lea el estado global


    return(
<div className='flex justify-between items-center mb-2'>
    <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
            <img className='w-full h-full rounded-lg object-cover' src={image} alt={title} />
        </figure>
        <p className='text-sm font-light'>
            {title}
        </p>
    </div>
    <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>
            {price}
        </p> 
        <div className="cursor-pointer" onClick={() => Context.closeCheckout()}>
        <XCircleIcon className="h-6 w-6 text-black cursor-pointer" />        
            </div>         
    </div>
</div>
    )
}