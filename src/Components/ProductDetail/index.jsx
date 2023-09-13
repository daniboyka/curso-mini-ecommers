import "../../Components/ProductDetail/index.css"
import { XCircleIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context";

export const ProductDetail = ({ selecItem }) => {
    //console.log(selecItem   ) aca me traigo toda la imfomacion de la api q mapea el componente card
    const Context = useContext(ShoppingCartContext)//traemos el Contexto(todas las funciones y variables), con esto le decimos que queremos q lea el estado global


    return(
        <aside className={`${Context.isProductDetailOpen ? 'flex product-detail flex-col fixed right-0 border border-black rounded-lg bg-white' : 'hidden'}`}>
            <div className={`flex justify-between items-center p-6`}>
                <div className='flex flex-col items-center'>
                <h2 className='font-medium text-xl'>{selecItem.title}</h2>
                    <figure className='w-10 h-11'>
                        <img src={selecItem.image} alt={selecItem.title}/>
                    </figure>
                    <p>{selecItem.description}</p>
                </div>
                <div className='cursor-pointer'onClick={() => Context.closeProductDetail()}>                
                <XCircleIcon className="h-6 w-6 text-black" />
                </div>
            </div>
        </aside>
    )
}