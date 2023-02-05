import React from 'react'
import {useEffect, useState} from 'react'
import  '../Components/Food.css'
import {Link,NavLink} from 'react-router-dom'
import axios from 'axios'
function Food() {
     //Declaration of restaurant data
    const [restaurant,setRestaurant]=useState([])
    
    //Fetch the restaurant data from outlet
    useEffect(()=>{
        axios  
        .get("https://apimocha.com/ecatering-ui-test/outlets")
        .then(res=>{
        setRestaurant(res.data.result.vendors)
       
        })
        .catch(err=>{
           console.log(err);
         })
     },[])

     //show the restaurant data in ui
  return (
    <div class="restaurant-parent">
     
    
    {
     
      restaurant==""?(
        <div class="loader"></div>
      ):
      
        
       
      restaurant.map(restaurant=>(
       
      <div className="restaurant-list" key={restaurant.id}>
         <Link to={`/${restaurant.id}`} className="cursor-pointer">
        <div className='restaurant-card'>
       <img src={restaurant.logo} alt="logo" className='restaurant-img'/>
        <h5 className="restaurant-title">
          {restaurant.name}
        </h5>
        </div>
        </Link>
        </div>

      
        
      ))
      
      
}
      
    </div>
  
  )
}

export default Food