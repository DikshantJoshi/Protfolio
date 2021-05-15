import React from 'react'
import {Route,Link} from 'react-router-dom'
import './Styling/Header.css';

const Header = () => {
    return (
        <div className = "header">
            <div className="headerCon">
                <a href="#">Home</a>
                <Link to="/Pledge"><a href="#">Ipledge</a></Link>
                <a href="#"> THE SPARKS FOUNDATION</a>
                <a href="#">Contact</a>
                <a href="#">Learn More</a>
            </div>
            
        </div>
    )
}

export default Header
