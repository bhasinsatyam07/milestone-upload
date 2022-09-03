import React from 'react'
import '../login/Login.css'
import {Link} from 'react-router-dom';

export const Login = () => {
  return (
    <div class="containerss">
      <form name="myform" method="get">
        <h1 id="heading">Log-In</h1>
        <p>Login now for expore more</p>
        <div>
            <label>Email- Id : </label>
            <input type="email" id="email" name="femail" placeholder="Enter email" />
        </div>
        <div>
        <label>Password :</label>
          <input type="password" id="pass" name="fpass"  placeholder="Enter password"/>
        </div>
        <div>
            <button type="submit" id="btn-blue" >Login</button>
         <Link to="/Register" >   <button type="submit" id="btn-blue" >Register</button></Link>
        </div> 
    </form> 
    </div>
  )
}
