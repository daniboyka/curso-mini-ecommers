// import { useContext, useEffect, useState } from "react";
// import { ShoppingCartContext } from "../../Context";
// import { Layout } from "../Layout";
// import { Card } from "../Card";
// import { BotonDeCategorias } from "../BotonDeCategorias";

// export const Clothes = () => {
//   const [getCategory, setGetCategory] = useState({});
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [uniqueCategories, setUniqueCategories] = useState(new Set());
 
//   const handleCategoryClick = (categoria) => {
//     setSelectedCategory(categoria);
//   };  
  
//   const Context = useContext(ShoppingCartContext);
  
//   const handleCharacter = (evento) => {
//     Context.setCaracterCategoria(evento.target.value);
//   };

//   const pasarDato = (todosLosDatos) => {
//     Context.setCaracterCategoria(todosLosDatos);
//   };
  
//   const filteredItemsByCategory = (items, selectedCategory) => {
    
//     return items?.filter((item) =>
//     item.category.toLowerCase() === selectedCategory.toLowerCase()
//   );
// };

// useEffect(() => {
//   if (Context.items) {
//     // Filtrar categorías únicas y guardarlas en el estado local
//     const categories = new Set(Context.items.map((producto) => producto.category));
//     setUniqueCategories(categories);
//   }
// }, [Context.items]);

  
//   useEffect(() => {
//     if (selectedCategory)
//       setGetCategory(
//         filteredItemsByCategory(Context.items, selectedCategory)
//       );      
//   }, [Context.items, selectedCategory]);

//   const renderViewFilter = () => {
//     if (selectedCategory?.length > 0) {
//       if (getCategory) {        
//         return getCategory?.map((item) => {
//           return (
//             <Card gatoi={() => pasarDato(item)} item={item} key={item.id} />
//           );
//         });
//       } else {
//         return <div>No se econtro producto :(</div>;
//       }
//     } else {
//       return Context.items?.map((item) => {
//         return <Card gatoi={() => pasarDato(item)} item={item} key={item.id} />;
//       });
//     }
//   };

//   return (
//     <Layout>
//       <div className='flex flex-wrap'>
//         {[...uniqueCategories].map((categoria) => (//TODO: lucho aca no entiendo q le pasa en el map
//           <BotonDeCategorias
//             key={categoria}
//             stringCategoria={categoria}
//             onClick={() => handleCategoryClick(categoria)} 
//           />
//         ))}
//       </div>
//       <input
//         className="border border-black rounded-md w-72 p-1 focus:outline-none"
//         type="text"
//         placeholder="Buscar Producto..."
//         onChange={handleCharacter}
//       />
//       <div className="grid grid-cols-4 gap-4 w-full max-w-screen-xl">
//         {renderViewFilter()}
//       </div>
//     </Layout>
//   );
// };
