import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import "./admin.css";

const Users = () => {
  const [users,setUsers] =useState("")

  useEffect(()=>{
    fetch("https://shoes-back.onrender.com/users")
    .then(res => res.json())
    .then(data => {
      console.log("ddd",data)
      setUsers(data)})
  },[])

  const Delete = (id) => {
    fetch(`https://shoes-back.onrender.com/users/${id}`, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        fetch("https://shoes-back.onrender.com/users")
        .then(res => res.json())
        .then(data => {
          console.log("ddd",data)
          setUsers(data)})
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <>
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
                <td>{item.fullname}</td>
                <td>{item.username}</td>
                <td>{item.password}</td>
                <td> <Link to={`../users/edit/${item._id}`}>Edit</Link></td>
                <td> <button  onClick={()=>{Delete(item._id)}}> Delete </button></td>
                </tr>
                </>
              })}
            </table>
    </>
  )
}

export default Users