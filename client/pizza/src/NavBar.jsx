import React,{useState} from "react";
import { NavLink,Link } from "react-router-dom";
import './NavBar.css';

function NavBar(){
    const [click] = useState(false)
    //const handleClick = () => setClick(!click)
    const[color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener('scroll',changeColor)
    return(
        <div>
                <nav class={color ? 'nav nav-bg' : 'nav'} >
                    <NavLink to='/' ><h4>PizzaHUB</h4></NavLink>
                    <ul className={click ? 'nav-menu active':"nav-menu "}>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/Pizza'>Pizzas</Link>
                        </li>
                        <li>
                            <Link to='/Restaurants'>Restaurants</Link>
                        </li>
                    
                    </ul>
                    
                    
                </nav>
        </div>
    )
}

export default NavBar;