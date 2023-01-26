import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import * as notify from "../utils/notify.js"

export default function EditUser() {
  const [inputs, setInputs] = useState({});
  const {id} =useParams();

  const handleChange = (event) => {
    const nam = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [nam]: value}))
    console.log("yaha",inputs)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
    console.log(inputs)
    fetch(`${process.env.REACT_APP_API_URL}/users/${id}`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
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
    <form onSubmit={handleSubmit}>
      <div>
      <input 
        type="text" 
        name="fullname" 
        placeholder={"full Name"}
        value={inputs.fullname || ""} 
        onChange={handleChange}
      />
      </div>
      <div>
        <input 
          type="text" 
          name="username" 
          placeholder={"Username"}
          value={inputs.username || ""} 
          onChange={handleChange}
        />
        </div>
        <div>
        <input 
          type="password" 
          name="password" 
          placeholder={"Password"}
          value={inputs.password || ""} 
          onChange={handleChange}
        />
        </div>
        <input type="submit" />
    </form>
        <ToastContainer autoClose={4000}/>
        </>
  )
}
