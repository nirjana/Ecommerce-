import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import * as notify from "../utils/notify.js"
import "./admin.css";

const Users = () => {
  const [users,setUsers] =useState("")

  useEffect(()=>{
    fetch(`${process.env.REACT_APP_API_URL}/users`)
    .then(res => res.json())
    .then(data => {
      console.log("mathi",data)
      setUsers(data.data)})
  },[])

  const Delete = (id) => {
    fetch(`${process.env.REACT_APP_API_URL}/users/${id}`, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data.data);
        fetch(`${process.env.REACT_APP_API_URL}/users`)
        .then(res => res.json())
        .then(data => {
          console.log("ddd",data.data)
          setUsers(data.data)})
          notify.success("deleted")
      })
      .catch((error) => {
        notify.error(error)
        console.error('Error:', error);
      });
  }

  return (
    <>    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded"><Link to="/register">Add Users</Link></button>
            <table className=" rounded-lg">
              <tr>
                <th>Full Name</th>
                <th>Username</th>
                <th>Password</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
              {users && users.map((item,i) => {
                return <>
               <tr key={item.i}>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.password}</td>
                <td> <Link to={`../users/edit/${item._id}`}>Edit</Link></td>
                <td> <button  onClick={()=>{Delete(item._id)}}> Delete </button></td>
                </tr>
                </>
              })}
            </table>
            <ToastContainer autoClose={4000}/>
    </>
  )
}

export default Users