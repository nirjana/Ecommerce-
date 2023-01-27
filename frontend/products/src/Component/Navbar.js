import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { useState, useEffect } from "react";
import { authService } from "../authentication/authentication";
import img from "../image/e.png"

export const Navbar = () => {
    const cartCount =useSelector(state => {
        console.log("this is nav state",state.cart.count) 
        return state.cart.count})
        const [currentUser, setCurrentUser] = useState(undefined);
  console.log("currenttt",currentUser);

  useEffect(() => {
    const user = authService.getCurrentUser();
    console.log("userla",user)

    if (user) {
      setCurrentUser(user.currentUser);
    }
  }, []);

  const logOut = () => {
    authService.logout();
    window.location.reload();
  };  
    return <>
    <div className="nav flex flex-wrap justify-between">
        <div className="flex justify-start inline-block">
        <img src={img} alt="hero img" className='h-[70px] w-[70px] pt-[5px]'/>
        </div>
        <ul className="inline-block bg-black flex text-white space-x-4 justify-end py-[20px]">
            <li> <Link to = "/">Home</Link></li>
            <li> <Link to ="/">Contact</Link></li>
            <li> <Link to ="/products"> Our Products </Link></li>
                                 {currentUser ? (
                                    currentUser === 'user'?
                                    <>
                                <Link to="/cart" >
                                     <i className="fa fa-shopping-cart ">  <li> <Link to ="/cart"> Cart({cartCount}) </Link></li> </i>
                                    </Link>                           
                                    <Link to="/login">
                                         <i className="fa fa-sign-in" onClick ={logOut}><li>  Logout </li></i>
                                        </Link>
                                      </>:
                                      <>
                                                <Link to="/dashboard" >
                                                <i className="fa fa-shopping-cart "> <li> Dashboard </li> </i>
                                               </Link>                           
                                               <Link to="/login">
                                                    <i className="fa fa-sign-in" onClick ={logOut}><li>  Logout </li></i>
                                                   </Link>
                                                   </> 
                                   ): 
                                      <>
                                       <Link to="/register" className="">
                                               <li> Sign Up <i className="fa fa-user-plus"></i></li> 
                                       </Link>
                                       <div className="dropdown"><li class="last small-content dropbtn">
                                               Login <i className="fa fa-user-plus"></i>
                                              <div class="dropdown-content">
                                                  <a href="/login">Admin </a>
                                                   <a href="/userLogin">Customer </a>
                                                   </div>
               
                                               </li>
                                              </div>
                                       </>}
        </ul>
    </div>
    </>
}