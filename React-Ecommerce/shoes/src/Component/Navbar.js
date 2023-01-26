import {Link} from "react-router-dom"

export const Navbar = () => {
    return <>
    <div className="nav flex flex-wrap justify-between">
        <div className="flex justify-start inline-block">logo</div>
        <ul className="inline-block bg-black flex text-white space-x-4 justify-end py-[20px]">
        <li> <Link to ="/login">Login</Link></li>
            <li> <Link to = "/">Home</Link></li>
            <li> <Link to ="/">Contact</Link></li>
            <li> <Link to ="/addproduct"> Add Products </Link></li>
            <li> <Link to ="/dashboard"> Dashboard </Link></li>
        </ul>
    </div>
    </>
}