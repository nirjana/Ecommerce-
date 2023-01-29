import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import * as notify from "../utils/notify.js";
import authHeader from "../authentication/authHeader.js";

const CheckoutForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("token"));
  console.log("user yei ho", user);
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/userLogin`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.data.user) {
          console.log("bhitra:", data);
          localStorage.setItem("user", JSON.stringify(data.data.user));
          notify.success("Checkout");
          navigate("/");
          window.location.reload();
        }
      })
      .catch((error) => {
        notify.error(error);
        console.error("Error:", error);
      });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="checkout shadow-xl mx-auto w-[300px]  p-[30px] mt-[40px] rounded-md"
      >
        <h1 className="text-[30px] text-center mb-[20px]">Checkout</h1>
        <label for="username" className="text-gray-600">
          {" "}
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          placeholder="Enter Username"
          // onChange={(e) => {
          //   setUsername(e.target.value);
          // }}
          className="shadow-md p-[5px] w-full mb-[20px] mt-[10px] rounded-md"
        />

        <label for="username" className="text-gray-600">
          {" "}
          Email
        </label>
        <input
          type="text"
          id="email"
          value={username}
          placeholder="Enter Email"
          // onChange={(e) => {
          //   setUsername(e.target.value);
          // }}
          className="shadow-md p-[5px] w-full mb-[20px] mt-[10px] rounded-md"
        />

        <label for="username" className="text-gray-600">
          {" "}
          Card Number
        </label>
        <input
          type="text"
          id="card_number"
          value={username}
          placeholder="Enter  Card Number"
          // onChange={(e) => {
          //   setUsername(e.target.value);
          // }}
          className="shadow-md p-[5px] w-full mb-[20px] mt-[10px] rounded-md"
        />

        <label for="address" className="text-gray-600">
          {" "}
          Address
        </label>
        <input
          type="text"
          id="address"
          value={username}
          placeholder="Enter  address"
          // onChange={(e) => {
          //   setUsername(e.target.value);
          // }}
          className="shadow-md p-[5px] w-full mb-[20px] mt-[10px] rounded-md"
        />
   
        <button className="shadow-md p-[5px] w-full mb-[20px] mt-[10px] text-white rounded-md bg-green-600">
          Order Now
        </button>
      </form>
    </>
  );
};

export default CheckoutForm;
