import React from 'react'
import './Navres.scss'

export default function Navres(props) {
    return (
        <div className="navres">
            <ul className="unorder3">
                <li className="nav_list1">CLASS</li>
                <li className="nav_list1">COURSES</li>
                <li className="nav_list1">TEAM</li>
                <li className="nav_list1">BLOGS</li>
                <li className="nav_list1">CAREERS</li>
                <li className="nav_list1" onClick={props.openModal}>LOGIN</li>
            </ul>
        </div>
    )
}
