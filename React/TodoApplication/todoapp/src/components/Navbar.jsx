import React from 'react'

export const Navbar = () => {
  return (
    <nav className="flex justify-between bg-sky-900 text-white 
    px-2 m-0 ps-3 pb-3 pt-2 pe-4" >
        <div className="logo mx-2">
            <h1 className='text-xl'>TDManager</h1>
        </div>
        <h2 className='text-xl font-medium'>Now Schedule And Achieve Tasks</h2>
        <ul className='flex gap-5 text-base'>
            <li className='cursor-pointer hover:font-bold transition-all 
            duration-100'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all 
            duration-100'>ToDo List</li>
            
        </ul>
    </nav>
  )
}
