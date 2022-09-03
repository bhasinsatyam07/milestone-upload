import React from 'react'
import '../HeaderFooter/HeaderFooter.css'
import img1 from './room1.png'
import img2 from './room2.png'
import img3 from './room3.png'
import { Order } from './Order'

const images ={
  image1: img1,
  image2: img2,
  image3:img3
}
 const HeaderFooter = () => {
  return (
    <div>
        <header>
            <h1>Welcome to Guest House Booking </h1>
            <h4>Book Your Favourite Guest room by click on image below </h4>
          </header>
         <Order images={images} />
        <footer>
        <p>Author: Satyam Bhasin:@satyambhasin<br/>
        <a>House Management application : contact now 89093#####, 9999992883</a></p>
        </footer>
    </div>
  )
}


export default HeaderFooter