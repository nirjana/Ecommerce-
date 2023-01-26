import React from 'react'
import { Footer } from '../Component/Footer'
import { Navbar } from '../Component/Navbar'
import { useState } from 'react'
import Products from './Products'
import Users from './Users'

const Dashboard = () => {
  const [show,setShow] =useState(true);

  return (
    <>
    <div className='Dashboard flex flex-row'>
        <div className='categories'>
            <ul>
                <li onClick={()=>setShow(true)}> <button>Products</button></li>
                <li onClick={()=>setShow(false)}><button>Users</button></li>
            </ul>
        </div>
        <div className="ml-[40px]">
            {show ? <Products/> : <Users/>}
        </div>
    </div>
    </>
  )
}

export default Dashboard