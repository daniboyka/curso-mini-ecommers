// eslint-disable-next-line react/prop-types
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context";


// eslint-disable-next-line react/prop-types
export const Card = ({ category, title, image, price }) => {
const Context = useContext(ShoppingCartContext)//traemos el Contexto, con esto le decimos que queremos q lea el estado global

  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{category}</span>
        <img className='w-full h-full object-cover rounded-lg' src={image} alt={title} />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
        onClick={()=> Context.setCount(Context.count + 1)}>
          +
          </div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light truncate'>{title}</span>
        <span className='text-lg font-medium mr-2'>${price}</span>
      </p>
    </div>
  );
};
