import React from 'react'
import { Link } from 'react-router-dom'
import img4 from './room2.png'

export const Daily = () => {
  return (
    <div>
        <div>
            <img src={img4} alt="" width="300" height="150" />
        </div>
        <div>
        <p class="pt">3-star Daily type Rooms, on the other hand, <br/>
            are for royalty and billionaires, people  <br/>
            for whom money is no object. Five-star hotels <br/>
             take into account high-grade materials and intricate architecture.  <br/>
             Room service is available 24-hours a day with gourmet dining and <br/>
              a high staff-to-guest ratio.</p>
        </div>
        <div>
           <Link to ="/Billmanage" ><button>Book Now</button></Link>
        </div>
    </div>
  )
}
