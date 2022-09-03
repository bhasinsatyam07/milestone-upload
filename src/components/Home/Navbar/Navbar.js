import React from 'react'
import '../Navbar/Navbar.css'
import {Link} from 'react-router-dom'

 const Navbar = () => {
  return (
    <div>
        <ul id="ul">
        <Link to= "/"><li id="li"><a href="#home">Home</a></li></Link>
        <Link to ="/Register" ><li id="li"><a href="#news">Register-Login</a></li></Link>
        <li className="dropdown">
            <a href="javascript:void(0)" className="dropbtn">About</a>
            <div className="dropdown-content">
            <Link to ="/Billmanage"><a>Bill Management</a></Link>
           <Link to ="/CustomerManagement"> <a> Guest Management</a></Link>
    </div>
        </li>
        </ul>
    </div>
  )
}

export default Navbar 