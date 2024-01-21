import React,{useEffect, useState} from "react";
import './Restaurants.css'
function Restaurants(){
  const [restaurant,setRestaurant] = useState([])
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/restaurant/")
          .then(function(response){response.json()
          .then(function(data) {
              console.log(data);
              setRestaurant(data)
          });
        })
          .catch(function(error) {
            console.log('Fetch Error:', error);
          });
        },[setRestaurant])
  return(
      <div  className="hero">
      
        <div className="mask">
        
        </div>
        <div className="content">
            <p>Hello There</p>
            <h2 style={{color:'white'}}>VIEW OUR RESTAURANTS</h2>
            {restaurant.map((restaurant) => (
            <div >
              <table className="table" key={restaurant.id}>
                <tr>
                    <th id="name">NAME</th>
                    <th id='Address'>ADDRESS</th>
                    <th id="city">CITY</th>
                    <th id ="pizza">PIZZA</th>
                  </tr>
                  <tr>
                    <td >{restaurant.restaurant_name}</td>
                    <td>{restaurant.address}</td>
                    <td>{restaurant.city}</td>
                    <td>{restaurant.pizza}</td>
                  </tr>
                  
              </table>
            
            </div>
             ))}
        </div>
      
      </div>
    )
}

export default Restaurants