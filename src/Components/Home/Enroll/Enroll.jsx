import React from 'react'
import './Enroll.scss'
import Card from './Card/Card'

export default function Enroll() {
    return (
        <div className="enroll">
           <div className="card_container">
               <Card/>
               <Card/>
               <Card/>
               <Card/>
           </div>
        </div>
    )
}
