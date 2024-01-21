import React,{useEffect} from "react";
import {Link} from 'react-router-dom'
function Restaurants(){
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/restaurant/")
          .then(function(response){response.json()
          .then(function(data) {
              console.log(data);
          });
        })
          .catch(function(error) {
            console.log('Fetch Error:', error);
          });
        },[])
  return(
      <div  className="hero">
      
        <div className="mask">
        
        </div>
        <div className="content">
            <p>Hello There</p>
            <h2 style={{color:'white'}}>VIEW OUR RESTAURANTS</h2>
            <Link to='/Pizza' className="btn">Pizza</Link>
            <Link className="btn btn-light" to='/Restaurants'>Restaurants</Link>
        </div>
      
      </div>
    )
}

export default Restaurants