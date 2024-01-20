import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
import lp from './img/pizzalp.jpg';
function Home(){
    return(
    
    <div  className="hero">
      
        <div className="mask">
        <img className="intro-img" src={lp} alt="landing page" />
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
export default Home