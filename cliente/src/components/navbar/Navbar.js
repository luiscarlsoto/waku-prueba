import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { useLocation } from 'react-router'
import {getUser} from '../../services/auth'
import logoutIcon from '../../assets/sign-out-alt-solid.svg'
import './Navbar.css'
const Navbar = () => {
    const [user, setUser] = useState("")
    const getUserd = async () =>{
       const response = await getUser()
       console.log() 
       setUser(response)
    }
    useEffect(() => {
        getUserd()
    }, [])

    const history = useHistory()
    const location = useLocation();
    const active = location.pathname.includes('games') ? true : false
    return (
        <div className="navBar">
            <div className="navBar-opc">
                <div><Link style={{color: active ? "rgb(204, 40, 219)" : "rgb(177, 175, 175)"}} to="/games">Games</Link></div>
                <div><Link style={{color: !active ? "rgb(204, 40, 219)" : "rgb(177, 175, 175)"}} to="/deals">Deals</Link></div>
            </div>
            <div className="navBar-profile">
                <div className="profile-name">{user.displayName}</div>
                <div>
                <div className="profile-img" style={{backgroundImage:`url(${user.photos})`}}>
                </div>
                </div>
                <span className="icon icon-logout" onClick={e => {localStorage.clear(); history.push('/auth')} }/>
            </div>
        </div>

)
}

export default Navbar
