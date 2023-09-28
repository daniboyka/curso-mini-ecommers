

export const BotonDeCategorias = ( {stringCategoria, onClick} ) => {


  return (          
<div className='flex flex-row gap-3 m-3'>
    <button className='border border-black pl-2 pr-2'onClick={onClick}>{stringCategoria}</button>
</div>
  );
};
