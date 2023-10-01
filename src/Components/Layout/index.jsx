/* eslint-disable react/prop-types */

export const Layout = ({ children }) =>{
    return(
        <div className='flex flex-col items-center mt-14 bg-gray-200'>
            {children}
        </div>
    )
}