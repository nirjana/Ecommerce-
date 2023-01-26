import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import * as notify from "../utils/notify.js"

const Products = () => {
  const [products,setProducts] =useState("")

  useEffect(()=>{
    fetch(`${process.env.REACT_APP_API_URL}/products`)
    .then(res => res.json())
    .then(data => {
      console.log("ddd",data)
      setProducts(data.data)})
  },[])

  const Delete = (id) => {
    fetch(`${process.env.REACT_APP_API_URL}/products/${id}`, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        fetch(`${process.env.REACT_APP_API_URL}/products`)
        .then(res => res.json())
        .then(data => {
          console.log("ddd",data)
          setProducts(data.data)})
          notify.success("deleted")
      })
      .catch((error) => {
        notify.error(error)
        console.error('Error:', error);
      });
  }

  return (
    <>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded"><Link to="/addproduct">Add Product</Link></button>
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
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
                <td> <Link to={`../products/edit/${item._id}`}>Edit</Link></td>
                <td> <button  onClick={()=>{Delete(item._id)}}> Delete </button></td>
                </tr>
                </>
              })}
            </table>
            <ToastContainer autoClose={4000}/>
    </>
  )
}

export default Products