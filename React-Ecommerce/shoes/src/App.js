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


function App() {
  return (
    <div className="container max-w-[1400px] mx-auto">
    <Navbar/>
    <Routes>
      <Route exact path = "/" element={<Home/>} />
      <Route exact path ="/login" element ={<Login />}/>
      <Route exact path ="/register" element ={<Register/>}/>
      <Route exact path ="/products/:id" element ={<DetailProduct />}/>
      <Route exact path ="/dashboard" element ={<Dashboard/>}/>
      <Route exact path ="/addproduct" element ={<AddProduct/>}/>
      <Route exact path ="/products/edit/:id" element ={<EditProduct/>}/>
      <Route exact path ="/users/edit/:id" element ={<EditUser/>}/>
      <Route exact path ="/cart" element ={<Cart/>}/>
    </Routes>
    </div>
  );
}

export default App;
