import React from 'react'
import {useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../Components/Food.css'
import axios from 'axios'
function Menu(props) {
  // Declaration of all menuitem and singlemenu
    const [vendorId,setVendorId]=useState(0);
    const [restaurantItem,setRestaurantItem]=useState([])
    const [singlerestaurant,setSingleRestaurant]=useState([])
    
    const  {foodId}=useParams();
   
    
    // Fetch the menu data and matching the menudata with outlet data 
    useEffect(()=>{
      axios
      .get("https://apimocha.com/ecatering-ui-test/menu")
      .then((res)=>{

        if(parseInt(foodId)===res.data.result.vendorId){
            setRestaurantItem(res.data.result.categories);
          
        }
      })
    },[])

    //ADD TO CART Function and  Store the order history of a user in the browser's local storage
    
 function handleRestaurant(restaurant){
 
    let localStorageRestaurant = JSON.parse(localStorage.getItem("restaurant1")) || [];
   console.log("local",localStorageRestaurant)
    if (singlerestaurant.includes(restaurant.id)) {
        localStorageRestaurant = localStorageRestaurant.filter(
        (singrestaurant) =>singrestaurant.id != restaurant.id
      );
    }else{
      
      localStorageRestaurant.push(restaurant);
     
    }
    
      localStorage.setItem("restaurant1", JSON.stringify(localStorageRestaurant));
    

     let tempData = localStorageRestaurant.map(restaurant => restaurant.id);
     
    
      setSingleRestaurant(tempData);
  
}
  
//show the menu data in ui
 
  return (
    <div class="restaurant-parent">

    {  
      restaurantItem==""?(
        <div class="loader"></div>
     
      ):
      
      restaurantItem.map((restaurant,i)=>(
      <div className="restaurant-list" key={restaurant.items[i].id}>
        <div className='restaurant-card'>
       <img src={restaurant.items[i].image} alt="logo" className='restaurant-img'  style={{ height: "40vh" }}/>
        <h5 className="card-title restaurant-title">
          {restaurant.items[i].itemName}
        </h5>
        <div className="button-wrapper">
                      <button class="restaurant-button" onClick={()=>handleRestaurant(restaurant.items[i])}>
                        {singlerestaurant.includes(restaurant.items[i].id)?"Remove from Card":"Add to Card" }
                      </button>
                  </div>
        </div>
        </div>
       
      ))
      
    }
    </div>
  )
}

export default Menu