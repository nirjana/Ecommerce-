import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {
    const products = useSelector(state => {
        return state.cart.products
    })
  return (
    <>
    <p className='text-[40px]'>Cart Items</p>
    <hr />
    <div className="flex flex-wrap">
    {
    products && products.slice(0,10).map((item)=>{
      return(
        <>
        <Link to={`products/${item._id}`}>
        <div key={item.id} className="card h-[373] w-[234px] inline-block text-center shadow-xl m-[20px] hover:mt-[-0.5px]">
          <img src={item.images} alt ={item.id+"img"}  className="p-[10px] h-[233px] w-[233px]"/>
          <span className='p-[10px] text-orange-500'>{item.name}</span>
          <span className='p-[10px] text-orange-500 text-end'>({item.cartQuantity})</span>
          <p className='pb-[10px]'>Rs.{item.price}</p>
        </div>
        </Link>
        </>
      )
    })}
    </div>
</>
  )
}

export default Cart