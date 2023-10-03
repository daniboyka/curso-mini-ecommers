/* eslint-disable react/prop-types */

export const Layout = ({ children}) =>{

    
    return (
        <div  className='flex flex-col items-center mt-14 bg-zinc-500/75' style={{ height: '100vh' }}>
          {children}
        </div>
      );
}