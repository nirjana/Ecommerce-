import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import * as notify from "../utils/notify.js"

export default function EditProduct() {
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [image,setImage] = useState("");
  const [price,setPrice] =useState("");
  const [category,setCategory] =useState("");
  const [stock,setStock] = useState("");
  const {id} =useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    // fetch(`http://localhost:8000/products/${id}`, {
      fetch(`${process.env.REACT_APP_API_URL}/products/${id}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name:title,description:description,price:price,stock:stock,category:category,images:image}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        notify.success("edited")
      })
      .catch((error) => {
        notify.error(error)
        console.error('Error:', error);
      });
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="shadow-xl mx-auto w-[300px]  p-[30px] mt-[40px] rounded-md">
      <h1 className="text-[30px] text-center mb-[20px]">Edit Product</h1>

      <label for ="title" className='text-gray-600'> Product Name</label>
      <input 
        type="text" 
        name="title" 
        placeholder={"Product Name"}
        value={title || ""} 
        onChange={(e)=>{setTitle(e.target.value)}}
      />
      <label for ="description" className='text-gray-600'> Product Description</label>
        <input 
          type="text" 
          name="description" 
          placeholder={"Description"}
          value={description || ""} 
          onChange={(e)=>{setDescription(e.target.value)}}
        />
        <div>
      <label for ="image" className='text-gray-600'> Product Image</label>
        <input 
          type="text" 
          name="image" 
          placeholder={"image"}
          value={image || ""} 
          onChange={(e)=>{setImage(e.target.value)}}
        />
        </div>
        <div>
        <label for ="price" className='text-gray-600'> Product Price</label>
        <input 
          type="number" 
          name="price" 
          placeholder={"Price"}
          value={price || ""} 
          onChange={(e)=>{setPrice(e.target.value)}}
        />
        </div>
        <div>
        <label for ="category" className='text-gray-600'> Product Category</label>
        <input 
          type="text" 
          name="category" 
          placeholder={"Category"}
          value={category|| ""} 
          onChange={(e)=>{setCategory(e.target.value)}}
        />
        </div>
        <div>
        <label for ="stock" className='text-gray-600'> Product Stock</label>
          <input 
          type="number" 
          name="stock" 
          placeholder={"Stock"}
          value={stock || ""} 
          onChange={(e)=>{setStock(e.target.value)}}
        />
        </div>
        <button type="submit" className="shadow-md p-[5px] w-full mb-[20px] mt-[10px] text-white rounded-md bg-green-600" >Submit</button>
    </form>
        <ToastContainer autoClose={4000}/>
        </>
  )
}
