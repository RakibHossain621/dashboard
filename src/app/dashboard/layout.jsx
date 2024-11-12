import Navbar from '@/component/Navbar'
import Sidebar from '@/component/Sidebar'
import React from 'react'

const layout = ({children}) => {
  return (
    <>
    <div className='flex'>
    <Sidebar/> 
     <Navbar/>
      {children}
    </div>
    </>
  )
}

export default layout
