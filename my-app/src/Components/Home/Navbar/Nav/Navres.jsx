import React from 'react'
import './Navres.scss'
import {NavLink} from 'react-router-dom'

export default function Navres(props) {
    return (
        <div className="navres">
            <ul className="unorder3">
               <NavLink to="/class" style={{textDecoration:'none'}}> <li className="nav_list1">CLASS</li></NavLink>
               <NavLink to="/course" style={{textDecoration:'none'}}> <li className="nav_list1">COURSES</li></NavLink>
               <NavLink to="/team" style={{textDecoration:'none'}}> <li className="nav_list1">TEAM</li></NavLink>
               <NavLink to="/blogs" style={{textDecoration:'none'}}> <li className="nav_list1">BLOGS</li></NavLink>
               <NavLink to="/career" style={{textDecoration:'none'}}> <li className="nav_list1">CAREERS</li></NavLink>
                <li className="nav_list1" onClick={props.openModal}>LOGIN</li>
            </ul>
        </div>
    )
}
