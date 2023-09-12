import "../../Components/ProductDetail/index.css"
import { XCircleIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context";

export const ProductDetail = () => {
    const Context = useContext(ShoppingCartContext)//traemos el Contexto(todas las funciones y variables), con esto le decimos que queremos q lea el estado global


    return(
        <aside className={`${Context.isProductDetailOpen ? 'flex product-detail flex-col fixed right-0 border border-black rounded-lg bg-white' : 'hidden'}`}>
            <div className={`flex justify-between items-center p-6`}>
                <h2 className='font-medium text-xl'>detail</h2>
                <div className="cursor-pointer"onClick={() => Context.closeProductDetail()}>                
                <XCircleIcon className="h-6 w-6 text-black" />
                </div>
            </div>
        </aside>
    )
}