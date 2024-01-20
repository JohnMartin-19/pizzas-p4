import React from "react";
import { NavLink,Link } from "react-router-dom";
import './NavBar.css';

function NavBar(){
    <>
                <nav class={color ? 'nav nav-bg' : 'nav'} >
                <NavLink to='/' ><h4>PizzaHUB</h4></NavLink>
                <ul className={click ? 'nav-menu active':"nav-menu "}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/About Me'>About Me</Link>
                    </li>
                    <li>
                        <Link to='/MyStacks'>Tech Stacks</Link>
                    </li>
                    <li>
                        <Link to='/Projects'>Projects</Link>
                    </li>
                    <li>
                        <Link to='/Contact Me'>Contact Me</Link>
                    </li>
                </ul>
                
                
            </nav>
    </>
}

export default NavBar;