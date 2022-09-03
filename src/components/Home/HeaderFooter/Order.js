import React from 'react'
import { Link } from 'react-router-dom'

export const Order = (props) => {
  return (
    <div id="contgid">
           <Link to="/Delux"> <img class="img1" src ={props.images.image1} alt="" width="120px" height="70px"/></Link>
           <Link to="/Daily"><img  class="img2"  src ={props.images.image2} alt="" width="120px" height="70px" /></Link>
           <Link to="/Local"> <img  class="img3"  src ={props.images.image3} alt="" width="120px" height="70px" /></Link>
           <Link to="/Delux"> <img class="img1" src ={props.images.image1} alt="" width="120px" height="70px"/></Link>
           <Link to="/Daily"><img  class="img2"  src ={props.images.image2} alt="" width="120px" height="70px" /></Link>
            <p id="p1">Delux 5 star</p>
            <p id="p2">Daily 3 star</p>
            <p id="p3">Local 2 Star</p>
            <h5 id="h1">Price :$100</h5>
            <h5 id="h2">Price: $50</h5>
            <h5 id="h3">Price: $30</h5>
          </div>
  )
}
