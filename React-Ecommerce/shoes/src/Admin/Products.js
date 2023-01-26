import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../Component/Footer'
import { Navbar } from '../Component/Navbar'
import { useState } from 'react'

const Products = () => {
  const [products,setProducts] =useState("")

  useEffect(()=>{
    fetch("https://shoes-back.onrender.com/products")
    .then(res => res.json())
    .then(data => {
      console.log("ddd",data)
      setProducts(data)})
  },[])

  const Delete = (id) => {
    fetch(`https://shoes-back.onrender.com/products/${id}`, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        fetch("https://shoes-back.onrender.com/products")
        .then(res => res.json())
        .then(data => {
          console.log("ddd",data)
          setProducts(data)})
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <>
            <table>
              <tr>
                <th>Product Name</th>
                <th>Product Description</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
              {products && products.map((item,i) => {
                return <>
               <tr key={item.i}>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
                <td> <Link to={`../products/edit/${item._id}`}>Edit</Link></td>
                <td> <button  onClick={()=>{Delete(item._id)}}> Delete </button></td>
                </tr>
                </>
              })}
            </table>
    </>
  )
}

export default Products