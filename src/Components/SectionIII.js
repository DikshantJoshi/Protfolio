import React from 'react'
import {Route,Link} from 'react-router-dom'
import './Styling/SectionIII.css'

const SectionIII = () => {
    return (
        <div className="sectionIII">
            <div className="sectionIIICont">
            <div className="sectionIIIContI">
                
                <h2>Get your certificates now!</h2>
                <p>
                For your passionate support to this novel cause, we will send you a verified certificate which you can share with your personal and professional network.
                </p> 
                <Link to="/Pledge"><a href="">Pledge Now :)</a></Link>
                
            </div>
            <div className="sectionIIIContII">
                <img src={"https://womensday2021.thesparksfoundation.info/pledge/images/Recognition.png"}></img>
                
            </div>

            </div>
            
        </div>
    )
}

export default SectionIII
