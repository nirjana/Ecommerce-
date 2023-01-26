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


function App() {
  return (
    <div className="container max-w-[1400px] mx-auto">
    <Navbar/>
    <Routes>
      <Route path = "/" element={<Home/>} />
      <Route path ="/login" element ={<Login />}/>
      <Route path ="/register" element ={<Register/>}/>
      <Route path ="/products/:id" element ={<DetailProduct />}/>
      <Route path ="/dashboard" element ={<Dashboard/>}/>
      <Route path ="/addproduct" element ={<AddProduct/>}/>
      <Route path ="/products/edit/:id" element ={<EditProduct/>}/>
      <Route path ="/users/edit/:id" element ={<EditUser/>}/>
    </Routes>
    </div>
  );
}

export default App;
