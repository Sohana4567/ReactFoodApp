import React, { useEffect,useState } from 'react'
import '../Components/Order.css'
import axios from 'axios'
function Order() {
    const [restaurantorder,setOrder]=useState([]);

    //  Fetch the data of restaurant from localstorage
    useEffect(()=>{
        const items=JSON.parse(localStorage.getItem('restaurant1'));
        console.log("items",items)
        if(items){
            setOrder(items)
        }
    },[]);

    // When you click the order button,your order will place successfully and delete from localstorage and ui

    function handleOrder(e,order){
        e.preventDefault();
       if(window.confirm("Are you sure order the item")==true){
        axios.post('https://apimocha.com/ecatering-ui-test/order',order)
        .then(function (res) {
          console.log("res",res);
         
          const filteredOrder=restaurantorder.filter(orderitem=>orderitem.id!=order.id);
          localStorage.setItem('restaurant1',JSON.stringify(filteredOrder));
          setOrder(filteredOrder)
        })
        .catch(function (error) {
          console.log("err",error);
        });
       }
    }

    //display the order
  return (
    <div class="order-container">
     <table class="order-table">
      <thead>
  <tr>
    <th>id</th>
    <th>img</th>
    <th>Item name</th>
    <th>Price</th>
    <th>Order</th>
  </tr>
  </thead>
  <tbody>
    {
        restaurantorder==""?(
            <div class="loader"></div>
         
          ):
          restaurantorder.map(order=>(
            <tr key={order.id}>
                <td>{order.id}</td>
                <td> <img src={order.image} alt="logo" className='restaurant-img'  style={{ height: "10vh" }}/></td>
            <td>{order.itemName}</td>
            <td>{order.basePrice}</td>
            <td><button  className="btn" onClick={(e)=>handleOrder(e,order)}>Order</button></td>
            </tr>
          ))
    }
    </tbody>
    </table>
    </div>
  )
}

export default Order