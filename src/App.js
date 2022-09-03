import React from 'react'
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Home/Navbar/Navbar';
import HeaderFooter from './components/Home/HeaderFooter/HeaderFooter';
import { Delux } from './components/Rooms/Delux';
import { Local } from './components/Rooms/Local';
import { Daily } from './components/Rooms/Daily';
import { Customer } from './components/CustomerMange/Customer';
import { Billmanage } from './components/Billmanage/Billmanage';

 const App = () => {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
            <Route exact path="/" element= {<HeaderFooter />} />
            <Route  path ="/Login" element= {<Login />} />
            <Route path ="/Register" element= { <Register />} />
            <Route path ="/Billmanage" element= {<Billmanage />} />
            <Route path ="/CustomerManagement" element= {<Customer />} />
            <Route path ="/Daily" element= {<Daily />} />
            <Route path ="/Delux" element= {<Delux />} />
            <Route path ="/Local" element= {<Local />} />
        </Routes>
    </Router> 
    </>
  )
}

export default App