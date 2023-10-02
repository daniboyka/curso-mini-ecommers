import { useContext} from "react"
import { ShoppingCartContext } from "../../Context"

export const MySelectComponent = () => {
  const Context = useContext(ShoppingCartContext)

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    Context.setGetCaracterOpcion(selectedValue);
  };

  return (
    <div className="relative">

<select
  id="underline_select"
  className="block rounded-md pl-3  px-0 w-44 h-8 text-base bg-gray-800  text-gray-300 appearance-none dark:text-gray-400 focus:outline-none border border-black"
  size="1"
  onChange={handleOptionChange}
  value={Context.getCaracterOpcion || "placeholder"}
>
  <option value="placeholder" disabled hidden>
    Categorias...
  </option>
  {[...Context.uniqueCategories]?.map((categoria) => (
    <option key={categoria} value={categoria}>
      {categoria}
    </option>
  ))}
</select>
      <svg
        className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 7.293a1 1 0 011.414 0L10 8.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};