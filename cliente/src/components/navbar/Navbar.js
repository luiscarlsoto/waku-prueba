import React from 'react'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router'
import './Navbar.css'
const Navbar = () => {
    const location = useLocation();
    const active = location.pathname.includes('games') ? true : false
    return (
        <div className="navBar">
            <div className="navBar-opc">
                <div><Link style={{color: active ? "rgb(204, 40, 219)" : "rgb(177, 175, 175)"}} to="/games">Games</Link></div>
                <div><Link style={{color: !active ? "rgb(204, 40, 219)" : "rgb(177, 175, 175)"}} to="/deals">Deals</Link></div>
            </div>
            <div className="navBar-profile">
                <div className="profile-name">Luis Carlos Soto</div>
                <div className="profile-img" style={{backgroundImage:"url(https://www.w3schools.com/w3css/img_avatar3.png)"}}>
                    <span> ✘ </span>
                </div>
            </div>
        </div>

)
}

export default Navbar
