import './App.css';
import { Home } from './Component/Home'
import { Route, Routes } from "react-router-dom"
import Login from './Component/Login';
import Register from './Component/Register';
import DetailProduct from './Component/DetailProduct';
import Dashboard from './Admin/Dashboard';
import AddProduct from './Admin/AddProduct';
import EditProduct from './Admin/EditProduct';
import EditUser from "./Admin/EditUsers"
import { Navbar } from './Component/Navbar';
import Cart from './Component/Cart';
import UserLogin from "./Component/userLogin";
import UserRegister from "./Component/userRegister";
import Products from './Component/Products';
import { Footer } from './Component/Footer';
import * as Sentry from "@sentry/react";

function App() {
  return (
    <div className="container max-w-[1400px] mx-auto">
      {console.log("process", process.env.REACT_APP_API_URL)}
    <Navbar/>
    <Routes>
      <Route exact path = "/" element={<Home/>} />
      <Route exact path ="/login" element ={<Login />}/>
      <Route exact path ="/register" element ={<Register/>}/>
      <Route exact path ="/userLogin" element ={<UserLogin />}/>
      <Route exact path ="/userRegister" element ={<UserRegister/>}/>
      <Route exact path = "/products" element={<Products/>} />
      <Route exact path ="/products/:id" element ={<DetailProduct />}/>
      <Route exact path ="/dashboard" element ={<Dashboard/>}/>
      <Route exact path ="/addproduct" element ={<AddProduct/>}/>
      <Route exact path ="/products/edit/:id" element ={<EditProduct/>}/>
      <Route exact path ="/users/edit/:id" element ={<EditUser/>}/>
      <Route exact path ="/cart" element ={<Cart/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default Sentry.withProfiler(App);
