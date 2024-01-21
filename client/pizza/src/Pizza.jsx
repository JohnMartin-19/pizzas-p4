import React,{useEffect} from "react";
import {Link} from 'react-router-dom'
function Pizza(){
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/pizza/")
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
        <img className="intro-img"  alt="landing page" />
        </div>
        <div className="content">
            <p>Hello There</p>
            <h2 style={{color:'white'}}>WELCOME TO PIZZAHUB</h2>
            <Link to='/Pizza' className="btn">Pizza</Link>
            <Link className="btn btn-light" to='/Restaurants'>Restaurants</Link>
        </div>
        
    </div>
        

    )
}


export default Pizza