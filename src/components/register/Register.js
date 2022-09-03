import React from 'react'
import '../register/Register.css'
import {Link} from 'react-router-dom';

export const Register = () => {
  return (
    <div class="containers">
    <form name="myform" method="get" action ="">
      <h1 id="heading">Register-In</h1>
      <p>Register yourself for explore more</p>
      <div>
          <label>Full Name: </label>
          <input type="text" id="name" name="fname" placeholder="Enter Full name" />
      </div>
      <div>
          <label>Email - Id : </label>
          <input type="email" id="email" name="femail" placeholder="Enter email" />
      </div>
      <div>
          <label>Password : </label>
          <input type="password" id="pass" name="fpass" placeholder="Enter password" />
      </div>
      <div>
      <label>CPassword</label>
        <input type="password" id="cpass" name="fcpass"  placeholder="confirm password"/>
      </div>
      <div>
          <label>Phone No : </label>
          <input type="text" id="phone" name="fphone" placeholder="Enter Phone number" />
      </div>
      <div>
          <button type="submit" id="btn-blue" >Register</button>
          <Link to ="/Login" ><button type="submit" id="btn-blue" >Login</button></Link>
      </div> 
  </form> 
  </div>
  )
}
