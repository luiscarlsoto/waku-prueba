import React from 'react'
import './menu.css'
import {  Link } from 'react-router-dom'
export const Menu = (props) => {
    return (
        <div className="menu">
            <ul>
                 {props.children}
            </ul>
        </div>
    )
}
export const MenuOption = (props) => {
    return (
        <li className="menuOption">
            <Link to={props.linkto}>{props.title}</Link>
        </li>
    )
}
