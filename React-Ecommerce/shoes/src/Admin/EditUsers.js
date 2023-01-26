import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    fetch(`http://127.0.0.1:8000/users/${id}`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
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
  )
}
