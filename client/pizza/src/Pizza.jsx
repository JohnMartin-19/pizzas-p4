import React,{useEffect, useState} from "react";
import lp from './img/pizzalp.jpg';
import './Pizza.css'
function Pizza(){
    const [pizza,setPizza] = useState([])
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/pizza/")
          .then(function(response){response.json()
          .then(function(data) {
              console.log(data);
              setPizza(data)
          });
        })
          .catch(function(error) {
            console.log('Fetch Error:', error);
          });
        },[setPizza])
    return(
    <div  className="hero">
        <div className="content">
            <h2 style={{color:'white'}} >VIEW OUR AVAILABLE PIZZAS</h2>
            {pizza.map((pizza) => (
            <div className="card" key={pizza.id}>
            <img src={lp} alt="my avatar"  />
            <br />
            <small id="name">Name: {pizza.name}</small>
            <br />
            <small id="topping">Topping: {pizza.toppings}</small>
            <br />
            <small id="size">Size: {pizza.size}</small>
            <br />
            
            </div>
             ))}
        </div>
        
    </div>
        

    )
}


export default Pizza