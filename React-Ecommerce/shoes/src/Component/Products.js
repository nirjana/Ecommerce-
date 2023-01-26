import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
  const [products,setProducts] =useState();

  useEffect(()=>{
    // fetch("https://api.escuelajs.co/api/v1/products")
    fetch("http://127.0.0.1:8000/products")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setProducts(data)})
    .catch(err => console.error(err))
  },[])

  return (
    <>
    <p className='text-[40px]'>Products</p>
    <hr />
    <div className="flex flex-wrap">
    {console.log("products",products)}
    {products && products.slice(0,10).map((item)=>{
      return(
        <>
        <Link to={`products/${item._id}`}>
        <div key={item.id} className="card h-[373] w-[234px] inline-block text-center shadow-xl m-[20px] hover:mt-[-0.5px]">
          <img src={item.image} alt ={item.id+"img"}  className="p-[10px] h-[233px] w-[233px]"/>
          <p className='p-[10px] text-orange-500'>{item.title}</p>
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

export default Products